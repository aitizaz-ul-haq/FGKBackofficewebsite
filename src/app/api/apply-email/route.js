import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

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

    const imageAttachments = [
      {
        filename: "fgk_circular_logo.png",
        path: path.join(process.cwd(), "public", "fgk_circular_logo.png"),
        cid: "fgklogo",
      },
      {
        filename: "fgk_letter_logo.png",
        path: path.join(process.cwd(), "public", "fgk_letter_logo.png"),
        cid: "fgkfooterlogo",
      },
    ];

    // Email to HR with the applicant's details and resume
    const hrMailOptions = {
      from: `${fields.firstName} ${fields.lastName} <${fields.email}>`,
      to: "sahmed@fgkltd.com",
      // to: "atz.softprgmr@gmail.com",
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

    // Thank-you email to the applicant
    const thankYouMailOptions = {
      from: `FGK Back Office Services <${process.env.EMAIL_USER}>`,
      to: fields.email,
      subject: "Thank You for Your Job Application!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd;">
          <table width="100%" style="border-collapse: collapse;">
            <tr>
              <td align="left">
                <img src="cid:fgklogo" alt="FGK Back Office Services" style="height: 100px;">
              </td>
              <td align="right">
              </td>
            </tr>
          </table>
          <h1 style="text-align: left; color: #333; font-size: 24px; font-weight: 300; font-family:inter, serif">Thank You for sharing your resume</h1>
          <p style="font-size: 16px; color: #555; text-align: left;">
            Dear ${fields.firstName} ${fields.lastName},<br> 
            Thank you for taking interest in a career at FGK Back Office Services. We would like to inform you that we have received your job application for the position of ${fields.position}. Our HR team will review your resume and get back to you shortly.
          </p>
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          <table width="100%" style="border-collapse: collapse;">
            <tr>
              <td align="left" style="font-size: 14px; color: #555;">
                <strong>FGK Back Office Services</strong><br>
                Office no 212, 213 Pakland VISTA,<br>
                I-8 Markaz Islamabad.<br>
                <p>Follow us on:
                  <a href="https://instagram.com/" target="_blank">Instagram</a> |
                  <a href="https://facebook.com" target="_blank">Facebook</a> |
                  <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                </p>
              </td>
              <td align="right">
                <img src="cid:fgkfooterlogo" alt="FGK Back Office Services" style="height: 25px;">
              </td>
            </tr>
          </table>
        </div>
      `,
      attachments: imageAttachments,
    };

    await transporter.sendMail(hrMailOptions);
    await transporter.sendMail(thankYouMailOptions);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Application submitted and thank-you email sent!",
      }),
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
