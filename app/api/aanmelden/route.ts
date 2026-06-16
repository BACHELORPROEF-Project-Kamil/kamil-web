import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { bevestigingAanmelding, bevestigingAanmeldingSubject } from "@/lib/emails/bevestiging-aanmelding";
import { notificatieAanmelding, notificatieAanmeldingSubject } from "@/lib/emails/notificatie-aanmelding";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
	const { naam, email } = await req.json();

	if (!naam || !email || !email.includes("@")) {
		return NextResponse.json({ error: "Ongeldige gegevens." }, { status: 400 });
	}

	const from = process.env.RESEND_FROM!;
	const notify = process.env.RESEND_NOTIFY!;

	const [bevestiging, notificatie] = await Promise.allSettled([
		resend.emails.send({
			from,
			to: email,
			subject: bevestigingAanmeldingSubject,
			html: bevestigingAanmelding(naam),
		}),
		resend.emails.send({
			from,
			to: notify,
			subject: notificatieAanmeldingSubject(naam),
			html: notificatieAanmelding(naam, email),
		}),
	]);

	if (bevestiging.status === "rejected") {
		console.error("Bevestigingsmail mislukt:", bevestiging.reason);
		return NextResponse.json({ error: "E-mail kon niet verstuurd worden." }, { status: 500 });
	}

	if (notificatie.status === "rejected") {
		console.error("Notificatiemail mislukt:", notificatie.reason);
	}

	return NextResponse.json({ ok: true });
}
