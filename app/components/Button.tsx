import Link from "next/link";

interface ButtonProps {
	href: string;
	children: React.ReactNode;
	className?: string;
	variant?: "orange" | "green" | "outline";
	onClick?: () => void;
}

export default function Button({ href, children, className = "", variant = "orange", onClick }: ButtonProps) {
	const variants = {
		orange: "bg-accent-orange text-white hover:opacity-90",
		green: "bg-accent-green text-white hover:bg-accent-green/90",
		outline: "border-2 border-accent-green text-accent-green hover:bg-accent-green hover:text-white",
	};

	const baseStyles = "px-8 py-4 rounded-full font-body-bold text-lg transition-all inline-block text-center";

	return (
		<Link 
            href={href} 
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
			{children}
		</Link>
	);
}
