export function bevestigingAanmelding(naam: string): string {
	return `
		<div style="font-family: 'Open Sans', sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 24px; background: #ffffff;">
			<div style="text-align: center; margin-bottom: 32px;">
				<img src="https://kamil-extension.be/images/kamil.svg" alt="Kamil" width="120" style="display: inline-block;" />
			</div>
			<div style="background: #eef9f4; border-radius: 24px; padding: 40px 32px; margin-bottom: 24px;">
				<h1 style="font-family: 'Outfit', sans-serif; color: #054431; font-size: 28px; margin: 0 0 16px;">
					Bedankt, ${naam}!
				</h1>
				<p style="color: #2d6a4f; font-size: 16px; line-height: 1.6; margin: 0 0 16px;">
					U staat nu op de wachtlijst voor <strong>Kamil</strong>. Zodra we officieel live gaan, bent u de eerste om dat te weten.
				</p>
				<p style="color: #2d6a4f; font-size: 16px; line-height: 1.6; margin: 0;">
					Kamil is uw digitale kameleon: hij herkent gevaarlijke websites en beschermt u onzichtbaar op de achtergrond — zonder dat u een computerexpert hoeft te zijn.
				</p>
			</div>
			<p style="color: #2d6a4f; font-size: 14px; text-align: center;">
				© ${new Date().getFullYear()} Kamil. Alle rechten voorbehouden.
			</p>
		</div>
	`;
}

export const bevestigingAanmeldingSubject = "U staat op de wachtlijst voor Kamil!";
