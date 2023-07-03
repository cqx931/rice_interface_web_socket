
const categories = [
    {
      name: "Branches",
      text: ["A vertical crack cut across multiple horizontal cracks in the middle of the surface, foretells a journey filled with many paths and possibilities.","Two or multiple lines meets, speaks of unexpected allies and the coming together of forces."],
      detections: [],
      f: (s) => s.count('|') == 1 && s.count('+') >= 1, // branches
    },
    {
      name: "The Delicate Heart",
      text: ["Warns of fragility and the need for caution and obstacles to be overcome. But you will move through the obstacles like a lizard coming down a tree.", "Turmoil coming from inside will make you feel threatened by the outside. Try to really look at what's in front of you. you're safe.","Many moons ago you hid a treasure. it's still there, waiting for you."],
      detections: [],
      f: (s) => s == "*" || s == "*º" || s == "º*", // delicate heart
    },
    {
      name: "Hidden Balance",
      text: ["Two subtle signs of cracks, a hidden but fragile balance is achieved at the current moment.", "There's much peace to be had in grass. Remember we all come from bacteria."],
      detections: [],
      f: (s) => s.count('*') == 2 && s.count('_') == 0 && s.count('|') == 0, // hiddem balance
    },
    {
      name: "The Mist",
      text: ["No clear sign cracks with uneven surface. The destiny is not set, everything is possible."],
      detections: [],
      f: (s) => s == "", // The Mist -  empty
    },
    {
      name: "The Broken Cloud",
      text: ["Rough and uneven surface, speaks of challenges and obstacles. You might feel the weight of the world fall on you, but what we call up and down is an illusion, a matter of perspective. Let the universe hold you up."],
      detections: [],
      f: (s) => s.count('*') >= 3 && s.length > 6, // The Broken Cloud
    },
    {
      name: "The Libra",
      text: ["Two subtle signs of cracks joined by one clear divider crack, showing a struggle between two things."],
      detections: [],
      f: (s) => s.count('*') == 2 && s.count('_') == 1, // libra
    },
    {
      name: "The Divider",
      text: ["There's a path, and the choice to follow it is yours.", "Far away a country was split in two pieces, like a chocolate bar. you may wish it didn't, but often history repeats itself.", "A clear horizontal crack the separate the grain into two almost identical halves, an indicator of a clear division that needs to be made."],
      detections: [],
      f: (s) => s.count('_') == 1 && s.count('|') == 0, // divider
    },
    {
      name: "Mirror",
      text: ["Even inanimate objects change and grow. watch a rock with your fingers until you understand its dance.", "Two cracks interact with each other. Everything that you touch touches you back. Let life leave marks on you.", "Two cracks are distributed on the surface of the rice grain. Every person you meet has a unique story and perspective. Listen to them with an open heart and you may learn something new."],
      detections: [],
      f: (s) => s.count('_') == 2 && s.count('|') == 0, // the mirror
    },
    {
      name: "The Unexpected Three",
      text: ["If you enter a house that's divided into rooms, don't ask where the jungle is.", "Where there's food for two, there's food for three. Guests must not be turned away.","Every person you meet has a unique story and perspective. Listen to them with an open heart and you may learn something new."],
      detections: [],
      f: (s) => s.count('_') == 3 && s.count('|') == 0, // The Three Parallels
    },
    {
      name: "Four Parallels",
      text: ["A grain is a seed. A grain is a map. You contain inside you guides for the many versions of yourself you could be.","The light and the sharp and the soft and the porous share a space. In the middle of the road a few things become clear."],
      detections: [],
      f: (s) => s.count('_') == 4 && s.count('|') == 0, // Four cracks
    },
    {
      name: "The Clustered Five",
      text: ["Tightly packed on a single piece of rice, speaks of a crowded and bustling time to come.", "You will be ask to count. do it wholeheartedly, like you believe in numbers."],
      detections: [],
      f: (s) => s.count('_') == 5, // The Clustered Five
    },
    {
      name: "Curvy Lines",
      text: ["Scattered curvy paths with unclear direction or tendency. A decision needs to be made so that the right path shall reveal."],
      detections: [],
      f: (s) => s.count('+') >= 2 && s.count('+') <= 4 && s.count('|') >= 1, // Curvy Lines
    },
    {
      name: "The Serpentine",
      text: ["A long vertical crack winding its way on the edge, speaks of hidden truths and secrets waiting to be revealed."],
      detections: [],
      f: (s) => s.count('|') == 1, // The Serpentine
    },
    {
      name: "The Teller",
      text: ["A clear single crack that opens like a telling mouth, unspoken words need to be told and heard. The bigger the opening, the more needs to be shared."],
      detections: [],
      f: (s) => s.count('>') >= 1, // The Teller
    }
  ]
