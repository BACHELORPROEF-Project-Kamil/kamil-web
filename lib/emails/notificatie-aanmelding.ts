export function notificatieAanmeldingSubject(naam: string): string {
	return `Nieuwe aanmelding: ${naam}`;
}

export function notificatieAanmeldingHtml(naam: string, email: string): string {
	return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <title>Nieuwe aanmelding</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:480px;background:#ffffff;border-radius:16px;overflow:hidden;">
          <tr>
            <td style="background:#054431;padding:24px 32px;">
              <p style="margin:0;font-size:12px;color:rgba(255,255,255,0.6);text-transform:uppercase;letter-spacing:1px;">Kamil — Wachtlijst</p>
              <h1 style="margin:8px 0 0;font-size:20px;color:#ffffff;">Nieuwe aanmelding</h1>
            </td>
          </tr>
          <tr>
            <td style="padding:32px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;">
                    <p style="margin:0 0 4px;font-size:11px;color:#aaaaaa;text-transform:uppercase;letter-spacing:1px;">Naam</p>
                    <p style="margin:0;font-size:16px;color:#054431;font-weight:bold;">${naam}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding:12px 0;">
                    <p style="margin:0 0 4px;font-size:11px;color:#aaaaaa;text-transform:uppercase;letter-spacing:1px;">E-mailadres</p>
                    <p style="margin:0;font-size:16px;color:#054431;">${email}</p>
                  </td>
                </tr>
              </table>
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

export function notificatieAanmeldingText(naam: string, email: string): string {
	return `Nieuwe aanmelding voor Kamil

Naam: ${naam}
E-mail: ${email}

Ontvangen op ${new Date().toLocaleString("nl-BE")}`;
}
