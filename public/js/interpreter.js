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
  //var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(patterns_with_names));
  // var dlAnchorElem = document.getElementById('downloadAnchorElem');
  //dlAnchorElem.setAttribute("href",     dataStr     );
  //dlAnchorElem.setAttribute("download", "scene.json");
  //dlAnchorElem.click();

  for (let i = 0; i < categories.length; i++) {
    console.log(categories[i].name, categories[i].detections.length)
  }

  console.log("exceptions", exceptions)
  console.log("categories", categories)
})

const patterns = [
  /^\|[\+\*]*$/,
  /^\*$/, // delicate heart
  /^\*{2}[^_*|]*$/, // hidden ballance 
  /^$/, // emtpy
  /_{6,}/,
  /^[^\__]*\*\_[^\_]*$/, // libra 
  /^_[^\|_]*$/, // divider - correct
  /^__[^\|_]*$/, // the mirror 
  /^___[^\|_]*$/,
  /^____[^\|_]*$/,
  /^_{5,}$/,
  /^[^\+\|]*\+{3,}\|{1,}[^\+\|]*\+{3,}$/
];

const categories = [
  {
    name: "branches",
    detections: [],
    f: (s) => s.count('|') == 1 && s.count('+') >= 1, // branches
  },
  {
    name: "The Delicate Heart	",
    detections: [],
    f: (s) => s == "*" || s == "*º" || s == "º*", // delicate heart
  },
  {
    name: "Hidden Balance	",
    detections: [],
    f: (s) => s.count('*') == 2 && s.count('_') == 0 && s.count('|') == 0, // hiddem balance
  },
  {
    name: "The Mist",
    detections: [],
    f: (s) => s == "", // The Mist -  empty
  },
  {
    name: "exceptions The Broken Cloud exception",
    detections: [],
    f: (s) => s.count('_') > 5, // The Broken Cloud
  },
  {
    name: "1[_] The Libra",
    detections: [],
    f: (s) => s.count('*') == 2 && s.count('_') == 1, // libra
  },
  {
    name: "no[|] The Divider",
    detections: [],
    f: (s) => s.count('_') == 1 && s.count('|') == 0, // divider
  },
  {
    name: "Mirror ",
    detections: [],
    f: (s) => s.count('_') == 2 && s.count('|') == 0, // the mirror
  },
  {
    name: "The Three Parallels",
    detections: [],
    f: (s) => s.count('_') == 3 && s.count('|') == 0, // The Three Parallels
  },
  {
    name: "Four cracks",
    detections: [],
    f: (s) => s.count('_') == 4 && s.count('|') == 0, // Four cracks
  },
  {
    name: "The Clustered Five	",
    detections: [],
    f: (s) => s.count('_') == 5, // The Clustered Five
  },
  {
    name: "Curvy lines",
    detections: [],
    f: (s) => s.count('+') >= 3 && s.count('|') >= 1, // branches
  },
]

/*
const patterns = [
  /^.*\|[\+\*]*.*$/,
  /^.*[^\_]*\*[^\_]*.*$/,
  /^.*\*{2}.*$/,
  /^.*$/,
  /^.*_{6,}.*$/,
  /^.*[^\_]*\*\_[^\_]*.*$/,
  /^.*_[^\|]*.*$/,
  /^.*__[^\|]*.*$/,
  /^.*___[^\|]*.*$/,
  /^.*____[^\|]*.*$/,
  /^.*_{5,}.*$/,
  /^.*[^\+\|]*\+{3,}\|{1,}[^\+\|]*\+{3,}.*$/
];
const patterns = [
  /^.*[\|+\*]+.*$/,
  /^.*[^_|^\|]*[\*_][^_|^\|]*.*$/,
  /^.*[\*]{2}.*$/,
  /^$/,
  /^.*_{6,}.*$/,
  /^.*[^_]*[\*_][^_]*.*$/,
  /^.*_[^|]*.*$/,
  /^.*__[^|]*.*$/,
  /^.*___[^|]*.*$/,
  /^.*____[^|]*.*$/,
  /^.*_{5,}.*$/,
  /^.*[^+|]*[+]{3,}[\|]{1,}[^+|]*[+]{3,}.*$/
];
*/
const patterns_with_names = [
	{detections: [], name: "branches", regex: /^\|[\+\*]*$/},
	{detections: [], name: "The Delicate Heart", regex: /^[^\_]*\*[^\_]*$/},
	{detections: [], name: "Hidden Balance", regex: /^\*{2}$/},
	{detections: [], name: "The Mist", regex: /^$/},
	{detections: [], name: "The Broken Cloud", regex: /^_{6,}$/},
	{detections: [], name: "The Libra", regex: /^[^\_]*\*\_[^\_]*$/},
	{detections: [], name: "The Divider", regex: /^_[^\|]*$/},
	{detections: [], name: "Mirror", regex: /^__[^\|]*$/},
	{detections: [], name: "The Three Parallels", regex: /^___[^\|]*$/},
	{detections: [], name: "Four cracks", regex: /^____[^\|]*$/},
	{detections: [], name: "The Clustered Five", regex: /^_{5,}$/},
	{detections: [], name: "Curvy lines", regex: /^[^\+\|]*\+{3,}\|{1,}[^\+\|]*\+{3,}$}/}
];

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
  var was_found = false
  categories.forEach(function (category, i) {
    if (category.f(line)) {
      category.detections.push(line)
      return category
    }
  })
  return []
}

/*
var shuffled_patterns = patterns_with_names
for (let i = 0; i < shuffled_patterns.length; i++) {
  if(shuffled_patterns[i].regex.test(line)) {
    var name = shuffled_patterns[i].name
    patterns_with_names.forEach(function (pattern, j) {
      // console.log("pattern.name", name, pattern)
      if (name == pattern.name) {
        pattern.detections.push(line)
      }
    })

    was_found = true
    break
    //const div = document.getElementById("message");
    //div.innerHTML = line;
  }
}
if (!was_found) {
  exceptions.push(line)
}
*/