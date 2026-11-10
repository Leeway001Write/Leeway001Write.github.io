import './App.css'

import HorizDivider from './components/HorizDivider.tsx'
import NavBar from './components/NavBar.tsx'

import ProfileCard from './components/ProfileCard.tsx'
import Shortcut from './components/Shortcut.tsx'

import AboutMe from './components/AboutMe.tsx'

import ProjectCard from './components/ProjectCard.tsx'
import { projects, coursework } from './Data.tsx'

import SocialButton from './components/SocialButton.tsx'

const resume = './Resume_Dallin-Wright.pdf';


function App() {
  var projectsLeftGroup = [];
  var projectsRightGroup = [];
  for (let i = 0; i < projects.length; i++) {
    if (i % 2 == 0) {
      projectsRightGroup.push(projects[i]);
    } else {
      projectsLeftGroup.push(projects[i]);
    }
  }
  var courseworkLeftGroup = [];
  var courseworkRightGroup = [];
  for (let i = 0; i < coursework.length; i++) {
    if (i % 2 == 0) {
      courseworkRightGroup.push(coursework[i]);
    } else {
      courseworkLeftGroup.push(coursework[i]);
    }
  }
  
  return (
    <>
      <div className="main">

        <div className="header">
          <p>Welcome! This <b>Portfolio</b> showcases some of my technical ability.</p>
          <div>
            <p>For my Résumé, <b>click here {">"}</b></p>
            <a href={resume} target="_blank">
              <button className="goto-resume-button"><b>📄 View Resume</b></button>
            </a>
          </div>
        </div>

        <div id="home" className="home-page">
          <ProfileCard />
          <div>
            <p className="jump-label"><b>Jump to</b></p>
            <HorizDivider />
          </div>
          <div className="shortcut-row">
            <Shortcut title="About Me" jump="#about-me" />
            <Shortcut title="Projects" jump="#projects" />
            <Shortcut title="Contact" jump="#contact" />
          </div>
        </div>
  
        <div id="about-me" className="about-me-page">
          <h1>About Me</h1>
          <AboutMe />
        </div>
     
        <div id="experience" className="experience-page">
          <h1>Experience</h1>

          <div id="projects" className="projects-page">
            <div className="left-project-frame project-frame">
              <div className="projects-header-box">
                <h2>Projects</h2>
                { projectsLeftGroup.map((project, i) => (
                    <ProjectCard data={ project } key={"project-left-" + i}/>
                ))}
              </div>
            </div>
            <div className="right-project-frame project-frame">
              { projectsRightGroup.map((project, i) => (
                  <ProjectCard data={ project } key={"project-right-" + i}/>
              ))}
            </div>
          </div>

          <div id="coursework" className="coursework-page">
            <div className="left-project-frame project-frame">
              <div className="projects-header-box">
                <h2>Coursework</h2>
                <div className="blurb">
                  <p>I'm currently in the "Junior Core" for BYU's Computer Engineering program, which consists of courses in Circuit Design, Embedded Systems, and Signals & Systems.</p>
                  <p>My vision for this year of studying is that I grow my capacity for BYU's aim of <strong>"Lifelong Learning and Service"</strong> by staying engaged outside of raw courswork. I am discovering I can grow into this by focusing more on content and less on perfect grades, investing precious time into programs like competitive robotics or inventors competitions, and taking opportunities to talk with my peers about things other than homework.</p>
                </div>
                { courseworkLeftGroup.map((project, i) => (
                    <ProjectCard data={ project } key={"project-left-" + i}/>
                ))}
              </div>
            </div>
            <div className="right-project-frame project-frame">
              { courseworkRightGroup.map((project, i) => (
                  <ProjectCard data={ project } key={"project-right-" + i}/>
              ))}
            </div>
          </div>

           {/* <div id="employment" className="employment-page">
            <h2>Employment</h2>
            <i>(Coming Soon) - See <a href="#top">resume</a></i>
          </div>
 
          <div id="coursework" className="coursework-page">
            <h2>Coursework</h2>
            <i>(Coming Soon) - See <a href="#top">resume</a></i>
          </div> */}
        </div>
      
        <div id="contact" className="contact-page">
          <h1>Contact Me</h1>
          <div className="socials-row">
            <SocialButton type="linkedin" />
            <SocialButton type="github" />
            <SocialButton type="email" />
            <SocialButton type="byu" />
          </div>
        </div>
      
      </div>

      <NavBar />
    </>
  )
}

export default App
