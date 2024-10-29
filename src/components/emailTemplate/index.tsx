export const emailTemplate = (data) => {
  return `<table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #f4f4f4; padding: 20px;"><tr><td align="center"><table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);"><tr><td style="text-align: center; padding: 10px 0;"><h1 style="color: #333333; font-size: 24px; margin: 0;">${
    data?.date ? "Contact Form Submission" : "Appointment request"
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
  }${
    data?.date
      ? `<tr><td style="padding: 10px 0;"><p style="color: #555555; font-size: 16px; margin: 0;"><strong>Date:</strong> ${data?.date}</p></td></tr>`
      : ""
  }${
    data?.time
      ? `<tr><td style="padding: 10px 0;"><p style="color: #555555; font-size: 16px; margin: 0;"><strong>Time:</strong> ${data?.time}</p></td></tr></table></td></tr></table>`
      : ""
  }`;
};
