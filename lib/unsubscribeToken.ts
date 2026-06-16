import { createHmac } from "crypto";

export function generateUnsubscribeToken(email: string): string {
	const hmac = createHmac("sha256", process.env.UNSUBSCRIBE_SECRET!)
		.update(email)
		.digest("hex");
	return Buffer.from(`${email}:${hmac}`).toString("base64url");
}

export function verifyUnsubscribeToken(token: string): string | null {
	try {
		const decoded = Buffer.from(token, "base64url").toString();
		const colonIndex = decoded.lastIndexOf(":");
		const email = decoded.slice(0, colonIndex);
		const hmac = decoded.slice(colonIndex + 1);
		const expected = createHmac("sha256", process.env.UNSUBSCRIBE_SECRET!)
			.update(email)
			.digest("hex");
		if (hmac !== expected) return null;
		return email;
	} catch {
		return null;
	}
}
