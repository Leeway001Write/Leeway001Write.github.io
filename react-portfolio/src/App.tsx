import './App.css'

import NavBar from './components/NavBar.tsx'
import ProfileCard from './components/ProfileCard.tsx'

function App() {
  return (
    <>
      <NavBar />

      <div className="main">

        <div id="home" className="home-page">
          <ProfileCard />
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
