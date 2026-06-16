"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ExpoSignUpForm() {
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

	function reset() {
		setNaam("");
		setEmail("");
		setStatus("idle");
		setFout("");
	}

	if (status === "success") {
		return (
			<div className="text-center space-y-6">
				<div className="w-20 h-20 rounded-full bg-accent-background flex items-center justify-center mx-auto text-4xl">
					🦎
				</div>
				<div className="space-y-2">
					<h2 className="text-3xl">Bedankt!</h2>
					<p className="text-body-green text-lg">We verwittigen u zodra Kamil live gaat.</p>
				</div>
				<button
					onClick={reset}
					className="text-body-green/60 text-base underline underline-offset-4 hover:text-accent-green transition-colors"
				>
					Nog iemand inschrijven
				</button>
			</div>
		);
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-5 w-full">
			<div className="space-y-2">
				<label htmlFor="naam" className="block text-sm font-bold text-title-green uppercase tracking-widest">
					Naam
				</label>
				<input
					id="naam"
					type="text"
					required
					autoComplete="name"
					value={naam}
					onChange={(e) => setNaam(e.target.value)}
					placeholder="Jan Janssen"
					className="w-full px-6 py-5 rounded-2xl border-2 border-accent-green/20 bg-white text-body-green placeholder:text-body-green/30 focus:outline-none focus:border-accent-green transition-colors text-lg"
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
					autoComplete="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					placeholder="jan@voorbeeld.be"
					className="w-full px-6 py-5 rounded-2xl border-2 border-accent-green/20 bg-white text-body-green placeholder:text-body-green/30 focus:outline-none focus:border-accent-green transition-colors text-lg"
				/>
			</div>

			{status === "error" && (
				<p className="text-red-600 text-sm">{fout}</p>
			)}

			<button
				type="submit"
				disabled={status === "loading"}
				className="w-full px-8 py-5 rounded-full bg-accent-orange text-white font-body-bold text-xl transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
			>
				{status === "loading" ? "Bezig…" : "Verwittigt mij bij lancering"}
			</button>
		</form>
	);
}
