// read txt line by line
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status === 200) {
            callback(rawFile.responseText);
        }
    };
    rawFile.send(null);
}

String.prototype.count=function(c) {
  var result = 0, i = 0;
  for(i;i<this.length;i++)if(this[i]==c)result++;
  return result;
};

function testInterpreter() {
  readTextFile('/results.txt', function (data) {
    console.log("data", data)
    patterns_with_names.map(function (pattern, i) {
      pattern.regex = patterns[i]
    })

    data.split('\n').forEach(function (line) {
      was_found = false
      categories.forEach(function (category, i) {
        if (category.f(line)) {
          category.detections.push(line)
          was_found = true
        }
      })
    })

    for (let i = 0; i < categories.length; i++) {
      console.log(categories[i].name, categories[i].detections.length)
    }
    console.log("exceptions", exceptions)
    console.log("categories", categories)
  })
}

var exceptions = []


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}

function findCategory (line) {
  console.log("findCategory", line, categories)
  var was_found = false
  for (i in categories) {
    if (categories[i].f(line)) {
      categories[i].detections.push(line)
      return categories[i]
    }
  }
  return categories[3] // mist
}
