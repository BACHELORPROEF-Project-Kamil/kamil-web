import Image from "next/image";
import SignUpForm from "./SignUpForm";

export const metadata = {
	title: "Aanmelden — Kamil",
	description: "Schrijf u in voor de wachtlijst en word als eerste verwittigd wanneer Kamil officieel live gaat.",
};

export default function AanmeldenPage() {
	return (
		<main className="flex flex-col">
			{/* Hero */}
			<section className="w-full bg-accent-background">
				<div className="max-w-7xl mx-auto py-24 px-6 flex flex-col-reverse items-center gap-12 text-center md:flex-row md:text-left">
					<div className="flex-1 space-y-6 max-w-xl">
						<h1 className="mb-4">
							Kamil komt eraan.
							<br />
							Wees er als eerste bij.
						</h1>
						<p className="text-lg leading-relaxed text-body-green">
							We werken hard aan Kamil en zijn er bijna. Laat uw naam en e-mailadres achter en we verwittigen u
							zodra u <strong>gratis en veilig</strong> kunt beginnen surfen met Kamil.
						</p>
					</div>
					<div className="flex-shrink-0 w-[240px] sm:w-[320px] md:w-[380px] lg:w-[440px]">
						<Image
							src="/images/kamil-homepage.webp"
							alt="Kamil kijkt vriendelijk"
							width={440}
							height={440}
							className="w-full h-auto object-contain"
							priority
						/>
					</div>
				</div>
			</section>

			{/* Formulier */}
			<section className="max-w-7xl mx-auto w-full px-6 py-16 md:py-24">
				<div className="grid md:grid-cols-2 gap-16 items-start">
					{/* Links: voordelen */}
					<div className="space-y-8">
						<h2 className="max-w-sm">Waarom u zich zou aanmelden</h2>
						<ul className="space-y-6">
							{[
								{
									icon: "🔔",
									bg: "bg-yellow-100",
									title: "Als eerste op de hoogte",
									text: "U ontvangt een persoonlijk bericht zodra Kamil beschikbaar is — voor iedereen anders.",
								},
								{
									icon: "🚀",
									bg: "bg-green-100",
									title: "Gratis bij lancering",
									text: "Vroege inschrijvers krijgen toegang tot Kamil volledig gratis.",
								},
								{
									icon: "🔒",
									bg: "bg-blue-100",
									title: "Uw privacy is veilig",
									text: "We gebruiken uw e-mailadres alleen voor deze éne melding. Geen nieuwsbrieven, geen spam.",
								},
							].map((item) => (
								<li
									key={item.title}
									className="bg-accent-background rounded-[32px] p-6 flex items-start gap-6 border border-transparent hover:border-accent-green/10 transition-colors"
								>
									<div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center text-2xl`}>
										{item.icon}
									</div>
									<div className="space-y-1">
										<h3 className="text-lg font-bold text-title-green">{item.title}</h3>
										<p className="text-body-green leading-snug text-base">{item.text}</p>
									</div>
								</li>
							))}
						</ul>
					</div>

					{/* Rechts: formulier */}
					<div className="md:sticky md:top-28">
						<div className="bg-accent-background rounded-[32px] p-8 md:p-10 space-y-8">
							<div>
								<h2 className="text-2xl mb-2">Schrijf u in</h2>
								<p className="text-body-green text-base">
									Vul uw gegevens in en wij doen de rest.
								</p>
							</div>
							<SignUpForm />
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}
