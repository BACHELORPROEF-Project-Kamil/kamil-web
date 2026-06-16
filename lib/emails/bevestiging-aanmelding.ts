export const bevestigingAanmeldingSubject = "U staat op de wachtlijst voor Kamil";

export function bevestigingAanmeldingHtml(naam: string): string {
	return `<!DOCTYPE html>
<html lang="nl">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Bedankt voor uw aanmelding</title>
</head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,Helvetica,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:16px;overflow:hidden;">

          <!-- Header -->
          <tr>
            <td style="background:#054431;padding:32px 40px;text-align:center;">
              <img src="https://kamil-extension.be/images/kamil_white.svg" alt="Kamil" width="120" style="display:block;margin:0 auto;" />
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <p style="margin:0 0 8px;font-size:13px;color:#888888;text-transform:uppercase;letter-spacing:1px;">Wachtlijst bevestiging</p>
              <h1 style="margin:0 0 20px;font-size:26px;color:#054431;line-height:1.3;">Bedankt, ${naam}!</h1>
              <p style="margin:0 0 16px;font-size:16px;color:#2d6a4f;line-height:1.6;">
                U staat nu op de wachtlijst voor <strong>Kamil</strong>. Zodra we officieel live gaan, verwittigen we u als eerste.
              </p>
              <p style="margin:0 0 32px;font-size:16px;color:#2d6a4f;line-height:1.6;">
                Kamil herkent gevaarlijke websites en beschermt u onzichtbaar op de achtergrond — zonder dat u een computerexpert hoeft te zijn.
              </p>
              <hr style="border:none;border-top:1px solid #eee;margin:0 0 32px;" />
              <p style="margin:0;font-size:14px;color:#999999;line-height:1.5;">
                U ontvangt deze e-mail omdat u zich heeft ingeschreven op <a href="https://kamil-extension.be" style="color:#054431;">kamil-extension.be</a>.<br/>
                We sturen u enkel een bericht wanneer Kamil beschikbaar is.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9f9f9;padding:20px 40px;text-align:center;border-top:1px solid #eeeeee;">
              <p style="margin:0;font-size:12px;color:#aaaaaa;">
                &copy; ${new Date().getFullYear()} Kamil &mdash; Alle rechten voorbehouden
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export function bevestigingAanmeldingText(naam: string): string {
	return `Bedankt, ${naam}!

U staat nu op de wachtlijst voor Kamil. Zodra we officieel live gaan, verwittigen we u als eerste.

Kamil herkent gevaarlijke websites en beschermt u onzichtbaar op de achtergrond — zonder dat u een computerexpert hoeft te zijn.

---
U ontvangt deze e-mail omdat u zich heeft ingeschreven op kamil-extension.be.
We sturen u enkel een bericht wanneer Kamil beschikbaar is.

© ${new Date().getFullYear()} Kamil`;
}
