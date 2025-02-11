import { emailTemplateFranchise } from "@/components/emailTemplate";
import nodemailer from "nodemailer";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST requests are allowed" });
  }
  const body = req.body;

  if (!body?.email || !body?.name || !body?.message) {
    return res
      .status(400)
      .json({ error: "Missing required fields: to, subject, text" });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USER,
        pass: process.env.NEXT_PUBLIC_SMTP_PASS,
      },
    });

    const pdfFilePath = path.join(process.cwd(), "public/file/form.pdf");

    const info = await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_SMTP_USER,
      to: body?.email,
      replyTo: "franchise@thechaatbar.ca",
      subject: `The Chaatbar`,
      text: body?.message || body?.name || "",
      html: emailTemplateFranchise(body),
      attachments: [
        {
          filename: "chaatbar.pdf",
          path: pdfFilePath,
        },
      ],
    });

    res.status(200).json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email:", error);
    res
      .status(500)
      .json({ error: "Failed to send email", details: error.message });
  }
}
