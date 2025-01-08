import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    // Destructure form data
    const { firstName, lastName, company, phone, email, message } = body;

    // Create a transporter using your email service
    const transporter = nodemailer.createTransport({
      service: "Gmail", // You can change this to your email provider
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });

    // Define the email options
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`, // Sender's name and email
      to: "sahmed@fgkltd.com", // Replace with your HR email address
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

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
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
