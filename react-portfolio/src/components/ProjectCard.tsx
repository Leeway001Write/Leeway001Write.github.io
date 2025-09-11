import '../App.css'
import './styles/ProjectCard.css'

import Gallery from './Gallery.tsx'

const SKILLS_PER_ROW = 3;

type Project = {
	title: string;
	current: boolean;
	description: string[];
	skills: string[];
	images: string[];
}

interface Props {
	data: Project;
}

export default function ProjectCard({ data }: Props) {
	var currentFlag;
	var currentClassName = "";
	if (data.current) {
		currentFlag = (
			<p><i>Current</i></p>
		);
		currentClassName = " project-current";
	}
	
	return(
		<>
			<div className="current-flag">{currentFlag}</div>
			<div className={ "project-card" + currentClassName}>
				<h3 className="project-label">{ data.title }</h3>
				{ data.description.map((descPar, i) => (
					<p className="project-description" key={i}>{ descPar }</p>
				))}
				<p className="project-skills-label">Skills practiced:</p>
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
	for (let r = 0; r < numRows; r++) {
		var i = r * SKILLS_PER_ROW;
		rows[r] = skills.slice(i, i + SKILLS_PER_ROW);
	}
	
	return (
		<div className="project-skills-box">
			{ rows.map((row: string[], i: number) => (
					<div className="project-skills-row" key={"row-" + i}>
						{ row.map((skill: string) => (
								<b className="project-skill-bubble" key={skill}>{skill}</b>
						))}
					</div>
			))}
		</div>
	)
}
