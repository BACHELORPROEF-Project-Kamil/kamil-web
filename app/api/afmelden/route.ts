import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { verifyUnsubscribeToken } from "@/lib/unsubscribeToken";
import {
	notificatieAfmeldingSubject,
	notificatieAfmeldingHtml,
	notificatieAfmeldingText,
} from "@/lib/emails/notificatie-afmelding";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(req: NextRequest) {
	const token = req.nextUrl.searchParams.get("token");

	if (!token) {
		return NextResponse.redirect(new URL("/afmelden?status=ongeldig", req.url));
	}

	const email = verifyUnsubscribeToken(token);

	if (!email) {
		return NextResponse.redirect(new URL("/afmelden?status=ongeldig", req.url));
	}

	await resend.emails.send({
		from: process.env.RESEND_FROM!,
		to: process.env.RESEND_NOTIFY!,
		subject: notificatieAfmeldingSubject(email),
		html: notificatieAfmeldingHtml(email),
		text: notificatieAfmeldingText(email),
	}).catch((err) => console.error("Afmelding notificatie mislukt:", err));

	return NextResponse.redirect(new URL("/afmelden?status=gelukt", req.url));
}
