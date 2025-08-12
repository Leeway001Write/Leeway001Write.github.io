import '../App.css'

export default function NavBar() {
  return (
    <div className="nav-bar">
      <ul className="nav-list">
        <li><a className="nav-heading" href="#home"><b>Home</b></a></li>
        <li><a className="nav-heading" href="#about-me"><b>About Me</b></a></li>
        <li><a className="nav-heading" href="#experience"><b>Experience</b></a>
          <ul className="nav-list">
            <li><a className="nav-subheading" href="#top">Projects</a></li>
            <li><a className="nav-subheading" href="#top">Empoyment</a></li>
            <li><a className="nav-subheading" href="#top">Coursework</a></li>
          </ul>
        </li>
        <li><a className="nav-heading" href="#top">Resume</a></li>
        <li><a className="nav-heading" href="#contact"><b>Contact Me</b></a></li>
      </ul>
    </div>
  )
}
