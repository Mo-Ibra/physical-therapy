import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    var { name, phone, data, email, message } = await request.json();

    if (!email) {
      email = "المريض بدون بريد الكتروني";
    }

    if (!message) {
      message = "المريض لم يترك رسالة";
    }

    if (!name, phone, data) {
      return Response.json(
        { success: false, error: "يجب أن تقوم بتعبئة جميع الحقول ، الاسم والموبيل والتاريخ" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.GMAIL_USER,
      subject: "📩 لديك حجز موعد جديد",
      text: `الاسم: ${name}\nالايميل: ${email}\nالرسالة: ${message}\nالموبيل: ${phone}\nالتاريخ: ${data}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #ddd;">
          <h2 style="color: #333;">📩 New Contact Form Submission</h2>
          <p><strong>الاسم:</strong> ${name}</p>
          <p><strong>الموبيل:</strong> ${phone}</p>
          <p><strong>موعد الحجز:</strong> ${data}</p>
          <p><strong>الايميل:</strong> <a href="mailto:${email}" style="color: #007bff;">${email}</a></p>
          <p><strong>الرسالة:</strong></p>
          <blockquote style="background: #eee; padding: 10px; border-left: 5px solid #007bff; margin: 10px 0;">
            ${message}
          </blockquote>
          <hr style="border: none; border-top: 1px solid #ddd;" />
          <p style="font-size: 12px; color: #555;">تم ارسال تلك الرسالة من الموقع الخاص بك.</p>
        </div>
      `,
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}