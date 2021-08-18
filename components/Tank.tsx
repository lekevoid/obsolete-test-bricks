const Tank = ({ children, className }) => {
	return (
		<div className={`Tank ${className}`}>
			{children}
			<style jsx>{`
				max-width: 1280px;
				padding-left: min(4vw, 40px);
				padding-right: min(4vw, 40px);
				width: 100%;
			`}</style>
		</div>
	);
};

export default Tank;
