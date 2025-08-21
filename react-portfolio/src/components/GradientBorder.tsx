import '../App.css';

interface Props {
	children: React.ReactElement;
	borderClass?: string;
}

export default function GradientBorder({ children, borderClass }: Props) {
	return (
			<div className={borderClass}>
				{children}
			</div>
	)
}
