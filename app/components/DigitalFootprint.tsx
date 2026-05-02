import Link from "next/link";

export default function DigitalFootprint() {
	return (
		<section className="w-full py-24 px-6 bg-white">
			<div className="max-w-3xl mx-auto text-center">
				<h2 className="mb-6">Uw digitale visitekaartje</h2>
				<p className="mb-12 text-lg">
					Zonder dat u het doorheeft, geeft u bij elke website een digitaal kaartje af.
					<br className="hidden md:block" />
					Adverteerders zien dit direct. <strong>Kamil schermt dit voor u af.</strong>
				</p>

				<div className="bg-accent-background border-t-8 border-accent-green-border rounded-[32px] p-8 md:py-12 md:px-18 text-left mb-12">
					<div className="space-y-6">
						<div className="border-b border-body-green/20 pb-8">
							<span className="text-base font-body-bold text-body-green uppercase">Uw locatie</span>
							<p className="text-base font-body-bold text-title-green mt-2">Antwerpen, België</p>
						</div>

						<div className="border-b border-body-green/20 pb-8">
							<span className="text-base font-body-bold text-body-green uppercase">Uw apparaat</span>
							<p className="text-base font-body-bold text-title-green mt-2">Windows PC</p>
						</div>

						<div>
							<span className="text-base font-body-bold text-body-green uppercase">Uw interesses</span>
							<p className="text-base font-body-bold text-title-green mt-2">Gezondheid, Reizen, Nieuws</p>
						</div>
					</div>
				</div>

				<div className="max-w-2xl mx-auto space-y-6">
					<p className="text-body-green">
						Dit is wat zichtbaar is, maar Kamil beschermt ook wat er onder de oppervlakte speelt. Naast het gebruik van Kamil bestaan er ook nog andere manieren om jezelf te beschermen.
					</p>
					<Link
						href="#"
						className="inline-block font-body-bold text-title-green underline decoration-2 underline-offset-4 transition hover:text-accent-orange"
					>
						Hoe scherm ik dit af?
					</Link>
				</div>
			</div>
		</section>
	);
}
