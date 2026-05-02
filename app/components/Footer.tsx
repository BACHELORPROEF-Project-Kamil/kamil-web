import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full bg-accent-green text-body-white">
			<div className="max-w-7xl mx-auto py-16 px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
					<div className="space-y-6">
						<div className="flex items-center gap-2">
							<Image
								src="/images/kamil_white.svg"
								alt="Kamil Logo"
								width={180}
								height={40}
							/>
						</div>
						<p className="text-sm color-body-white max-w-xs">
							Kamil is uw digitale kameleon: hij past zich aan en beschermt u onzichtbaar op de achtergrond.
						</p>
					</div>

					<div>
						<h4 className="font-body-bold text-body color-body-white mb-6">Handige links</h4>
						<ul className="space-y-4">
							<li>
								<Link href="/" className="color-body-white hover:color-accent-orange">Home</Link>
							</li>
							<li>
								<Link href="/" className="color-body-white hover:color-accent-orange">Tips & Gids</Link>
							</li>
							<li>
								<Link href="/" className="color-body-white hover:color-accent-orange">Download Kamil</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div>
						<h4 className="font-body-bold text-body color-body-white mb-6">Contact</h4>
						<ul className="space-y-4">
							<li className="flex flex-col">
								<span className="text-xs font-bold uppercase tracking-wider opacity-60">Naam</span>
								Arno Baeck
							</li>
							<li className="flex flex-col">
								<span className="text-xs font-bold uppercase tracking-wider opacity-60">Telefoon</span>
								04 72 99 69 78
							</li>
							<li className="flex flex-col">
								<span className="text-xs font-bold uppercase tracking-wider opacity-60">E-mail</span>
								<a href="mailto:arno.baeck@student.ehb.be" className="hover:color-accent-orange">arno.baeck@student.ehb.be</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Legal Bar */}
			<div className="w-full bg-black/10 border-t border-white/5 py-6 px-6">
				<div className="max-w-7xl mx-auto flex flex-row justify-between items-center gap-4 text-xs">
					<p>© {new Date().getFullYear()} Kamil. Alle rechten voorbehouden.</p>
					<div className="flex gap-8">
						<Link href="#" className="hover:color-accent-orange">Privacybeleid</Link>
						<Link href="#" className="hover:color-accent-orange">Algemene voorwaarden</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
