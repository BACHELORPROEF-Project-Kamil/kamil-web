import Link from "next/link";

export const metadata = {
	title: "Algemene Voorwaarden — Kamil",
	description: "De algemene voorwaarden voor het gebruik van de Kamil-wachtlijst.",
};

export default function AlgemeneVoorwaardenPage() {
	return (
		<div className="flex flex-col">
			<section className="w-full bg-accent-background py-16 md:py-24">
				<div className="max-w-3xl mx-auto px-6">
					<p className="text-sm font-bold text-body-green/50 uppercase tracking-widest mb-4">Juridisch</p>
					<h1>Algemene Voorwaarden</h1>
					<p className="text-body-green mt-4">Laatst bijgewerkt: juni 2026</p>
				</div>
			</section>

			<section className="max-w-3xl mx-auto px-6 py-16 space-y-12 text-body-green">

				<div className="space-y-4">
					<h2 className="text-2xl">1. Identificatie</h2>
					<p>
						Deze algemene voorwaarden zijn van toepassing op de wachtlijstdienst van <strong>Kamil</strong>, een persoonlijk project van:
					</p>
					<address className="not-italic bg-accent-background rounded-2xl p-6 text-body-green space-y-1">
						<p><strong>Arno Baeck</strong></p>
						<p>Baalsebaan 212A</p>
						<p>3128 Tremelo, België</p>
						<p>
							E-mail:{" "}
							<a href="mailto:arno.baeck@live.be" className="underline hover:text-accent-orange transition-colors">
								arno.baeck@live.be
							</a>
						</p>
					</address>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl">2. Beschrijving van de dienst</h2>
					<p>
						De wachtlijst van Kamil is een vrijblijvende registratiemogelijkheid voor personen die als eerste verwittigd willen worden wanneer de Kamil-browserextensie beschikbaar wordt. Door u in te schrijven, geeft u uitsluitend toestemming om één e-mailmelding te ontvangen bij de lancering.
					</p>
					<p>
						De inschrijving op de wachtlijst houdt geen overeenkomst in en verplicht u niet tot enige aankoop of betaling.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl">3. Geen garanties</h2>
					<p>
						Kamil is een persoonlijk studentenproject. Er kan geen garantie worden geboden over:
					</p>
					<ul className="list-disc list-inside space-y-2 pl-2">
						<li>de exacte lanceringsdatum van het product;</li>
						<li>de beschikbaarheid of functionaliteit van het eindproduct;</li>
						<li>de continuïteit van deze website of dienst.</li>
					</ul>
					<p>
						Inschrijving op de wachtlijst geeft geen recht op het gebruik van Kamil of enige vergoeding indien het product niet of anders dan verwacht wordt uitgebracht.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl">4. Aansprakelijkheid</h2>
					<p>
						Arno Baeck is niet aansprakelijk voor enige directe of indirecte schade die voortvloeit uit het gebruik van deze website of de wachtlijstdienst, voor zover toegestaan door het Belgisch recht.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl">5. Privacy</h2>
					<p>
						Het verzamelen en verwerken van persoonsgegevens via de wachtlijst wordt beschreven in ons{" "}
						<Link href="/privacybeleid" className="underline hover:text-accent-orange transition-colors">
							privacybeleid
						</Link>
						, dat integraal deel uitmaakt van deze voorwaarden.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl">6. Toepasselijk recht</h2>
					<p>
						Op deze voorwaarden is het <strong>Belgisch recht</strong> van toepassing. Eventuele geschillen worden voorgelegd aan de bevoegde rechtbanken van het arrondissement Leuven.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl">7. Wijzigingen</h2>
					<p>
						Arno Baeck behoudt zich het recht voor deze voorwaarden te wijzigen. De meest recente versie is steeds beschikbaar op deze pagina.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl">8. Contact</h2>
					<p>
						Voor vragen over deze voorwaarden kunt u terecht via{" "}
						<a href="mailto:arno.baeck@live.be" className="underline hover:text-accent-orange transition-colors">
							arno.baeck@live.be
						</a>.
					</p>
				</div>

				<div className="pt-4 border-t border-accent-green/10">
					<Link href="/aanmelden" className="text-accent-green underline underline-offset-4 hover:text-accent-orange transition-colors">
						← Terug naar aanmelden
					</Link>
				</div>

			</section>
		</div>
	);
}
