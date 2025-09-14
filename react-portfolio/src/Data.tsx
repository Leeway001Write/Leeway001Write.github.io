// import thumbnail from './assets/THUMBNAIL.png'
import portfolio1 from "./assets/project-images/portfolio.png"
import portfolio2 from "./assets/project-images/portfolio-src.png"
import spaceJunk from "./assets/project-images/space-junk.png"
import jamResults from "./assets/project-images/jam-results.png"
import controller from "./assets/project-images/controller.png"

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
    title: "Undergraduate Research Project (WIP)",
    current: true,
    description: (
      <>
        <p>Feb 2025 - Current | <strong>BYU Usable Security and Privacy Lab</strong></p>
        <p>Conducted academic research to improve Account Security Interfaces for FIDO2 Passkeys.</p>
        <p>This project is mentored by <strong>Dr. Daniel Zappala.</strong></p>
      </>
    ),
    skills: ["Studying research", "Small team cooperation", "LaTeX", "Overleaf"],
    images: []
  },
  {
    title: "This Portfolio (WIP)",
    link: "https://github.com/Leeway001Write/Leeway001Write.github.io",
    current: true,
    description: (
      <>
        <p>This website is intended to showcase some of my hard skills and experience.</p>
        <p>It's <strong>made from scratch</strong>, using only base React and Vite tools. HTML, CSS, and Typescript were all manually written. This was my first major project using React.</p>
      </>
    ),
    skills: ["React + Vite", "HTML + CSS", "git", "GitHub Pages"],
    images: [portfolio1, portfolio2]
  },
  {
    title: "Game Jam Submission",
    link: "https://github.com/Leeway001Write/melonJam6",
    current: false,
    description: (
      <>
        <p>July 2025 | MelonJam 6 - <i>Compound</i></p>
        <p>In a team of three, we developed a game using the Godot game engine in under 36 hours. Overall, we <strong>ranked 33rd</strong> out of 131 entries.</p>
        <p><a href="https://itch.io/jam/melonjam6/rate/3751910">Click to view submission on Itch.io</a>, or play <i>Space Junk</i> <a href="https://leeway001.itch.io/space-junk">here</a>.</p>
      </>
    ),
    skills: ["Time-constrained development", "Collaborative development", "git", "Godot Engine"],
    images: [spaceJunk, jamResults]
  },
  {
    title: "Prototype Controller Web App",
    link: "https://github.com/Leeway001Write/Toastball-Controller",
    current: false,
    description: (
      <>
        <p>A niche project in which I created a functional web app for mobile that can emulate an Xbox Controller or keyboard input, enabling light gaming especially in a group context.</p>
        <p>This works by hosting a server on the desktop device which receives websocket input from phones on the same local network using the web app, and emulating that input on the machine.</p>
        <p>Prototype features include a controller for a basic indie game (not my own) complete with a QR code for quick connection via mobile phone.</p>
      </>
    ),
    skills: ["WebSocket", "Pipe Server", "LAN", "Golang"],
    images: [controller]
  }
]

/*
- CS 260
- Mobile Controller
- Game Development
*/
