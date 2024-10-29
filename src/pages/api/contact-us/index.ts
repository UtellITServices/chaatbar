import { emailTemplate } from "@/components/emailTemplate";
import sgMail from "@sendgrid/mail";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);

    // const pdfPath = path.join(process.cwd(), "public", "file", "form.pdf");

    // const pdfData = fs.readFileSync(pdfPath).toString("base64");
    const msg = {
      from: process.env.SEND_GRID_API_EMAIL,
      to: process.env.SEND_GRID_API_EMAIL,
      subject: `New Message from ${body?.name || ""}`,
      text: body?.message || body?.name || "",
      html: emailTemplate(body),
      // attachments: [
      //   {
      //     content: pdfData,
      //     filename: "your-file.pdf",
      //     type: "application/pdf",
      //     disposition: "attachment",
      //   },
      // ],
    };
    try {
      // Send email
      await sgMail.send(msg);
      res.status(200).json({ message: "Email sent successfully" });
      console.log("res", res);
    } catch (error) {
      console.log("error", error);
      if (error.response) {
        console.error("SendGrid error response:", error.response.body);
        return res.status(500).json({
          message: "Error sending email",
        });
      }
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}
