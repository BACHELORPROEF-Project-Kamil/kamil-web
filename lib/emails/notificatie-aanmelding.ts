export function notificatieAanmelding(naam: string, email: string): string {
	return `
		<div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 32px;">
			<h2 style="color: #054431;">Nieuwe aanmelding voor Kamil</h2>
			<p><strong>Naam:</strong> ${naam}</p>
			<p><strong>E-mail:</strong> ${email}</p>
			<p style="color: #888; font-size: 12px;">Ontvangen op ${new Date().toLocaleString("nl-BE")}</p>
		</div>
	`;
}

export function notificatieAanmeldingSubject(naam: string): string {
	return `Nieuwe aanmelding: ${naam}`;
}
