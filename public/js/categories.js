
const categories = [,
    {
      name: "The Teller",
      text: ["A clear single crack that opens like a telling mouth, unspoken words need to be told and heard. The bigger the opening, the more needs to be shared."],
      number:["23"],
      detections: [],
      f: (s) => s.count('>') > 0, // The Teller
    },
    {
      name: "Branches",
      text: ["A vertical crack cut across multiple horizontal cracks in the middle of the surface, foretells a journey filled with many paths and possibilities.",
      "Two or multiple lines meets, speaks of unexpected allies and the coming together of forces.",
      "One crack separated by multiple lines, speaks of a parting of ways and the need to make a difficult choice."],
      number:["1","2","3"],
      detections: [],
      f: (s) => s.count('|') == 1 && s.count('+') >= 1, // Branches
    },
    {
      name: "The Delicate Heart",
      text: ["Turmoil coming from inside will make you feel threatened by the outside. Try to really look at what's in front of you. You're safe.",
      "Many moons ago you hid a treasure. It's still there, waiting for you. Handle it with utmost tenderness."],
      number:["4","5"],
      detections: [],
      f: (s) => s == "*" || s == "*º" || s == "º*", // The Delicate heart
    },
    {
      name: "Hidden Balance",
      text: ["Two subtle signs of cracks, a hidden but fragile balance is achieved at the current moment, whispering secrets of vulnerability and resilience.",
      "There's much peace to be had in grass. Dance with the shadow and let your mind fly with the cloud."],
      number:["6","7"],
      detections: [],
      f: (s) => s.count('*') == 2 && s.count('_') == 0 && s.count('|') == 0, // Hiddem Balance
    },
    {
      name: "The Mist",
      text: ["No clear sign of cracks with uneven surface. On top of the hill, the clouds are still cooking the rice."],
      number:["8"],
      detections: [],
      f: (s) => s == "", // The Mist
    },
    {
      name: "The Broken Cloud",
      text: ["Rough and uneven surface, speaks of challenges and obstacles. You might feel the weight of the world fall on you, but what we call up and down is an illusion, a matter of perspective. Let the universe hold you up."],
      number:["24"],
      detections: [],
      f: (s) => s.count('_') > 2 && s.count('|') > 2 && s.length > 6, // The Broken Cloud
    },
    {
      name: "The Libra",
      text: ["Two subtle signs of cracks joined by one clear divider crack, unveil a struggle between two realms."],
      number:["13"],
      detections: [],
      f: (s) => s.count('*') == 2 && s.count('_') == 1, // Libra
    },
    {
      name: "The Seedling",
      text: ["One clear sign of crack accompanied by a subtle one, something new begins to unfold. Nurture the seedlings, their growth will surge."],
      number:["12"],
      detections: [],
      f: (s) => s.count('_') == 1 && s.count('*') == 1, // Seedling
    },
    {
      name: "The Divider",
      text: ["A clear horizontal crack the separate the grain into two halves, an indicator of a clear division that needs to be made.",
      "A path reveals before you, the choice to follow it is yours. A testament to the boundless potential that resides within your soul.",
      "Far away a country was split in two pieces, like a chocolate bar. you may wish it didn't, but often history repeats itself."],
      number:["9","10","11"],
      detections: [],
      f: (s) => s.count('_') == 1 && s.count('|') == 0, // Divider
    },
    {
      name: "The Mirror",
      text: ["Two parallel cracks are formed on the surface of the rice grain. Close your eyes, take your time for a moment of reflection.",
      "Even inanimate objects change and grow. Watch a rock with your fingers until you understand its dance."
      "Two cracks are distributed on the surface of the rice grain. Every person you meet has a unique story and perspective. Listen to them with an open heart and you may learn something new.",
      ],
      number:["14","15","16"],
      detections: [],
      f: (s) => s.count('_') == 2 && s.count('|') == 0, // The mirror
    },
    {
      name: "The Unexpected Three",
      text: ["Where there's food for two, there's food for three. Guests must not be turned away.",
      "Every person you meet has a unique story and perspective. Listen to them with an open heart and you may learn something new."],
      number:["17","18"],
      detections: [],
      f: (s) => s.count('_') == 3 && s.count('|') == 0, // The Three Parallels
    },
    {
      name: "The Multiverse",
      text: ["A grain is a seed. A grain is a map. You contain inside you guides for the many versions of yourself you could be.",
      "Multiple cracks tightly packed on a single piece of rice, speaks of a crowded and bustling time to come."],
      number:["19","20"],
      detections: [],
      f: (s) => s.count('_') >= 4 && s.count('|') == 0, // Four cracks
    },
    {
      name: "The Serpentine",
      text: ["A long vertical crack winding its way on the edge, speaks of hidden truths and secrets waiting to be revealed."],
      number:["22"],
      detections: [],
      f: (s) => s.count('|') == 1, // Branches
    },
    {
      name: "The Indecisive Heart",
      text: ["Multiple half cracks that don't crack through the whole grain, a decision needs to be made so that the right path shall reveal."],
      number:["21"],
      detections: [],
      f: (s) => (s.count('-') + s.count('*') >= 3) && s.count('_') == 0, // The Indecisive Heart
    }
  ]
