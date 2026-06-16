export function notificatieAfmeldingSubject(email: string): string {
	return `Afmelding wachtlijst: ${email}`;
}

export function notificatieAfmeldingHtml(email: string): string {
	return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <title>Afmelding wachtlijst</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#ffffff;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background:#054431;padding:24px 32px;">
              <p style="margin:0 0 4px;font-size:12px;color:rgba(255,255,255,0.6);text-transform:uppercase;letter-spacing:1px;">Kamil — Wachtlijst</p>
              <h1 style="margin:0;font-size:20px;color:#ffffff;">Afmelding ontvangen</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <p style="margin:0 0 4px;font-size:11px;color:#aaaaaa;text-transform:uppercase;letter-spacing:1px;">E-mailadres</p>
              <p style="margin:0 0 24px;font-size:16px;color:#054431;">${email}</p>
              <p style="margin:0;font-size:14px;color:#2d6a4f;line-height:1.6;">
                Deze persoon heeft zich afgemeld via de unsubscribe-link in de bevestigingsmail. Verwijder dit adres handmatig uit uw lijst indien u die bijhoudt.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#f9f9f9;padding:16px 32px;border-top:1px solid #eeeeee;">
              <p style="margin:0;font-size:12px;color:#aaaaaa;">Ontvangen op ${new Date().toLocaleString("nl-BE")}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function notificatieAfmeldingText(email: string): string {
	return `Afmelding wachtlijst Kamil

E-mailadres: ${email}

Deze persoon heeft zich afgemeld via de unsubscribe-link. Verwijder dit adres handmatig uit uw lijst.

Ontvangen op ${new Date().toLocaleString("nl-BE")}`;
}
