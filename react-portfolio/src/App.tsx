import './App.css'

import NavBar from './components/NavBar.tsx'
import ProfileCard from './components/ProfileCard.tsx'
import Shortcut from './components/Shortcut.tsx'
import HorizDivider from './components/HorizDivider.tsx'

function App() {
  return (
    <>
      <NavBar />

      <div className="main">

        <div id="home" className="home-page">
          <ProfileCard />
          <div>
            <p className="jump-label"><b>Jump to</b></p>
            <HorizDivider />
          </div>
          <div className="shortcut-row">
            <Shortcut title="About Me" jump="#about-me" />
            <Shortcut title="Projects" jump="#experience" />
            <Shortcut title="Experience" jump="#experience" />
          </div>
        </div>
  
        <div id="about-me" className="about-me-page">
          <h1>About Me</h1>
        </div>
      
        <div id="experience" className="experience-page">
          <h1>Experience</h1>
        </div>
      
        <div id="contact" className="contact-page">
          <h1>Contact Me</h1>
        </div>
      
      </div>
    </>
  )
}

export default App
