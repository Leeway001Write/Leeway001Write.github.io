// import thumbnail from './assets/THUMBNAIL.png'
import portfolio1 from "./assets/project-images/portfolio.png"
import portfolio2 from "./assets/project-images/portfolio-src.png"

interface Project {
	title: string;
	link?: string;
	current: boolean;
	description: React.ReactElement;
	skills: string[];
	images: string[];
}

export const projects: Project[] = [
  {
    title: "This Portfolio (WIP)",
    link: "https://github.com/Leeway001Write/Leeway001Write.github.io",
    current: true,
    description: (
      <>
        <p>This website is made from scratch, using only base React and Vite tools. HTML, CSS, and Typescript were all manually written.</p>
        <p>This portfolio is intended to showcase my technical experience in the same light I view it (see *About Me*).</p>
      </>
    ),
    skills: ["React + Vite", "HTML + CSS", ],
    images: [portfolio1, portfolio2]
  },
  {
    title: "Undergraduate Research Project (WIP)",
    current: true,
    description: (
      <>
        <p>Feb 2025 - Current | <strong>BYU Usable Security and Privacy Lab</strong></p>
        <p>Conducted academic research to improve Account Security Interfaces for FIDO2 Passkeys.</p>
      </>
    ),
    skills: ["Research papers", "Small team cooperation", "LaTeX", "Overleaf"],
    images: []
  }
]

/*
- CS 260
- Undergrad research
- Game Jam
- Mobile Controller
- Game Development
*/
