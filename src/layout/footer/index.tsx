import NextImage from "@/components/image/NextImage";
import { getStore } from "@/utils/functions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { MdOutlinePhoneIphone } from "react-icons/md";
import styles from "./Footer.module.scss";

interface IProps {
  title?: string;
  description?: string;
}

function Footer({ title, description }: IProps) {
  const router = useRouter();
  const [, setData] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data = getStore();
      const address = data?.address ?? "";
      setData(address);
    }
  }, []);

  const is_calgary = router.pathname.startsWith("/calgary");

  return (
    <>
      <section className={styles.contactDetail}>
        <Container className={styles.container}>
          <div className={styles.headContent}>
            <h2>{title ?? "Contact Details"}</h2>
            <p>
              {description ? (
                description
              ) : (
                <>
                  Excited to bring the Chaat Bar experience - best samosa chaat
                  and Amritsari kulcha restaurant - to your community? Get in
                  touch today! Let's have a discussion where we explore the
                  possibilities of you being a part of the ever-expanding Chaat
                  Bar Franchise Family!
                </>
              )}
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
                  {is_calgary ? (
                    <a href="javascript:void(0)">
                      6004 Country Hills Blvd NE Unit 2030, Calgary, AB T3N 1A8
                    </a>
                  ) : (
                    <a href="javascript:void(0)">
                      320 W Creek Dr, Chestermere, AB T1X 0B4, Canada
                    </a>
                  )}
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
                  {is_calgary ? (
                    <>
                      <a href="tel:+1 4034600405">+1 (403)-460-0405</a>
                      <a href="tel:+1 4034788324">+1 (403)-478-8324</a>
                    </>
                  ) : (
                    <a href="tel:+1 8255401590">+1 825-540-1590</a>
                  )}
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
                  {is_calgary ? (
                    <>
                      <a href="mailto:thechaatbarcalgary@gmail.com">
                        thechaatbarcalgary@gmail.com
                      </a>
                      <a href="mailto:info@chaatbar.ca">info@chaatbar.ca</a>
                    </>
                  ) : (
                    <a href="mailto:info@chaatbar.ca">info@chaatbar.ca</a>
                  )}
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
                onClick={() =>
                  router.push(is_calgary ? "/calgary" : "/chestermere")
                }
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
