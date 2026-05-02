import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full bg-accent-green text-body-white">
			<div className="max-w-7xl mx-auto py-16 px-6">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
					<div className="space-y-6 text-center md:text-left">
						<div className="flex items-center gap-2 justify-center md:justify-start">
							<Image src="/images/kamil_white.svg" alt="Kamil Logo" width={180} height={40} />
						</div>
						<p className="text-sm text-body-white max-w-xs mx-auto md:mx-0">
							Kamil is uw digitale kameleon: hij past zich aan en beschermt u onzichtbaar op de achtergrond.
						</p>
					</div>

					<div className="text-center md:text-left">
						<h4 className="font-body-bold text-body text-body-white mb-6">Handige links</h4>
						<ul className="space-y-4">
							<li>
								<Link href="/" className="text-body-white hover:text-accent-orange transition-colors">
									Home
								</Link>
							</li>
							<li>
								<Link href="/" className="text-body-white hover:text-accent-orange transition-colors">
									Tips & Gids
								</Link>
							</li>
							<li>
								<Link href="/" className="text-body-white hover:text-accent-orange transition-colors">
									Download Kamil
								</Link>
							</li>
						</ul>
					</div>

					{/* Contact */}
					<div className="text-center md:text-left">
						<h4 className="font-body-bold text-body text-body-white mb-6">Contact</h4>
						<ul className="space-y-4">
							<li className="flex flex-col">
								<span className="text-xs font-bold uppercase tracking-wider opacity-60">Naam</span>
								<span>Arno Baeck</span>
							</li>
							<li className="flex flex-col">
								<span className="text-xs font-bold uppercase tracking-wider opacity-60">Telefoon</span>
								<span>04 72 99 69 78</span>
							</li>
							<li className="flex flex-col">
								<span className="text-xs font-bold uppercase tracking-wider opacity-60">E-mail</span>
								<a href="mailto:arno.baeck@student.ehb.be" className="hover:text-accent-orange transition-colors">
									arno.baeck@student.ehb.be
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Legal Bar */}
			<div className="w-full bg-black/10 border-t border-white/5 py-6 px-6">
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-center md:text-left">
					<p>© {new Date().getFullYear()} Kamil. Alle rechten voorbehouden.</p>
					<div className="flex gap-8">
						<Link href="#" className="hover:text-accent-orange transition-colors">
							Privacybeleid
						</Link>
						<Link href="#" className="hover:text-accent-orange transition-colors">
							Algemene voorwaarden
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
