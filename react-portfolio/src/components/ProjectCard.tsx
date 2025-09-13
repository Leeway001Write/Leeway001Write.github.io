import '../App.css'
import './styles/ProjectCard.css'

import { FaGithub } from "react-icons/fa"
import { IoMdOpen } from "react-icons/io"

import Gallery from './Gallery.tsx'

const SKILLS_PER_ROW = 3;

type Project = {
	title: string;
	link?: string;
	current: boolean;
	description: React.ReactElement;
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
				<ExternalLink link={ data.link } />
				<h3 className="project-label">{ data.title }</h3>
				<div className="project-description">
					{ data.description }
				</div>
				<p className="project-skills-label">Skills practiced:</p>
				<SkillsBox skills={ data.skills } />
				<Gallery images={ data.images } />
			</div>
		</>
	)
}

interface ExternalLinkProps {
	link?: string;
}

function ExternalLink({ link }: ExternalLinkProps) {
	if (link == null) {
		return;		
	}

	return (
		<a href={ link } target="_blank">
			<button className="project-external-link">
				<FaGithub size={24}/>
				<p>View repository</p>
				<IoMdOpen size={16}/>
			</button>
		</a>
	);
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
