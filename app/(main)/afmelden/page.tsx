import Link from "next/link";

export const metadata = {
	title: "Afgemeld — Kamil",
};

export default async function AfmeldenPage({
	searchParams,
}: {
	searchParams: Promise<{ status?: string }>;
}) {
	const { status } = await searchParams;
	const ongeldig = status === "ongeldig";

	return (
		<div className="flex flex-col">
			<section className="w-full bg-accent-background flex-grow flex items-center justify-center py-24 px-6">
				<div className="max-w-md w-full text-center space-y-6">
					<div className="text-6xl">{ongeldig ? "🤔" : "🦎"}</div>

					{ongeldig ? (
						<>
							<h1 className="text-3xl">Ongeldige link</h1>
							<p className="text-body-green">
								Deze afmeldlink is ongeldig of verlopen. Stuur een e-mail naar{" "}
								<a href="mailto:arno.baeck@live.be" className="underline hover:text-accent-orange transition-colors">
									arno.baeck@live.be
								</a>{" "}
								en we verwijderen u meteen van de wachtlijst.
							</p>
						</>
					) : (
						<>
							<h1 className="text-3xl">U bent afgemeld.</h1>
							<p className="text-body-green">
								U ontvangt geen verdere berichten meer van Kamil. Bedankt voor uw interesse.
							</p>
						</>
					)}

					<Link
						href="/"
						className="inline-block mt-4 px-8 py-4 rounded-full bg-accent-green text-white font-body-bold text-lg transition-all hover:opacity-90"
					>
						Terug naar de homepagina
					</Link>
				</div>
			</section>
		</div>
	);
}
