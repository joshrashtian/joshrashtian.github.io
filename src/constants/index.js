import Taskify from '../assets/projects/taskify.jpeg'
import Disphotoplay from '../assets/projects/Disphotoplay.png'
import Mario from '../assets/projects/MarioLegacyIcon.png'
import Tankzone from '../assets/projects/Tank.png'
import TheRace from '../assets/projects/Car.png'
const status = ["Finished", "Work In Progress"];
const types = ["Software", "Video Production"];


export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "story",
    title: "My Journey",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const projects = [
    //* Status: 0 = Finished, 1 = WIP

    // Any Future Database Entries Should Follow This:
    //{
    //  id: 0,
    //  title: " title ",
    //  description: " brief disc.",
    //  type: " type of ",
    //  status: status[ 0 is finished, 1 is not ],
    //  date: "date",
    //  logo: Photo,
    //  tools: ["Tools Used"],
    //  points: [
    //    "Key Points"
    //  ],
    //  source_code: "link, if none just delete"
    //},

  {
    id: 0,
    title: "Taskify",
    description: "A small, simple, brief task app.",
    type: "Software",
    status: status[0],
    date: "September 2023",
    logo: Taskify,
    tools: ["React Native", "JavaScript"],
    points: [
      "Used to learn the basics of React Native",
      "Used concepts from this on later projects",
    ],
    source_code: "https://github.com/joshrashtian/Taskify"
  },
  {
    id: 1,
    title: "Disphotoplay",
    description: "A simple photo album application.",
    type: "Software",
    status: status[0],
    date: "March 2023",
    logo: Disphotoplay,
    tools: ["JavaScript"],
    points: [
      "Used to learn the basics of JavaScript, and build a simple project.",
      "AP Computer Science Princples AP Exam",
    ],
    source_code: "https://github.com/joshrashtian/Disphotoplay"
  },
  {
    id: 2,
    title: "Untitled WRTV Project",
    description: "A simple photo album application.",
    type: "Video Production",
    status: status[0],
    date: "March 2023",
    tools: ["JavaScript"],
    points: [
      "Used to learn the basics of JavaScript, and build a simple project.",
      "AP Computer Science Princples AP Exam",
    ],
  },
  {
     id: 3,
     title: "Super Mario Legacy",
     description: "A simple Mario fan game for my Game Development Course.",
     type: "Video Game",
     status: status[1],
     date: "September 2019",
     logo: Mario,
     tools: ["Construct 3", "JavaScript"],
     points: [
       "Learned Asyncing", "Learned how to make a platformer"
     ],
     website: "https://gamegen.games/game/BjEpaGDJ2ksndAhKn"
  },
  {
    id: 4,
    title: "Tankzone",
    description: "First big original game. Two tanks can battle, Controller or Keyboard",
    type: "Video Game",
    logo: Tankzone,
    status: status[1],
    date: "August 2018",
    tools: ["Construct 3", "JavaScript"],
    points: [
      "Learned Asyncing", "Learned how to make a platformer"
    ],
    website: "https://gamegen.games/game/axrh2STs9q6aG3WdK"
 },
 {
  id: 5,
  title: "The Race",
  description: "Top Down Arcade Racer with a Different Path",
  type: "Video Game",
  logo: TheRace,
  status: status[0],
  date: "September 2018",
  tools: ["Construct 3", "JavaScript"],
  points: [
    "Learned Asyncing", "Learned how to make a platformer"
  ],
  website: "https://gamegen.games/game/nJamThw3CmYCA5bnh"
},
];

export { projects };