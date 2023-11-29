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
    tools: ["React Native", "JavaScript", "Photoshop"],
    points: [
      "Used to learn the basics of React Native",
      "Used concepts from this on later projects",
    ],
    source_code: "https://github.com/joshrashtian/Taskify",
    featured: "yes",
  },
  {
    id: 1,
    title: "Disphotoplay",
    description: "A simple photo album application.",
    type: "Software",
    status: status[0],
    date: "March 2023",
    logo: Disphotoplay,
    tools: ["JavaScript", "Illustrator"],
    points: [
      "Used to learn the basics of JavaScript, and build a simple project.",
      "AP Computer Science Princples AP Exam",
    ],
    source_code: "https://github.com/joshrashtian/Disphotoplay",
    featured: "yes",
  },
  {
    id: 2,
    title: "Untitled WRTV Project",
    description: ".",
    type: "Video Production",
    status: status[0],
    date: "March 2023",
    tools: ["Premiere Pro"],
    points: [
      "Used to learn the basics of JavaScript, and build a simple project.",
      "AP Computer Science Princples AP Exam",
    ],
    featured: "no",
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
     website: "https://gamegen.games/game/BjEpaGDJ2ksndAhKn",
     featured: "yes",
  },
  {
    id: 4,
    title: "Tankzone",
    description: "Two tanks can battle, Controller or Keyboard",
    type: "Video Game",
    logo: Tankzone,
    status: status[1],
    date: "August 2018",
    tools: ["Construct 3", "JavaScript"],
    points: [
      "Learned Asyncing", "Learned how to make a platformer"
    ],
    website: "https://gamegen.games/game/axrh2STs9q6aG3WdK",
    featured: "no",
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
  website: "https://gamegen.games/game/nJamThw3CmYCA5bnh",
  featured: "no",
},
];

const studybases = [{
  title: "CMPSCI-111 Database",
  desc: "Introduction to Java",
  school: "College of the Canyons",
  grade: "A",
  source_code: "https://github.com/joshrashtian/CMPSCI-111_Codebase"
},
{
  title: "CMPSCI-182 Database",
  desc: "Data Structures",
  school: "College of the Canyons",
  grade: "N/A",
  source_code: "N/A"
}
]

const exprience = [
{
  title: "Programmer", 
  desc: "I have been interested in programming since I was a kid, when I was a kid I used to play around with Scratch and sometimes Code.Org, however around age 12 I picked up Construct 3 from a Game Development Course. It was a visual scripting based coding tool, and I spent a long time just trying out new ways to make my small little web games better. In 2022, I took the AP Computer Science Principles Course at my High School, and I instantly fell in love all over again. I fine-tuned my AP app and tried to put as much features as I could into it. As of 2023, I have been learning JavaScript, Java, React, Swift, as well as C#. And I have been enjoying my time learning all of these.",
},
{
  title: "Game Developer", 
  desc: "I worked in the Game Development Space ",
},
{
 title: "Video Creator",
 desc: "",
},
{
 title: "Graphic Designer",
 desc: "",
}]

export { exprience, projects, studybases };