
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
  