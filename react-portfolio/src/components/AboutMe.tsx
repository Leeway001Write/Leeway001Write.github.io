import '../App.css'
import './styles/AboutMe.css'
import GradientBorder from './GradientBorder.tsx'

export default function AboutMe() {
	return (
	  <GradientBorder borderClass="gradient-border about-me-border">
		  <div className="about-me-section">
		    <p>
		      <span className="about-me-name"><strong>I'm Dallin,</strong></span>
		      a BYU Computer Engineering Student seeking opportunities in <span className="about-me-highlight">medical technology</span> or <span className="about-me-highlight">robotics</span>.
		    </p>
			<p>I began my studies as a computer science major, but realized I wanted to work on problems beyond implementing software with an existing product vision.
			   Evolving those skills through studying Electrical and Computer Engineering opened a path that feels more fulfilling for me: <strong>understanding real needs</strong>, working with resulting constraints, and designing <strong>solutions people can physically touch.</strong></p>
		    <p>Technology today moves rapidly and often has real negative impact. I believe that the right design and usage together can have a massive <strong>positive effect on the way we choose to live.</strong></p>
		    <p>Thank you for viewing my portfolio, please feel free to <a href="#contact">reach out!</a></p>
		  </div>
		</GradientBorder>
	)
}
