import Button from "@/app/components/Button";
import Image from "next/image";

export default function Header() {
	return (
		<div className="w-full bg-accent-background">
			<div className="max-w-7xl mx-auto py-20 px-6 flex flex-col-reverse items-center gap-12 text-center md:flex-row md:text-left">
				<div className="flex-1 space-y-6">
					<div>
						<h1>
							Surf gerust.
							<br />
							Kamil kijkt met u mee.
						</h1>
					</div>
					<div>
						<p>
							Het internet is een jungle. Soms kijkt men over uw schouder mee.
							<br />
							Kamil is uw <strong>digitale kameleon:</strong>
							<br />
							hij past zich aan en beschermt u onzichtbaar op de achtergrond.
						</p>
					</div>
					<div>
						<Button href="#">Start met veilig surfen</Button>
						<p className="mt-2 text-sm opacity-80">* Gratis & Veilig!</p>
					</div>
				</div>
				<div className="flex-shrink-0 w-[150px] sm:w-[250px] md:w-[350px] lg:w-[450px]">
					<Image
						src="/images/kamil-homepage.webp"
						alt="Kamil sticking up his thumb"
						width={500}
						height={500}
						sizes="(min-width: 1100px) 450px, (min-width: 768px) 350px, (min-width: 640px) 250px, 150px"
						className="w-full h-auto object-contain"
						priority
					/>
				</div>
			</div>
		</div>
	);
}
