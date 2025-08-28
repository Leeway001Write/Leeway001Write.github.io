import '../App.css'
import './styles/ProjectCard.css'

import Gallery from './Gallery.tsx'

const SKILLS_PER_ROW = 3;

type Project = {
	title: string;
	current: boolean;
	description: string;
	skills: string[];
	images: string[];
}

interface Props {
	data: Project;
}

export default function ProjectCard({ data }: Props) {
	var currentFlag;
	if (data.current) {
		currentFlag = (
			<p><i>Current</i></p>
		);
	}
	
	return(
		<>
			<div className="current-flag">{currentFlag}</div>
			<div className="project-card">
				<h3 className="project-label">{ data.title }</h3>
				<p className="project-description">{ data.description }</p>
				<SkillsBox skills={ data.skills } />
				<Gallery images={ data.images } />
			</div>
		</>
	)
}

interface SkillsBoxProps {
	skills: string[];
}

function SkillsBox({ skills }: SkillsBoxProps) {
	const skillCount = skills.length;
	const numRows = Math.ceil(skillCount / SKILLS_PER_ROW);
	var rows: string[][] = [];
	for (let r = 1; r <= numRows; r++) {
		var i = (r-1) * 3;
		rows[r] = skills.slice(i, i + 3);
	}
	
	return (
		<div className="project-skills-box">
			{ rows.map((row: string[]) => (
					<div className="project-skills-row">
						{ row.map((skill: string) => (
								<b className="project-skill-bubble">{skill}</b>
						))}
					</div>
			))}
		</div>
	)
}
