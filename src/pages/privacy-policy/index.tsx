import Head from "next/head";
import PageLayout from "@/layout/pageLayout";
import { Footer } from "@/layout/footer";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./PrivacyPolicy.module.scss";
import clsx from "clsx";

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
          <Col xl={8} className="mx-auto my-xl-4">
            <Container>
              <Row className={clsx(styles.row)}>
                <Col xl={12}>
                  <div className={styles.cuisinR}>
                    <h2>Privacy Policy</h2>
                    <p>
                      At The Chaat Bar Canada, we are committed to protecting your privacy.
                      This policy outlines how we collect, use, and safeguard your personal data.

                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </div>
      </section>
      <section className={styles.cuisin}>
        <div className={styles.cuisinA}>
          <Col xl={8} className="mx-auto">
            <Container>
              <Row className={clsx(styles.row)}>
                <Col xl={12}>
                  <div className={styles.cuisinR}>
                    <h5>Information We Collect</h5>
                    <p>We may collect personal information from various sources, including:</p>
                    <p>
                      - Information provided by you during the course of your engagement with us, such as your name, contact details, employment history, educational background, skills, and other relevant information..
                      <br />
                      - Information obtained through our website, including IP addresses, browser type, and browsing activities..
                      <br />
                      - Information obtained through interactions with our representatives, such as through emails, telephone calls, or in-person meetings.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </div>
      </section>

      <section className={styles.cuisin}>
        <Col xl={8} className="mx-auto py-4">
          <Container className={styles.cuisinA}>
            <Row className={clsx(styles.row)}>
              <Col lg={12}>
                <div className={styles.restA}>
                  <h5>How We Use Your Information</h5>
                  <p>
                    We use your personal information to process orders and customer requests. Additionally, we may send updates, offers, and promotions related to our services. Your information also helps us improve our website and customer experience. In certain cases, we may process data to comply with legal and regulatory requirements.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </section>

      <section className={styles.cuisin}>
        <Col xl={8} className="mx-auto my-xl-4">
          <Container className={styles.cuisinA}>
            <Row className={styles.row}>
              <Col lg={12}>
                <div className={styles.restA}>
                  <h5>Disclosure of Personal Information
                  </h5>
                  <p>
                    Your personal data may be shared with relevant third parties as necessary to provide our services. This includes prospective employers and clients, third-party service providers who assist us in delivering our services, and legal or regulatory authorities when required by law.


                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </section>

      <section className={styles.cuisin}>
        <Col xl={8} className="mx-auto my-xl-4">
          <Container className={styles.cuisinA}>
            <Row className={styles.row}>
              <Col lg={12}>
                <div className={styles.restA}>
                  <h5>Data Security
                  </h5>
                  <p>
                    We take appropriate measures to safeguard your personal information against unauthorized access, disclosure, alteration, or destruction. These measures include physical, technical, and organizational security safeguards to ensure your data remains protected.


                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </section>

      <section className={styles.cuisin}>
        <Col xl={8} className="mx-auto my-xl-4">
          <Container className={styles.cuisinA}>
            <Row className={styles.row}>
              <Col lg={12}>
                <div className={styles.restA}>
                  <h5>Retention of Personal Information
                  </h5>
                  <p>
                    We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Once your information is no longer required, we securely dispose of it in accordance with industry standards.

                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </section>

      <section className={styles.cuisin}>
        <Col xl={8} className="mx-auto my-xl-4">
          <Container className={styles.cuisinA}>
            <Row className={styles.row}>
              <Col lg={12}>
                <div className={styles.restA}>
                  <h5>Your Rights</h5>
                  <p>
                    You have the right to access, update, or request the deletion of your personal data. If you wish to exercise any of these rights, please contact us. We do not sell or misuse your personal data, and we are committed to maintaining your privacy.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </section>


      <section className={styles.cuisin}>
        <Col xl={8} className="mx-auto my-xl-4">
          <Container className={styles.cuisinA}>
            <Row className={styles.row}>
              <Col lg={12}>
                <div className={styles.restA}>
                  <h5>Changes to this Privacy Policy
                  </h5>
                  <p>
                    We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Any material changes will be posted on our website to keep you informed.

                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Col>
      </section>

      <section className={styles.rest}>
        <div className={styles.cuisinA}>
          <Col xl={8} className="mx-auto">

            <Container>
              <Row className={clsx(styles.row)}>
                <Col xl={12}>
                  <div className={styles.cuisinR}>
                    <h5>Contact Us</h5>
                    <p>
                      The Chaat Bar Canada
                      <br />
                      Email: <a href="mailto:info@chaatbar.ca">info@chaatbar.ca</a>
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </Col>
        </div>
      </section>

      <Footer />
    </PageLayout>
  );
}
