import nodemailer from "nodemailer";
import path from "path";

export async function POST(req) {
  try {
    const body = await req.json();

    // Destructure form data
    const { firstName, lastName, company, phone, email, message } = body;

    // Create a transporter using your email service
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Shared attachments (inline images via cid)
    const attachments = [
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

    // Define the email options for HR
    const hrMailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: "sahmed@fgkltd.com",
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      // text: `
      //   Name: ${firstName} ${lastName}
      //   Company: ${company}
      //   Phone: ${phone}
      //   Email: ${email}

      //   Message:
      //   ${message}
      // `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 10px;">
          <img src="cid:fgklogo" alt="FGK Logo" style="height: 80px;" />
          <h2>Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br>${message}</p>
          <br />
          <img src="cid:fgkfooterlogo" alt="FGK Footer Logo" style="height: 25px;" />
        </div>
      `,
      attachments,
    };

    // Define the thank-you email options for the user
    const thankYouMailOptions = {
      from: `FGK Back Office Services <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank You for Contacting Us!",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd;">
          <!-- Header Section -->
          <table width="100%" style="border-collapse: collapse;">
            <tr>
              <td align="left">
                <!-- <img src="https://i.postimg.cc/qv15pn6T/fgk-circular-logo.png" alt="FGK Back Office Services" style="height: 100px;"> -->
                 <img src="cid:fgklogo" alt="FGK Back Office Services" style="height: 100px;">
              </td>
              <td align="right">
                <!-- Empty right section -->
              </td>
            </tr>
          </table>
          
          <!-- Middle Section -->
          <h1 style="text-align: center; color: #333; font-size: 24px; font-weight: 300; font-family:inter, serif">Thank You for contacting FGK Back Office Services</h1>
          <p style="font-size: 16px; color: #555; text-align: center;">
            We would like to inform you that we have recieved your email and a member of our team will get back to you as soon as possible
          </p>
          <!-- <p style="font-size: 16px; color: #555; text-align: center;">
            In the meantime, feel free to contact us at <a href="mailto:fgkbackofficeservices@gmail.com">fgkbackofficeservices@gmail.com</a> for any queries or for more details, please visit our website at <a href="https://fgkbackofficeservices.com">fgkbackofficeservices.com</a>.
          </p> -->
          
          <!-- Footer Section -->
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          <table width="100%" style="border-collapse: collapse;">
            <tr>
              <td align="left" style="font-size: 14px; color: #555; font-weight:"300">
                <strong>FGK Back Office Services</strong><br>
                Office no 212, Pakland VISTA,<br>
                I-8 Markaz Islamabad.<br>
                <p>Follow us on:
                 <a href="https://instagram.com/" target="_blank">Instagram</a> |
                  <a href="https://facebook.com" target="_blank">Facebook</a> |
                  <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                </p>
              </td>
              <td align="right">
                <img src="cid:fgkfooterlogo" alt="FGK Letter Logo" style="height: 25px;" />
              </td>
            </tr>
          </table>
        </div>
      `,
      attachments,
    };

    // it support services

    // Send the email to HR
    await transporter.sendMail(hrMailOptions);

    // Send the thank-you email to the user
    await transporter.sendMail(thankYouMailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Emails sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, message: "Failed to send email." }),
      { status: 500 }
    );
  }
}
