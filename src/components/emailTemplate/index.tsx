import moment from "moment";

export const emailTemplateContactUs = (data) => {
  return `<body>
  <style>
    * {
      box-sizing: border-box;
    }
    .wrapper {
      max-width: 450px;
      margin: 0 auto;
    }
    .heading {
      margin: 0;
      text-align: center;
    }
    .content {
      padding: 1.5rem 1rem;
    }
    .content p {
      margin: 0 0 14px;
      text-align: center;
    }
  </style>
  <div class="wrapper">
    <h2 class="heading">Thank You for Reaching Out!</h2>
    <div class="content">
      <p>Dear <b>${data?.name}</b></p>
      <p>
        We appreciate you taking the time to contact us. A member of our team
        will review your inquiry and get back to you as soon as possible.
      </p>
      <p>
        In the meantime, please feel free to explore our resources or reach
        out with any further questions.
      </p>
      <p>Best regards,</p>
      <p>The ChaatBar</p>
    </div>
  </div>
</body>`;
};

export const emailTemplateFranchise = (data) => {
  return `<body>
      <style>
        * {
          box-sizing: border-box;
        }
        .wrapper {
          max-width: 500px;
          margin: 2rem auto;
          border: 1px solid #ccc;
        }
        .heading {
          margin: 0;
          padding: 1rem;
          text-align: center;
          background-color: #378805;
          color: #fff;
        }
        .content {
          padding: 1.5rem 1rem;
        }
        .content p {
          margin: 0 0 14px;
        }
        .footer {
          background-color: #2a2a2a;
          padding: 1rem;
          text-align: center;
          color: #fff;
          font-size: 1rem;
          font-weight: 700;
        }
      </style>
      <div class="wrapper">
        <h2 class="heading">The ChaatBar Franchise Application</h2>
        <div class="content">
          <p>Dear <b>${data?.name}</b></p>
          <p>
            We are delighted to have you express interest in becoming a part of
            The Chaat Bar family. Below are your details as submitted:
          </p>
          <p>Name: ${data?.name}</p>
          <p>Email: ${data?.email}</p>
          <p>Phone: ${data?.phone}</p>
          <p>
            Please find the attached Franchise Application Form. Fill it out at
            your earliest convenience and return it by replying to this email with
            the completed form attached. If you have any questions or need further
            assistance, do not hesitate to reach out to us.
          </p>
          <p>Warm regards,</p>
          <p>The Chaat Bar Team</p>
        </div>
        <div class="footer">&copy; ${moment().format(
          "YYYY"
        )} The ChaatBar, All rights reserved</div>
      </div>
  </body>
  `;
};
