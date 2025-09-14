import '../App.css'
import './styles/Shortcut.css'

import GradientBorder from './GradientBorder'

import thumbAboutMe from '../assets/shortcut-thumbnails/about-me.png'
import thumbProjects from '../assets/shortcut-thumbnails/projects.png'
import thumbContact from '../assets/shortcut-thumbnails/contact.png'

interface Props {
	title: string;
	jump: string;
}

export default function Shortcut({ title, jump }: Props) {
	var image = "";

	switch (title) {
		case "About Me":
			image = thumbAboutMe;
			break;

		case "Projects":
			image = thumbProjects;
			break;

		case "Contact":
			image = thumbContact;
			break;

		default:
			break;
	}

	return (
		<GradientBorder borderClass="gradient-border shortcut-border">
			<a href={jump}>
				<div className="shortcut">
					<div className="shortcut-banner">
						<b>{title}</b>
					</div>
					<img src={ image }></img>
				</div>
			</a>
		</GradientBorder>
	)
}
