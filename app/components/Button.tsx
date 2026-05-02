import Link from "next/link";

interface ButtonProps {
	href: string;
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}

export default function Button({ href, children, className = "", onClick }: ButtonProps) {
	const baseStyles = "inline-block px-8 py-3 rounded-full bg-accent-orange text-body-white font-accent-body transition hover:bg-accent-green font-body-bold text-center";

	const combinedStyles = `${baseStyles} ${className}`;

	return (
		<Link href={href} className={combinedStyles} onClick={onClick}>
			{children}
		</Link>
	);
}
