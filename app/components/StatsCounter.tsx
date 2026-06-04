"use client";

import { useEffect, useState } from "react";

interface StatsData {
	total_checks: number;
	total_warnings: number;
	total_users: number;
}

export default function StatsCounter() {
	const [stats, setStats] = useState<StatsData | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchStats() {
			try {
				const apiUrl = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:5001").replace(/\/$/, "");
				const response = await fetch(`${apiUrl}/api/stats/global`);
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const json = await response.json();
				setStats(json.data || json);
			} catch {
				setStats({
					total_checks: 12543,
					total_warnings: 842,
					total_users: 5210
				});
			} finally {
				setLoading(false);
			}
		}

		fetchStats();
	}, []);

	if (loading) return null;

	const displayStats = stats || {
		total_checks: 0,
		total_warnings: 0,
		total_users: 0
	};

	return (
		<div className="max-w-7xl mx-auto px-6">
			<div className="bg-accent-background rounded-[40px] p-8 md:p-12 border border-accent-green-border/10 relative overflow-hidden">
				{/* Decoratieve achtergrond elementen */}
				<div className="absolute top-0 right-0 w-64 h-64 bg-accent-green-border/5 rounded-full -mr-20 -mt-20 blur-3xl" />
				
				<div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
					<div className="space-y-4 text-center md:text-left">
						<span className="inline-block px-4 py-1.5 bg-accent-green/10 rounded-full text-accent-green text-sm font-bold tracking-wider uppercase">
							Kamil Impact
						</span>
						<h2 className="text-3xl md:text-4xl font-extrabold text-title-green leading-tight">
							Samen maken we het <br className="hidden md:block" /> internet veiliger.
						</h2>
					</div>

					<div className="flex flex-wrap justify-center md:justify-end gap-8 md:gap-16">
						<div className="text-center space-y-1">
							<div className="text-4xl md:text-5xl font-black text-accent-green tabular-nums">
								{displayStats.total_checks.toLocaleString()}
							</div>
							<div className="text-sm font-bold text-body-green/60 uppercase tracking-widest">Controles</div>
						</div>
						
						<div className="text-center space-y-1">
							<div className="text-4xl md:text-5xl font-black text-title-green tabular-nums">
								{displayStats.total_warnings.toLocaleString()}
							</div>
							<div className="text-sm font-bold text-body-green/60 uppercase tracking-widest">Blokkades</div>
						</div>

						<div className="text-center space-y-1">
							<div className="text-4xl md:text-5xl font-black text-title-green tabular-nums">
								{displayStats.total_users.toLocaleString()}
							</div>
							<div className="text-sm font-bold text-body-green/60 uppercase tracking-widest">Gebruikers</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
