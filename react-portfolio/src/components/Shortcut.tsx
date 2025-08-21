import '../App.css'
import './styles/Shortcut.css'
import GradientBorder from '../components/GradientBorder'

export default function Shortcut( { title, jump }) {
	return (
		<GradientBorder borderClass="gradient-border shortcut-border">
			<a href={jump}>
				<div className="shortcut">
					<div className="shortcut-banner">
						<b>{title}</b>
						<div className="shortcut-banner-base"></div>
					</div>
				</div>
			</a>
		</GradientBorder>
	)
}
