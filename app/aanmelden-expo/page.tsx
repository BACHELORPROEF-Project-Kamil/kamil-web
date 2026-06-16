import Image from "next/image";
import ExpoSignUpForm from "./ExpoSignUpForm";

export const metadata = {
	title: "Aanmelden — Kamil",
	description: "Schrijf u in voor de wachtlijst van Kamil.",
};

export default function AanmeldenExpoPage() {
	return (
		<main className="min-h-screen bg-accent-background flex items-center justify-center px-6 py-12">
			<div className="w-full max-w-md">
				{/* Logo */}
				<div className="flex justify-center mb-10">
					<Image
						src="/images/kamil.svg"
						alt="Kamil"
						width={140}
						height={48}
						className="object-contain"
						priority
					/>
				</div>

				{/* Kamil karakter */}
				<div className="flex justify-center mb-8">
					<Image
						src="/images/kamil-homepage.webp"
						alt="Kamil"
						width={180}
						height={180}
						className="object-contain"
						priority
					/>
				</div>

				{/* Heading */}
				<div className="text-center mb-10 space-y-3">
					<h1 className="text-4xl md:text-5xl">Wees er als eerste bij.</h1>
					<p className="text-body-green text-lg">
						Schrijf u in en wij verwittigen u zodra Kamil beschikbaar is.
					</p>
				</div>

				{/* Formulier */}
				<div className="bg-white rounded-[32px] p-8 shadow-sm">
					<ExpoSignUpForm />
				</div>

				<p className="text-center text-sm text-body-green/50 mt-6">
					Gratis. Geen spam. Enkel een bericht bij lancering.
				</p>
			</div>
		</main>
	);
}
