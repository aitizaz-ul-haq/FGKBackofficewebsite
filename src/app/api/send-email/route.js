import nodemailer from "nodemailer";

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

    // Define the email options for HR
    const hrMailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`,
      to: "atz.softprgmr@gmail.com",
      subject: `Contact Form Submission from ${firstName} ${lastName}`,
      text: `
        Name: ${firstName} ${lastName}
        Company: ${company}
        Phone: ${phone}
        Email: ${email}
        
        Message:
        ${message}
      `,
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
                <img src="https://i.postimg.cc/qv15pn6T/fgk-circular-logo.png" alt="FGK Back Office Services" style="height: 100px;">
              </td>
              <td align="right">
                <!-- Empty right section -->
              </td>
            </tr>
          </table>
          
          <!-- Middle Section -->
          <h1 style="text-align: center; color: #333; font-size: 24px; font-weight: 300; font-family:inter, serif">Thank You for contacting FGK Back Office Services</h1>
          <p style="font-size: 16px; color: #555; text-align: center;">
            We would like to inform you that we have revieved your email and a memeber of our team will get back to you as soon as possible
          </p>
          <p style="font-size: 16px; color: #555; text-align: center;">
            In the meantime, feel free to contact us at <a href="mailto:fgkbackofficeservices@gmail.com">fgkbackofficeservices@gmail.com</a> for any queries or for more details, please visit our website at <a href="https://fgkbackofficeservices.com">fgkbackofficeservices.com</a>.
          </p>
          
          <!-- Footer Section -->
          <hr style="border: none; border-top: 1px solid #ccc; margin: 20px 0;">
          <table width="100%" style="border-collapse: collapse;">
            <tr>
              <td align="left" style="font-size: 14px; color: #555; font-weight:"300">
                <strong>FGK Back Office Services</strong><br>
                Office no 212, Pakland VISTA,<br>
                I-8 Markaz Islamabad.<br>
                <p>Follow us on:
                  <a href="https://twitter.com" target="_blank">Twitter</a> |
                  <a href="https://facebook.com" target="_blank">Facebook</a> |
                  <a href="https://linkedin.com" target="_blank">LinkedIn</a>
                </p>
              </td>
              <td align="right">
                <img src="https://i.postimg.cc/QCZ6fJwp/fgk-letter-logo.png" alt="FGK Back Office Services" style="height: 25px;">
              </td>
            </tr>
          </table>
        </div>
      `,
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
