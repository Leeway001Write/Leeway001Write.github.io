import thumbnail from './assets/THUMBNAIL.png'
import portfolio1 from "./assets/project-images/portfolio.png"
import portfolio2 from "./assets/project-images/portfolio-src.png"

export const projects = [
  {
    title: "This Portfolio (WIP)",
    current: true,
    description: ["This website is made from scratch, using only base React and Vite tools. HTML, CSS, and Typescript were all manually written.", "This portfolio is intended to showcase my technical experience in the same light I view it (see *About Me*)."],
    skills: ["React + Vite", "HTML + CSS", ],
    images: [portfolio1, portfolio2]
  },
  {
    title: "Undergraduate Research Project (WIP)",
    current: true,
    description: ["Feb 2025 - Current", "BYU Usable Security and Privacy Lab", "Conducted academic research to improve Account Security Interfaces for FIDO2 Passkeys."],
    skills: ["Research papers", "Small team cooperation", "LaTeX", "Overleaf"],
    images: [thumbnail, thumbnail]
  },
  {
    title: "Project 3",
    current: false,
    description: ["This is the description for this project."],
    skills: ["Skill a", "Skill b", "Skill c", "Skill d", "Skill e"],
    images: [thumbnail, thumbnail, thumbnail]
  },
  {
    title: "Project 4",
    current: false,
    description: ["This is the description for this project."],
    skills: ["Skill a", "Skill b", "Skill c", "Skill d", "Skill e"],
    images: [thumbnail, thumbnail, thumbnail]
  }
]

/*
- CS 260
- Undergrad research
- Game Jam
- Mobile Controller
- Game Development
*/
