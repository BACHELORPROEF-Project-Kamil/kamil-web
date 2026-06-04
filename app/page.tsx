import Header from "@/app/components/Header";
import Features from "@/app/components/Features";
import StatsCounter from "@/app/components/StatsCounter";

export default function Home() {
	return (
		<main className="flex flex-col">
			<Header />
			<div className="mt-16 md:mt-24 lg:mt-32 space-y-16 md:space-y-24 lg:space-y-32 mb-16 md:mb-24 lg:mb-32">
				<StatsCounter />
				<Features />
			</div>
		</main>
	);
}
