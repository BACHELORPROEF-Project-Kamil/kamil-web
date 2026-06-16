import Image from "next/image";
import ExpoSignUpForm from "./ExpoSignUpForm";

export const metadata = {
	title: "Aanmelden — Kamil",
	description: "Schrijf u in voor de wachtlijst van Kamil.",
};

export default function AanmeldenExpoPage() {
	return (
		<main className="min-h-screen bg-accent-background flex items-center justify-center px-6 py-12">
			<div className="w-full max-w-7xl">
				<div className="flex flex-col md:flex-row items-center gap-16">
					{/* Links: logo + karakter + tekst */}
					<div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-8">
						<Image
							src="/images/kamil.svg"
							alt="Kamil"
							width={160}
							height={54}
							className="object-contain"
							priority
						/>
						<div className="space-y-4">
							<h1>Wees er als eerste bij.</h1>
							<p className="text-body-green text-lg max-w-md">
								Schrijf u in en wij verwittigen u zodra Kamil beschikbaar is.
							</p>
						</div>
						<Image
							src="/images/kamil-homepage.webp"
							alt="Kamil"
							width={340}
							height={340}
							className="object-contain w-[240px] md:w-[340px]"
							priority
						/>
					</div>

					{/* Rechts: formulier */}
					<div className="flex-1 w-full">
						<div className="bg-white rounded-[32px] p-10 shadow-sm space-y-6">
							<div>
								<h2 className="mb-1">Schrijf u in</h2>
								<p className="text-body-green">Vul uw gegevens in en wij doen de rest.</p>
							</div>
							<ExpoSignUpForm />
						</div>
						<p className="text-center text-sm text-body-green/50 mt-5">
							Gratis. Geen spam. Enkel een bericht bij lancering.
						</p>
					</div>
				</div>
			</div>
		</main>
	);
}
