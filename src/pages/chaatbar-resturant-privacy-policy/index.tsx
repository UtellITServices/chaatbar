import Head from "next/head";
import PageLayout from "@/layout/pageLayout";
import { Footer } from "@/layout/footer";
// import { Container, Row, Col } from "react-bootstrap";
import styles from "./PrivacyPolicy.module.scss";
// import clsx from "clsx";

export default function PrivacyPolicy() {
  return (
    <PageLayout>
      <Head>
        <title>Privacy Policy | The Chaat Bar Canada</title>
        <meta
          name="description"
          content="Learn how The Chaat Bar Canada collects, uses, and protects your personal information in compliance with privacy regulations."
        />
      </Head>
      <section className="py-5" >

      </section>

      <section className={styles.cuisin} >
        <div className={styles.cuisinA}>
          <div className={styles.privacy}>
            <h1>PRIVACY POLICY</h1>
            <p><strong>Last updated {new Date().toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric'
})}</strong></p>
            <p>
              This privacy notice for <strong>Chaatbar Resturant</strong> ("we," "us," or "our"), describes how and why we might collect,
              store, use, and/or share ("process") your information when you use our services ("Services"), such as when you:
            </p>

            <ul>
              <li>Visit our website at <a href="https://thechaatbar.ca/">https://thechaatbar.ca/</a>, or any website of ours that links to this privacy notice</li>
              <li>Download and use our mobile application (Chaatbar restro), or any other application of ours that links to this privacy notice</li>
              <li>Engage with us in other related ways, including any sales, marketing, or events</li>
            </ul>

            <p>
              Questions or concerns? Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:info@chaatbar.ca">info@chaatbar.ca</a>.
            </p>

            <h2>SUMMARY OF KEY POINTS</h2>
            <p>This summary provides key points from our privacy notice. To learn more, please refer to the full sections below.</p>

            <ul>
              <li><strong>Personal Information:</strong> We process personal information you provide depending on your interaction with our Services. <em>Learn more below.</em></li>
              <li><strong>Sensitive Information:</strong> We do not process sensitive personal information.</li>
              <li><strong>Third Parties:</strong> We do not collect information from third parties.</li>
              <li><strong>Purpose:</strong> We use your information to operate, improve, and secure our services. <em>Learn more below.</em></li>
              <li><strong>Sharing:</strong> We may share your data in specific circumstances. <em>Learn more below.</em></li>
              <li><strong>Rights:</strong> Depending on your location, you may have rights over your personal data. <em>Learn more below.</em></li>
            </ul>

            <h2>TABLE OF CONTENTS</h2>
            <ol>
              <li>WHAT INFORMATION DO WE COLLECT?</li>
              <li>HOW DO WE PROCESS YOUR INFORMATION?</li>
              <li>WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</li>
              <li>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</li>
              <li>HOW LONG DO WE KEEP YOUR INFORMATION?</li>
              <li>DO WE COLLECT INFORMATION FROM MINORS?</li>
              <li>WHAT ARE YOUR PRIVACY RIGHTS?</li>
              <li>CONTROLS FOR DO-NOT-TRACK FEATURES</li>
              <li>DO WE MAKE UPDATES TO THIS NOTICE?</li>
              <li>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</li>
              <li>HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</li>
            </ol>

            <h3>1. WHAT INFORMATION DO WE COLLECT?</h3>
            <p><strong>In Short:</strong> We collect personal information that you provide to us.</p>
            <p>We collect personal information when you express interest in our Services, participate in activities, or contact us.</p>
            <p><strong>Sensitive Information:</strong> We do not process sensitive information.</p>
            <p><strong>Application Data:</strong> We may collect app-related info such as push notification preferences. You may turn these off in your device settings.</p>

            <h3>2. HOW DO WE PROCESS YOUR INFORMATION?</h3>
            <p><strong>In Short:</strong> We process your information to provide, improve, and secure our Services, and comply with law.</p>

            <h3>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h3>
            <p><strong>In Short:</strong> We process data based on valid legal grounds like consent, contract, legal obligation, or legitimate interest.</p>
            <p>Some cases where we may process without consent include emergencies, fraud prevention, legal compliance, or public interest.</p>

            <h3>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h3>
            <p><strong>In Short:</strong> We may share information in certain situations such as business transfers or negotiations.</p>

            <h3>5. HOW LONG DO WE KEEP YOUR INFORMATION?</h3>
            <p><strong>In Short:</strong> We retain your data only as long as necessary unless required by law.</p>
            <p>When no longer needed, we delete or anonymize the data unless it's archived for compliance or legal obligations.</p>

            <h3>6. DO WE COLLECT INFORMATION FROM MINORS?</h3>
            <p><strong>In Short:</strong> We do not knowingly collect or market to individuals under 18 years old.</p>
            <p>If we learn of such data collection, we delete the data and deactivate related accounts.</p>

            <h3>7. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
            <p><strong>In Short:</strong> You may have rights under privacy laws to access, correct, delete, or restrict your personal data.</p>
            <p>You can also withdraw consent at any time without affecting prior processing.</p>

            <h3>8. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
            <p>We currently do not respond to DNT browser signals due to lack of a uniform standard.</p>

            <h3>9. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
            <p><strong>In Short:</strong> Yes, we update this policy as required. Revisions will be noted by a new date and, if material, we may notify users.</p>

            <h3>10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h3>
            <p>If you have questions, contact us at:</p>
            <address>
              <strong>Email:</strong> <a href="mailto:info@thechaatbar.ca">info@chaatbar.ca</a><br />
              <strong>Mail:</strong> 320 W Creek Dr, Chestermere, AB T1X 0B4, Canada
            </address>

            <h3>11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h3>
            <p>Depending on your local laws, you may request access to your personal data, ask for correction or deletion, or withdraw consent.</p>
            <p>Submit a data subject access request or email us at <a href="mailto:info@chaatbar.ca">info@chaatbar.ca</a>.</p>
          </div>

        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
