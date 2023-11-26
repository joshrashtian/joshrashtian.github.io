import Taskify from '../assets/projects/taskify.jpeg'
import Disphotoplay from '../assets/projects/Disphotoplay.png'

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
    type: "Video Production",
  }
];

export { projects };