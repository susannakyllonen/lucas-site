import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    await resend.emails.send({
      from: "Lucas Contact <no-reply@happytwiggy.com>",
      to: "lucaskyllone@gmail.com",
      subject: `Uusi yhteydenotto Lucaksen sivulta – ${name}`,
      replyTo: email,
      text: `
Nimi: ${name}
Sähköposti: ${email}

Viesti:
${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: "Email failed to send" },
      { status: 500 }
    );
  }
}
