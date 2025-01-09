import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

// Disable body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req) {
  try {
    const formData = await req.formData();

    // Extract fields
    const fields = {};
    for (const [key, value] of formData.entries()) {
      if (value instanceof File) continue; // Skip the file entry
      fields[key] = value;
    }

    // Extract file
    const file = formData.get("resume");
    if (!file) {
      return new Response(
        JSON.stringify({ success: false, message: "Resume is required." }),
        { status: 400 }
      );
    }

    const filePath = path.join(process.cwd(), "uploads", file.name);
    const buffer = Buffer.from(await file.arrayBuffer());

    // Save file locally (optional, for reference)
    await fs.writeFile(filePath, buffer);

    // Email setup
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email options
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

    // Send email
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
