const settings = {
  //page
  stream_width: 900,
  python_width: 3040,
  display_width: 1920,
  display_height: 1080,
  animation:true,
  animation_duration: 2000,
  sequence: true, // show everything at once or in sequence
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

const demo = function() {
  dbug && console.log("test: parse from json");
  $.getJSON( "data/layers.json", function( data ) {
    // const c = jQuery.parseJSON(data);
    interpreteData(data)
  });
}

const interpreteData = function(data) {
  if (settings.sequence){
    // grain_contours -> box -> island_contours -> circle
    obj = parseData(data);
    console.log(obj)
    renderContour(obj.grain_contours.data, "grain_contours", function(){
      renderRect(obj.bounding_box.data, function(){
        renderContour(obj.island_contours.data, "island_contours", function(){
          renderCircles(obj.island_circles.data, "island_circles", function(){
            renderMessages("The Three Parallel", "Three visible cracks, foretells of a bountiful harvest or achievement.");
          })
        });
      });
    });
    ;

  } else {
    // simutanous
    for (var i = 0; i < data.length; i++) {
      const layer = data[i];
      dbug && console.log(layer.name, layer.type);
      if (layer.type == "contours") renderContour(layer.data, layer.name);
      else if(layer.type == "circle") renderCircles(layer.data);
      else if(layer.type == "rect") (layer.data);
    }
  }

}

const renderCircles = function(data) {
  data = JSON.parse(data);
  // can be multiple circles
  for (var i = 0; i < data.length; i++) {
    const c = data[i]
    const x = c[0][0];
    const y = c[0][1];
    const r = c[1];
    // center point & radius

    svg.append('circle')
    .attr('cx', map(x))
    .attr('cy', map(y))
    .attr('r', map(r))
    .attr('class', "island_circles")
    .attr('stroke', 'white')
    .attr('fill', 'none')
    .transition().delay(1000).duration(100)
    .ease(d3.easeLinear).style("opacity", 1);
  }

}

const map = function(x) {
  return parseFloat((x*settings.ratio).toFixed(2));;
}

const parseData = function(data) {
  let o = {}
  for (var i = 0; i < data.length; i++) {
    const layer = data[i];
    o[layer.name] = {
      type: layer.type,
      data: layer.data
    }
  }
  return o;
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

const renderRect = function(data, callback) {

  data = JSON.parse(data)[0];
  points = map2DArray(data);
  console.log(data, points)
  var hull = d3.polygonHull(points);

  var line = d3.line()
    .curve(d3.curveLinearClosed);

  svg.append("path")
      .attr("d", line(hull))
      .attr('stroke', color)
      .attr('id', "box")
      .attr('fill', 'none')
      .transition().duration(100)
      .ease(d3.easeLinear).style("opacity", 1)
      .delay(1000)
      .end()
      .then(() => {
        callback()
      });
}

const tour = function (data, name){
  data = JSON.parse(data)[0];
  points = map2DArray(data);
  var pathData = lineGenerator(points);
  color = "white";
  id = name
  svg.append('path')
     .attr('d', pathData)
     .attr('id', name)
     .attr('stroke', color)
     .attr('fill', 'none');
}

const renderContour = function (data, name, callback=None){
  data = JSON.parse(data)[0];
  points = map2DArray(data);
  var pathData = lineGenerator(points);
  color = "white";
  id = name
  p = svg.append('path')
     .attr('d', pathData)
     .attr('id', name)
     .attr('stroke', color)
     .attr('fill', 'none')

  if (settings.animation) {
    p.call(reveal, callback)
   };
}

const size = function(ar){
    var row_count = ar.length;
    var row_sizes = []
    for(var i=0;i<row_count;i++){
        row_sizes.push(ar[i].length)
    }
    return [row_count, Math.min.apply(null, row_sizes)]
}

const reveal = function(path, callback){
  path.transition()
    .duration(settings.animation_duration)
    .ease(d3.easeLinear)
    .attrTween("stroke-dasharray", function() {
      const length = this.getTotalLength();
      return d3.interpolate(`0,${length}`, `${length},${length}`);
    })
    .end()
    .then(() => {
      callback()
    });
}

const renderMessage = function(title, text){
  // fade out stream

}

$(document).ready(function() {
  initSvgCanvas(settings.stream_width, settings.stream_width);
  demo();
  //TODO: animation
});
