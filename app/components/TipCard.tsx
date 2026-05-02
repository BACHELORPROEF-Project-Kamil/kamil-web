import Link from "next/link";

interface TipCardProps {
	number: number;
	title: string;
	description: string;
	tip?: string;
	ctaLabel?: string;
	ctaHref?: string;
}

export default function TipCard({ number, title, description, tip, ctaLabel, ctaHref }: TipCardProps) {
	return (
		<div className="bg-white rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start relative overflow-hidden shadow-sm">
			<div className="flex-shrink-0 w-12 h-12 bg-accent-background rounded-full flex items-center justify-center text-xl font-black text-accent-green">
				{number}
			</div>

			<div className="flex-1">
				<h3 className="text-2xl font-black text-title-green mb-4 font-[var(--font-main-title)]">
					{title}
				</h3>
				<p className={`text-body-green leading-relaxed ${tip || ctaLabel ? "mb-6" : ""}`}>
					{description}
				</p>
				
				{tip && (
					<div className="bg-warning-background border-l-4 border-warning-border p-4 rounded-xl flex gap-3 items-start">
						<span className="text-lg">💡</span>
						<p className="text-sm text-body-green">
							<strong>Tip:</strong> {tip}
						</p>
					</div>
				)}

				{ctaLabel && ctaHref && (
					<Link 
						href={ctaHref} 
						className="text-accent-orange font-bold flex items-center gap-2 hover:underline inline-flex"
					>
						{ctaLabel} <span>→</span>
					</Link>
				)}
			</div>
		</div>
	);
}
