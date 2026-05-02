export default function WhyKamil() {
	const features = [
		{
			icon: "🛡️",
			title: "Veilig",
			description: "Blokkeert automatisch ongewenste volgers.",
		},
		{
			icon: "👀",
			title: "Onzichtbaar",
			description: "Werkt stil op de achtergrond, net als een kameleon.",
		},
		{
			icon: "👏",
			title: "Simpel",
			description: "Werkt stil op de achtergrond, net als een kameleon.",
		},
	];

	return (
		<section className="w-full py-24 px-6 bg-white">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-center mb-16">Waarom Kamil?</h2>
				
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{features.map((feature, index) => (
						<div 
							key={index} 
							className="bg-accent-background rounded-[32px] p-10 flex flex-col items-center text-center"
						>
							<div className="text-5xl mb-6">{feature.icon}</div>
							<h3 className="text-xl font-black text-title-green mb-4 font-[var(--font-main-title)]">
								{feature.title}
							</h3>
							<p className="text-body-green leading-relaxed max-w-[220px]">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
