export const emailTemplateContactUs = (data) => {
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f4; padding: 20px;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);"><tr><td style="text-align: center; padding: 10px 0;"><h1 style="color: #333333; font-size: 24px; margin: 0;">${
    data?.is_franchise ? "Franchise request" : "Appointment request"
  }</h1></td></tr><tr><td style="padding: 10px 0;"><p style="color: #555555; font-size: 16px; margin: 0;"><strong>Name:</strong> ${
    data?.name
  }</p></td></tr><tr><td style="padding: 10px 0;"><p style="color: #555555; font-size: 16px; margin: 0;"><strong>Email:</strong> ${
    data?.email
  }</p></td></tr><tr><td style="padding: 10px 0;"><p style="color: #555555; font-size: 16px; margin: 0;"><strong>Phone Number:</strong> ${
    data?.phone_number
  }</p></td></tr>${
    data?.message
      ? `<tr><td style="padding: 10px 0;"><p style="color: #555555; font-size: 16px; margin: 0;"><strong>Message:</strong></p><p style="color: #555555; font-size: 16px; margin: 0;">${data?.message}</p></td></tr>`
      : ""
  }`;
};

export const emailTemplateFranchise = (data) => {
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f4; padding: 20px;">
      <tr>
        <td align="center">
          <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
            <tr>
              <td style="text-align: center; padding: 20px;">
                <h1 style="color: #333333; font-size: 24px; margin: 0;">Thank You for Reaching Out!</h1>
              </td>
            </tr>
            <tr>
              <td style="text-align: center; padding: 10px 20px;">
                <p style="color: #333333; font-size: 16px; margin: 0;">
                  Dear ${data?.name || "Valued Customer"},
                </p>
                <p style="color: #555555; font-size: 16px; margin: 20px 0;">
                  We appreciate you taking the time to contact us. A member of our team will review your inquiry and get back to you as soon as possible.
                </p>
                <p style="color: #555555; font-size: 16px;">
                  In the meantime, please feel free to explore our resources or reach out with any further questions.
                </p>
              </td>
            </tr>
            <tr>
              <td style="padding-top: 20px; text-align: center;">
                <p style="color: #333333; font-size: 16px; margin: 0;">
                  Best regards,<br/>
                  Chaatbar
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>`;
};
