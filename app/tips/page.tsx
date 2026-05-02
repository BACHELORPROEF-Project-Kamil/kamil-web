import TipCard from "@/app/components/TipCard";

export default function TipsPage() {
	return (
		<div className="w-full bg-accent-background py-20 px-6 min-h-screen">
			<div className="max-w-3xl mx-auto">
				<div className="text-center mb-16">
					<h1 className="mb-6">Veilig in 3 stappen</h1>
					<p className="text-body-green opacity-80 max-w-2xl mx-auto">
						Naast de hulp van Kamil kunt u zelf ook enkele simpele dingen doen om uw online privacy te verbeteren.
					</p>
				</div>

				<div className="space-y-8">
					<TipCard 
						number={1}
						title="Cookies: weigeren mag"
						description='U hoeft niet altijd op de grote groene knop "Accepteren" te klikken. Websites maken de knop "Weigeren" vaak grijs en klein, maar hij werkt net zo goed.'
						tip='Zoek naar "Alleen noodzakelijke cookies". Dat is de veiligste keuze.'
					/>

					<TipCard 
						number={2}
						title="De grote schoonmaak"
						description="Uw internetbrowser onthoudt waar u bent geweest. Het is verstandig om deze geschiedenis af en toe te wissen via de instellingen van uw browser."
					/>

					<TipCard 
						number={3}
						title="Laat Kamil helpen"
						description="Het is lastig om alles te onthouden. Installeer Kamil en hij regelt de rest op de achtergrond. Net zoals een kameleon past hij zich aan."
						ctaLabel="Installeer Kamil"
						ctaHref="#"
					/>
				</div>
			</div>
		</div>
	);
}
