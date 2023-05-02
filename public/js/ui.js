const settings = {
  //page
  stream_width: 900,
  python_width: 3040,
  display_width: 1920,
  display_height: 1080,
  // TODO: specify different colors
}

settings.ratio = settings.stream_width/settings.python_width;

const dbug = true;
let state = "idle"; // idle, process, predict
let svg;

// d3 helpers
const lineGenerator = d3.line();
/****** FUNCTIONS ********/

const initSvgCanvas = function(w, h) {
  svg = d3.select("#overlay").append("svg")
    .attr("width", w)
    .attr("height", h)
    .attr("id", "svg");
    return svg;
}

const parseFromJSON = function() {
  dbug && console.log("test: parse from json");
  $.getJSON( "layers.json", function( data ) {
    //const c = jQuery.parseJSON(data);
    interpreteData(data)
  });
}

const interpreteData = function(data) {
  for (var i = 0; i < data.length; i++) {
    const layer = data[i];
    dbug && console.log(layer.name, layer.type);
    if (layer.type == "contours") renderContour(layer.data, layer.name);
    else if(layer.type == "circle") renderCircles(layer.data);
    else if(layer.type == "rect") renderRect(layer.data);
  }
}

const renderCircles = function(data) {
  data = JSON.parse(data)[0];
  const x = data[0][0];
  const y = data[0][1];
  const r = data[1];
  // center point & radius

  svg.append('circle')
  .attr('cx', map(x))
  .attr('cy', map(y))
  .attr('r', map(r))
  .attr('stroke', 'white')
  .attr('fill', 'none');
}

const map = function(x) {
  return parseFloat((x*settings.ratio).toFixed(2));;
}

const map2DArray = function(data){
  let points = [];
  for (var i = 0; i < data.length; i++) {
    points[i] = [];
    d = data[i];
    // deal with different formats
    if (d.length==1) d = d[0]
    points[i][0] = map(d[0]);
    points[i][1] = map(d[1]);
  }
  return points;
}

const renderRect = function(data) {

  data = JSON.parse(data)[0];
  points = map2DArray(data);
  console.log(data, points)
  var hull = d3.polygonHull(points);

  var line = d3.line()
    .curve(d3.curveLinearClosed);

  svg.append("path")
      .attr("d", line(hull))
      .attr('stroke', color)
      .attr('fill', 'none');
}

const renderContour = function (data, name){
  data = JSON.parse(data)[0];
  points = map2DArray(data);
  var pathData = lineGenerator(points);
  color = "white";
  svg.append('path')
     .attr('d', pathData)
     .attr('stroke', color)
     .attr('fill', 'none');
}

const size = function(ar){
    var row_count = ar.length;
    var row_sizes = []
    for(var i=0;i<row_count;i++){
        row_sizes.push(ar[i].length)
    }
    return [row_count, Math.min.apply(null, row_sizes)]
}

$(document).ready(function() {
  initSvgCanvas(settings.stream_width, settings.stream_width);
  parseFromJSON();

  //TODO: animation
});
