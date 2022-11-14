

const Button = ({className, onClick, Children}) => {
	return (
		<div>
			<button className={className} onClick={onClick}>{Children}</button>
		</div>
	)
};

export default Button;
