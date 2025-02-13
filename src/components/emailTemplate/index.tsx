import moment from "moment";

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

export const emailTemplateThanks = (data) => {
  return `<body style="box-sizing: border-box; margin: 0; padding: 0;">
  <div style="max-width: 450px; margin: 0 auto; font-family: Arial, sans-serif;">
    <h2 style="margin: 0; text-align: center;">Thank You for Reaching Out!</h2>
    <div style="padding: 1.5rem 1rem;">
      <p style="margin: 0 0 14px; text-align: center;">Dear <b>${data?.name}</b></p>
      <p style="margin: 0 0 14px; text-align: center;">
        We appreciate you taking the time to contact us. A member of our team
        will review your inquiry and get back to you as soon as possible.
      </p>
      <p style="margin: 0 0 14px; text-align: center;">
        In the meantime, please feel free to explore our resources or reach
        out with any further questions.
      </p>
      <p style="margin: 0 0 14px; text-align: center;">Best regards,</p>
      <p style="margin: 0; text-align: center;">The ChaatBar</p>
    </div>
  </div>
</body>`;
};

export const emailTemplateFranchise = (data) => {
  return `<body style="box-sizing: border-box; margin: 0; padding: 0;">
      <div style="max-width: 500px; margin: 2rem auto; border: 1px solid #ccc; font-family: Arial, sans-serif;">
        <h2 style="margin: 0; padding: 1rem; text-align: center; background-color: #378805; color: #fff;">
          The ChaatBar Franchise Application
        </h2>
        <div style="padding: 1.5rem 1rem;">
          <p style="margin: 0 0 14px;">Dear <b>${data?.name}</b></p>
          <p style="margin: 0 0 14px;">
            We are delighted to have you express interest in becoming a part of
            The Chaat Bar family. Below are your details as submitted:
          </p>
          <p style="margin: 0 0 14px;"><b>Name:</b> ${data?.name}</p>
          <p style="margin: 0 0 14px;"><b>Email:</b> ${data?.email}</p>
          <p style="margin: 0 0 14px;"><b>Phone:</b> ${data?.phone_number}</p>
          <p style="margin: 0 0 14px;"><b>Message:</b> ${data?.message}</p>
          <p style="margin: 0 0 14px;">
            Please find the attached Franchise Application Form. Fill it out at
            your earliest convenience and return it by replying to this email with
            the completed form attached. If you have any questions or need further
            assistance, do not hesitate to reach out to us.
          </p>
          <p style="margin: 0 0 14px;">Warm regards,</p>
          <p style="margin: 0;">The Chaat Bar Team</p>
        </div>
        <div style="background-color: #2a2a2a; padding: 1rem; text-align: center; color: #fff; font-size: 1rem; font-weight: 700;">
          &copy; ${moment().format("YYYY")} The ChaatBar, All rights reserved
        </div>
      </div>
  </body>`;
};
