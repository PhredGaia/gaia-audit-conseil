import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
	const { objet, prenom, nom, email, telephone, societe, message } = await request.json();

	const { error } = await resend.emails.send({
		from: 'Contact GAIA <noreply@gaia-audit-conseil.fr>',
		to: 'gaia-audit-conseil-formation@orange.fr',
		replyTo: email,
		subject: `[Contact] ${objet} - ${prenom} ${nom}`,
		text: [
			`Objet : ${objet}`,
			`Prénom : ${prenom}`,
			`Nom : ${nom}`,
			`Email : ${email}`,
			telephone ? `Téléphone : ${telephone}` : null,
			societe ? `Société : ${societe}` : null,
			`\nMessage :\n${message}`,
		]
			.filter(Boolean)
			.join('\n'),
	});

	if (error) {
		return NextResponse.json({ error: error.message }, { status: 500 });
	}

	return NextResponse.json({ success: true });
}
