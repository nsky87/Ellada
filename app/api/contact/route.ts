import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, website } = body;

    // если бот заполнил hidden поле — игнор
    if (website) {
      return Response.json({ success: true });
    }

    // 1. Письмо тебе
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "nsky87@gmail.com",
      subject: `New inquiry from ${name}`,
      html: `
        <h2>New Contact Form Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    // 2. Авто-ответ клиенту
    await resend.emails.send({
      from: "Ellada Studio <onboarding@resend.dev>",
      to: email,
      subject: "We received your message ✨",
      html: `
        <div style="font-family: sans-serif;">
          <h2>Thank you, ${name}!</h2>

          <p>I've received your message and will get back to you soon.</p>

          <p><strong>Your message:</strong></p>
          <p>${message}</p>

          <br />
          <p style="opacity: 0.7;">— Ellada Studio</p>
        </div>
      `,
    });

    return Response.json({ success: true });

  } catch (error) {
    return Response.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}