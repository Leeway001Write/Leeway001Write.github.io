import '../App.css'

export default function GradientBorder({ children, borderClass }) {
	return (
			<div className={borderClass}>
				{children}
			</div>
	)
}
