import nodemailer from "nodemailer";
import fs from "fs/promises";

// ✅ Updated config for Next.js 14
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const fields = {};
    for (const [key, value] of formData.entries()) {
      fields[key] = value;
    }

    const file = formData.get("resume");
    if (!file) {
      return new Response(
        JSON.stringify({ success: false, message: "Resume is required." }),
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `${fields.firstName} ${fields.lastName} <${fields.email}>`,
      to: "atz.softprgmr@gmail.com",
      subject: `New Job Application from ${fields.firstName} ${fields.lastName}`,
      text: `
        Name: ${fields.firstName} ${fields.lastName}
        Email: ${fields.email}
        Phone: ${fields.phone}
        Position: ${fields.position}
        Address: ${fields.address}

        Message:
        ${fields.message}
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Application submitted!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing application:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
