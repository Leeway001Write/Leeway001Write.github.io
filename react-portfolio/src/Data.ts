import thumbnail from './assets/THUMBNAIL.png'

export const projects = [
  {
    title: "This Portfolio",
    current: true,
    description: ["This website is made from scratch, using only base React and Vite tools. HTML, CSS, and Typescript were all manually written.", "This portfolio is intended to showcase my technical experience in the same light I view it (see *About Me*)."],
    skills: ["React + Vite", "HTML + CSS", ],
    images: [thumbnail]
  },
  {
    title: "Project 2",
    current: false,
    description: ["This is the description for this project."],
    skills: ["Skill a", "Skill b", "Skill c"],
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
