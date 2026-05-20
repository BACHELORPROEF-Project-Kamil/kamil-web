import Button from "./Button";

export default function Features() {
	const features = [
		{
			title: "Automatische blokkade",
			description: "Kamil herkent onbetrouwbare links direct en blokkeert ze voordat ze schade aanrichten.",
			icon: "🚫",
			iconBg: "bg-red-100",
			iconColor: "text-red-500",
		},
		{
			title: "Onzichtbare hulp",
			description: "Geen ingewikkelde instellingen. Kamil werkt stil en krachtig op de achtergrond.",
			icon: "✨",
			iconBg: "bg-yellow-100",
			iconColor: "text-yellow-500",
		},
		{
			title: "Slimme detectie",
			description: "Kamil leert van nieuwe bedreigingen en beschermt u proactief tegen de nieuwste trucs.",
			icon: "🦎",
			iconBg: "bg-green-100",
			iconColor: "text-green-500",
		},
	];

	return (
		<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
			<div className="flex-1 space-y-8">
				<h2 className="max-w-md">Uw gegevens blijven van u.</h2>
				<p className="text-lg text-body-green max-w-lg">
					Oplichters sturen u vaak naar valse websites om uw bankgegevens of wachtwoorden te stelen.{" "}
					<strong>Kamil schermt dit voor u af.</strong>
				</p>
				<Button href="#">
					Start met veilig surfen
				</Button>
			</div>

			<div className="flex-1 space-y-6 w-full">
				{features.map((feature, index) => (
					<div
						key={index}
						className="bg-accent-background rounded-[32px] p-6 flex items-start gap-6 border border-transparent hover:border-accent-green/10 transition-colors"
					>
						<div
							className={`flex-shrink-0 w-16 h-16 rounded-2xl ${feature.iconBg} flex items-center justify-center text-3xl`}
						>
							{feature.icon}
						</div>
						<div className="space-y-2">
							<h3 className="text-xl font-bold text-title-green">{feature.title}</h3>
							<p className="text-body-green leading-snug">{feature.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
