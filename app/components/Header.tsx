import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<section className="w-full bg-accent-background">
			<div className="max-w-7xl mx-auto py-20 px-6 flex flex-col-reverse items-center gap-12 text-center md:flex-row md:text-left">
				<div className="flex-1 space-y-6">
					<div className="max-w-xl">
						<h1 className="mb-4">
							Surf gerust.
							<br />
							Kamil kijkt met u mee.
						</h1>
						<p className="text-lg leading-relaxed text-body-green mb-8">
							Het internet is een jungle waar digitale dieven (phishing) steeds slimmer worden. Soms lijkt een website
							veilig, maar schijn bedriegt. Kamil is uw <strong>digitale kameleon:</strong> hij herkent gevaarlijke websites
							nog voordat u ze ziet. Hij werkt onzichtbaar op de achtergrond en grijpt in wanneer een website uw gegevens
							probeert te stelen. Zo kunt u zorgeloos online bankieren, winkelen en mailen, zonder dat u een computerexpert
							hoeft te zijn.
						</p>
					</div>
					<div>
						<Link
							href="#"
							className="bg-accent-orange text-white px-8 py-4 rounded-full font-body-bold text-lg hover:opacity-90 transition-opacity inline-block"
						>
							Bescherm mij gratis met Kamil
						</Link>
						<p className="mt-4 text-sm text-body-green/80 italic">* Gratis & Veilig!</p>
					</div>
				</div>
				<div className="flex-shrink-0 w-[300px] sm:w-[400px] md:w-[450px] lg:w-[550px]">
					<Image
						src="/images/kamil-homepage.webp"
						alt="Kamil sticking up his thumb"
						width={550}
						height={550}
						className="w-full h-auto object-contain"
						priority
					/>
				</div>
			</div>
		</section>
	);
}
