import '../App.css'
import './styles/AboutMe.css'
import GradientBorder from './GradientBorder.tsx'

export default function AboutMe() {
	return (
	  <GradientBorder borderClass="gradient-border about-me-border">
		  <div className="about-me-section">
		    <p>
		      <span className="about-me-name"><strong>Hi! I'm Dallin.</strong></span>
		      I'm an Undergraduate Student at <strong>Brigham Young University</strong> from Washington State.
		    </p>
		    <p>I'm <span className="about-me-highlight">passionate</span> about <strong>Human-Computer Interaction.</strong> My attitude regarding the rapidly growing technologies of today's world is that despite real negative impacts of tech, the right design and usage together can have a massive <strong>positive effect on the way we choose to live.</strong></p>
		    <p>My <span className="about-me-highlight">beliefs</span> drive me to create a better world not only through <strong>innovation</strong>, but also through <strong>good character</strong> inside and outside the workplace. Family, faith, and mentors have taught me to infuse good ethics and a good work ethic into my every effort; whether professional, academic, or social.</p>
		    <p>Thank you for viewing my portfolio, please feel free to <a href="#contact">reach out!</a></p>
		  </div>
		</GradientBorder>
	)
}
