import '../App.css'
import './styles/NavBar.css'

export default function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-list">
        <li><a className="nav-heading" href="#top">Resume</a></li>
        <br />
        <li><a className="nav-heading" href="#home"><b>Home</b></a></li>
        <li><a className="nav-heading" href="#about-me"><b>About Me</b></a></li>
        <li><a className="nav-heading" href="#experience"><b>Experience</b></a>
          <ul className="nav-list">
            <li><a className="nav-subheading" href="#projects">Projects</a></li>
            <li><a className="nav-subheading" href="#employment">Empoyment</a></li>
            <li><a className="nav-subheading" href="#coursework">Coursework</a></li>
          </ul>
        </li>
        <br />
        <li><a className="nav-heading" href="#contact"><b>Contact Me</b></a></li>
      </ul>
    </div>
  )
}
