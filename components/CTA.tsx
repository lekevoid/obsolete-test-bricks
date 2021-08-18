import Link from "next/link";

interface CTAProps {
	color: string;
	children: object;
	className: string;
	href: string;
}

const CTA: React.FC<CTAProps> = (props) => {
	const { className, children, href } = props;
	console.log(children);

	/* if (className.includes("span")) {
		return (
			<span className={`CTA ${className}`} {...props}>
				{children}
			</span>
		);
	}

	if (props.onClick) {
		return (
			<button className={`CTA ${className}`} {...props}>
				{children}
			</button>
		);
	} */

	return (
		<Link href={href}>
			<a className={`CTA py-3 px-6 rounded-md text-white ${className}`}>{children}</a>
		</Link>
	);
};

export default CTA;
