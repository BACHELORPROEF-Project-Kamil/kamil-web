import Link from "next/link";

export const metadata = {
	title: "Privacybeleid — Kamil",
	description: "Hoe Kamil omgaat met uw persoonsgegevens.",
};

export default function PrivacybeleidPage() {
	return (
		<div className="flex flex-col">
			<section className="w-full bg-accent-background py-16 md:py-24">
				<div className="max-w-3xl mx-auto px-6">
					<p className="text-sm font-bold text-body-green/50 uppercase tracking-widest mb-4">Juridisch</p>
					<h1>Privacybeleid</h1>
					<p className="text-body-green mt-4">Laatst bijgewerkt: juni 2026</p>
				</div>
			</section>

			<section className="max-w-3xl mx-auto px-6 py-16 space-y-12 text-body-green">

				<div className="space-y-4">
					<h2 className="text-2xl">1. Wie zijn wij?</h2>
					<p>
						Dit privacybeleid is van toepassing op de wachtlijstdienst van <strong>Kamil</strong>, een persoonlijk project van:
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
					<h2 className="text-2xl">2. Welke gegevens verzamelen wij?</h2>
					<p>
						Via het aanmeldingsformulier op deze website verzamelen wij uitsluitend de volgende persoonsgegevens:
					</p>
					<ul className="list-disc list-inside space-y-2 pl-2">
						<li>Uw <strong>naam</strong></li>
						<li>Uw <strong>e-mailadres</strong></li>
					</ul>
					<p>
						Wij verzamelen geen aanvullende gegevens zoals adres, telefoonnummer, betalingsinformatie of browsegedrag.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl">3. Waarvoor gebruiken wij uw gegevens?</h2>
					<p>
						Uw gegevens worden uitsluitend gebruikt om u <strong>één e-mail</strong> te sturen op het moment dat Kamil officieel beschikbaar wordt. Na die melding worden uw gegevens niet verder gebruikt voor marketing, nieuwsbrieven of andere doeleinden.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl">4. Rechtsgrond</h2>
					<p>
						De verwerking van uw persoonsgegevens is gebaseerd op uw uitdrukkelijke <strong>toestemming</strong> (art. 6, lid 1, sub a AVG/GDPR), die u verleent door het aanmeldingsformulier in te vullen en het vakje te aanvinken.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl">5. Hoe lang bewaren wij uw gegevens?</h2>
					<p>
						Uw gegevens worden bewaard totdat Kamil officieel gelanceerd is en u de aangekondigde e-mail heeft ontvangen, of totdat u verzoekt uw gegevens te laten verwijderen. Daarna worden ze permanent gewist.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl">6. Derde partijen</h2>
					<p>
						Voor het versturen van e-mails maken wij gebruik van <strong>Resend</strong> (resend.com), een externe e-maildienst. Uw naam en e-mailadres worden via hun systemen verwerkt. Resend voldoet aan de AVG/GDPR. Er worden geen gegevens doorgegeven aan andere derde partijen.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl">7. Uw rechten</h2>
					<p>Op grond van de AVG/GDPR heeft u de volgende rechten:</p>
					<ul className="list-disc list-inside space-y-2 pl-2">
						<li><strong>Recht op inzage</strong> — u kunt opvragen welke gegevens wij van u hebben.</li>
						<li><strong>Recht op correctie</strong> — onjuiste gegevens kunt u laten aanpassen.</li>
						<li><strong>Recht op verwijdering</strong> — u kunt verzoeken uw gegevens te laten wissen.</li>
						<li><strong>Recht op bezwaar</strong> — u kunt bezwaar maken tegen de verwerking van uw gegevens.</li>
						<li><strong>Recht op intrekking van toestemming</strong> — u kunt uw toestemming te allen tijde intrekken.</li>
					</ul>
					<p>
						Om gebruik te maken van deze rechten kunt u contact opnemen via{" "}
						<a href="mailto:arno.baeck@live.be" className="underline hover:text-accent-orange transition-colors">
							arno.baeck@live.be
						</a>. Wij reageren binnen 30 dagen.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl">8. Klachten</h2>
					<p>
						Indien u niet tevreden bent met de wijze waarop wij met uw gegevens omgaan, heeft u het recht een klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit (GBA):{" "}
						<a
							href="https://www.gegevensbeschermingsautoriteit.be"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-accent-orange transition-colors"
						>
							gegevensbeschermingsautoriteit.be
						</a>.
					</p>
				</div>

				<div className="space-y-4">
					<h2 className="text-2xl">9. Wijzigingen</h2>
					<p>
						Dit privacybeleid kan worden bijgewerkt. De meest recente versie is steeds beschikbaar op deze pagina. Bij ingrijpende wijzigingen brengen wij u, indien mogelijk, per e-mail op de hoogte.
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
