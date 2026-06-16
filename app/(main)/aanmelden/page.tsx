import Image from "next/image";
import SignUpForm from "./SignUpForm";

export const metadata = {
	title: "Aanmelden — Kamil",
	description: "Schrijf u in voor de wachtlijst en word als eerste verwittigd wanneer Kamil officieel live gaat.",
};

export default function AanmeldenPage() {
	return (
		<div className="flex flex-col">
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

			<section className="w-full px-6 py-16 md:py-24">
				<div className="max-w-lg mx-auto">
					<SignUpForm />
				</div>
			</section>
		</div>
	);
}
