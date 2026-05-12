import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
	return (
		<div className="w-full flex flex-col items-center justify-center py-12 px-6 text-center bg-accent-background flex-grow">
			<div className="max-w-md mx-auto">
				<div className="mb-6 relative max-w-[280px] mx-auto">
					<Image
						src="/images/kamil_404.webp"
						alt="Kamil is opzoek met een vergrootglas"
						width={300}
						height={300}
						className="w-full h-auto object-contain"
						priority
					/>
				</div>

				<h1 className="text-3xl mb-4">Oeps! Pagina niet gevonden.</h1>
				<p className="text-body-green mb-8 opacity-80 leading-relaxed text-sm md:text-base">
					Geen zorgen, je bent niet de enigste. Zelfs Kamil raakt wel eens de weg kwijt. De pagina die u zoekt lijkt
					onzichtbaar te zijn geworden.
				</p>

				<Link
					href="/"
					className="bg-accent-orange text-white px-8 py-4 rounded-full font-body-bold text-lg hover:opacity-90 transition-opacity inline-block"
				>
					Terug naar de homepagina
				</Link>
			</div>
		</div>
	);
}
