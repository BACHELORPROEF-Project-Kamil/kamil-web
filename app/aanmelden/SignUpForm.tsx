"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function SignUpForm() {
	const [naam, setNaam] = useState("");
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<Status>("idle");
	const [fout, setFout] = useState("");

	async function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setStatus("loading");
		setFout("");

		try {
			const res = await fetch("/api/aanmelden", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ naam, email }),
			});

			if (!res.ok) {
				const data = await res.json();
				throw new Error(data.error ?? "Er ging iets mis.");
			}

			setStatus("success");
		} catch (err) {
			setFout(err instanceof Error ? err.message : "Er ging iets mis.");
			setStatus("error");
		}
	}

	if (status === "success") {
		return (
			<div className="bg-accent-background rounded-[32px] p-10 text-center max-w-md mx-auto">
				<div className="text-5xl mb-6">🦎</div>
				<h2 className="text-2xl mb-4">U staat op de lijst!</h2>
				<p className="text-body-green leading-relaxed">
					Bedankt voor uw aanmelding. Zodra Kamil live gaat, brengen we u als eerste op de hoogte.
				</p>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-5 w-full max-w-md mx-auto">
			<div className="space-y-2">
				<label htmlFor="naam" className="block text-sm font-bold text-title-green uppercase tracking-widest">
					Naam
				</label>
				<input
					id="naam"
					type="text"
					required
					value={naam}
					onChange={(e) => setNaam(e.target.value)}
					placeholder="Jan Janssen"
					className="w-full px-5 py-4 rounded-2xl border-2 border-accent-green/20 bg-white text-body-green placeholder:text-body-green/40 focus:outline-none focus:border-accent-green transition-colors text-base"
				/>
			</div>

			<div className="space-y-2">
				<label htmlFor="email" className="block text-sm font-bold text-title-green uppercase tracking-widest">
					E-mailadres
				</label>
				<input
					id="email"
					type="email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="jan@voorbeeld.be"
					className="w-full px-5 py-4 rounded-2xl border-2 border-accent-green/20 bg-white text-body-green placeholder:text-body-green/40 focus:outline-none focus:border-accent-green transition-colors text-base"
				/>
			</div>

			{status === "error" && (
				<p className="text-red-600 text-sm">{fout}</p>
			)}

			<button
				type="submit"
				disabled={status === "loading"}
				className="w-full px-8 py-4 rounded-full bg-accent-orange text-white font-body-bold text-lg transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
			>
				{status === "loading" ? "Bezig…" : "Verwittigt mij wanneer Kamil live gaat"}
			</button>

			<p className="text-sm text-body-green/70 text-center italic">
				* Geen spam. We sturen u enkel een bericht wanneer Kamil beschikbaar is.
			</p>
		</form>
	);
}
