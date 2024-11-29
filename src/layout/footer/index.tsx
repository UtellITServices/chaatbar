import NextImage from "@/components/image/NextImage";
import { getStore } from "@/utils/functions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";
import styles from "./Footer.module.scss";

function Footer() {
  const router = useRouter();
  const [data, setData] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = getStore();
      const address = data?.address ?? "";
      setData(address);
    }
  }, []);

  return (
    <>
      <section className={styles.contactDetail}>
        <Container className={styles.container}>
          <div className={styles.headContent}>
            <h2>Contact Details</h2>
            <p>
              Ready to bring the Chai Bar experience to your community? Get in
              touch today, and let&apos;s explore the possibilities of you being
              a part of the ever-expanding Chaat Bar Franchise Family!
            </p>
          </div>
          <Row className="gy-3 justify-content-center">
            <Col lg={4} md={6}>
              <div className={styles.contentWrapper}>
                <div className={styles.icon}>
                  <FaLocationDot />
                </div>
                <div>
                  <h3>Address</h3>
                  <a href="javascript:void(0)">{data}</a>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6}>
              <div className={styles.contentWrapper}>
                <div className={styles.icon}>
                  <MdOutlinePhoneIphone />
                </div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+1 4034600405">+1 (403)-460-0405</a>
                  <a href="tel:+1 4034788324">+1 (403)-478-8324</a>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6}>
              <div className={styles.contentWrapper}>
                <div className={styles.icon}>
                  <IoMdMail />
                </div>
                <div>
                  <h3>E-mail</h3>
                  <a href="mailto:thechaatbarcalgory@gmail.com">
                    thechaatbarcalgory@gmail.com
                  </a>
                  <a href="mailto:info@chaatbar.ca">info@chaatbar.ca</a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <footer id="footer" className={styles.footer}>
        <div className={styles.footerWrapper}>
          <Container className={styles.container}>
            <div className={styles.footerLogo}>
              <NextImage
                src="/images/logo.png"
                alt=""
                onClick={() => router.push("/")}
              />
            </div>

            <div className={styles.socialLinks}>
              <ul>
                <li>
                  <a href="javascript:void(0)">
                    <NextImage src="/images/social/facebook.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <NextImage src="/images/social/instagram.svg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <NextImage src="/images/social/tik-tok.svg" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </Container>
        </div>
        <div className={styles.copyright}>
          <Container>
            <p>
              © Copyright 2023 The Chaat Bar Design & Developed by:{" "}
              <a href="https://utellitservices.com/" target="_blank">
                {" "}
                Utell It Services.
              </a>
            </p>
          </Container>
        </div>
      </footer>
    </>
  );
}
export { Footer };
