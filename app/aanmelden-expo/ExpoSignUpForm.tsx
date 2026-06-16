"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

type Status = "idle" | "loading" | "success" | "error";

const AUTO_RESET_SECONDS = 7;

export default function ExpoSignUpForm() {
	const [naam, setNaam] = useState("");
	const [email, setEmail] = useState("");
	const [akkoord, setAkkoord] = useState(false);
	const [status, setStatus] = useState<Status>("idle");
	const [fout, setFout] = useState("");
	const [countdown, setCountdown] = useState(AUTO_RESET_SECONDS);
	const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

	useEffect(() => {
		if (status !== "success") return;

		timerRef.current = setInterval(() => {
			setCountdown((prev) => {
				if (prev <= 1) {
					clearInterval(timerRef.current!);
					return 0;
				}
				return prev - 1;
			});
		}, 1000);

		return () => clearInterval(timerRef.current!);
	}, [status]);

	useEffect(() => {
		if (countdown === 0) reset();
	}, [countdown]);

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
		clearInterval(timerRef.current!);
		setNaam("");
		setEmail("");
		setAkkoord(false);
		setStatus("idle");
		setFout("");
		setCountdown(AUTO_RESET_SECONDS);
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
				<div className="space-y-3">
					<p className="text-body-green/50 text-sm">
						Automatisch terug in {countdown} seconde{countdown !== 1 ? "n" : ""}…
					</p>
					<button
						onClick={reset}
						className="text-body-green/60 text-base underline underline-offset-4 hover:text-accent-green transition-colors"
					>
						Nog iemand inschrijven
					</button>
				</div>
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

			<label className="flex items-start gap-3 cursor-pointer">
				<input
					type="checkbox"
					required
					checked={akkoord}
					onChange={(e) => setAkkoord(e.target.checked)}
					className="mt-1 w-5 h-5 flex-shrink-0 accent-accent-green cursor-pointer"
				/>
				<span className="text-sm text-body-green leading-snug">
					Ik ga akkoord met de{" "}
					<Link href="/algemene-voorwaarden" target="_blank" className="underline underline-offset-2 hover:text-accent-orange transition-colors">
						algemene voorwaarden
					</Link>{" "}
					en het{" "}
					<Link href="/privacybeleid" target="_blank" className="underline underline-offset-2 hover:text-accent-orange transition-colors">
						privacybeleid
					</Link>
					.
				</span>
			</label>

			<button
				type="submit"
				disabled={status === "loading" || !akkoord}
				className="w-full px-8 py-5 rounded-full bg-accent-orange text-white font-body-bold text-xl transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed mt-2"
			>
				{status === "loading" ? "Bezig…" : "Verwittigt mij bij lancering"}
			</button>
		</form>
	);
}
