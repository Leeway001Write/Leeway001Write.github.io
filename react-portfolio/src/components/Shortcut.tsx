import '../App.css'
import './styles/Shortcut.css'
import GradientBorder from '../components/GradientBorder'

interface Props {
	title: string;
	jump: string;
}

export default function Shortcut({ title, jump }: Props) {
	return (
		<GradientBorder borderClass="gradient-border shortcut-border">
			<a href={jump}>
				<div className="shortcut">
					<div className="shortcut-banner">
						<b>{title}</b>
					</div>
				</div>
			</a>
		</GradientBorder>
	)
}
