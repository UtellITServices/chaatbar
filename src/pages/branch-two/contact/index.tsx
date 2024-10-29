import NextImage from "@/components/image/NextImage";
import { Footer } from "@/layout/footer";
import PageLayout from "@/layout/pageLayout";
import Head from "next/head";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <PageLayout>
      <Head>
        <title>Contact</title>
      </Head>

      <section className={styles.contact}>
        <Container>
          <div className={styles.header}>
            <h2>Get in Touch </h2>
            <p>
              Fill out the form below and our friendly team will get back to you
              promptly. Got a reservation request? A catering inquiry? Or simply
              want to share your experience? No problem! We are here to listen
              and ensure your satisfaction.
            </p>
            <p>
              Chaat Bar, YYC strives to create a welcoming environment for all
              our guests in New York. Your feedback is critical to help us
              improve and deliver exceptional service.
            </p>
          </div>
          <Row>
            <Col lg={5}>
              <NextImage
                src="https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151431701.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                className={styles.conSocial}
                alt={""}
              />

              <div className={styles.social}>
                <h5>Follow us on</h5>
                <div className={styles.img_social}>
                  <a href="#">
                    <NextImage
                      src="https://iqbal-sweets.vercel.app/images/facebook.png"
                      alt={""}
                    />
                  </a>
                  <a href="#">
                    <NextImage
                      src="https://iqbal-sweets.vercel.app/images/twitter.png"
                      alt={""}
                    />
                  </a>
                  <a href="#">
                    <NextImage
                      src="https://iqbal-sweets.vercel.app/images/instagram.png"
                      alt={""}
                    />
                  </a>
                  <a href="#">
                    <NextImage
                      src="https://iqbal-sweets.vercel.app/images/linkin.png"
                      alt={""}
                    />
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <Row className={styles.form}>
                <Col lg={6}>
                  <h5>Name</h5>
                  <input type="text" />
                </Col>
                <Col lg={6}>
                  <h5>Email</h5>
                  <input type="email" />
                </Col>
                <Col lg={6}>
                  <h5>Phone</h5>
                  <input type="tel" />
                </Col>
                <Col lg={6}>
                  <h5>Reason</h5>
                  <input type="email" />
                </Col>
                <Col lg={12}>
                  <h5>Leave Us A Message</h5>
                  <textarea rows={6}></textarea>
                </Col>
                <Link className={styles.main_btn} href={""}>
                  Contact Us
                </Link>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.support}>
        <Container className={styles.container}>
          <NextImage
            src="https://img.freepik.com/free-photo/bowl-homemade-salsa_23-2148181585.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
            className={styles.supporting}
            alt={""}
          />
          <div className={styles.supprtFeature}>
            <div className={styles.sales}>
              <NextImage
                src="https://iqbal-sweets.vercel.app/images/sales.png"
                alt={""}
              />
              <h5>Sales & business</h5>
              <h6>business@chatbar.com</h6>
            </div>
            <div className={styles.sales}>
              <NextImage
                src="https://iqbal-sweets.vercel.app/images/person.png"
                alt={""}
              />
              <h5>Partner program</h5>
              <h6>partner@chatbar.com</h6>
            </div>
            <div className={styles.sales}>
              <NextImage
                src="https://iqbal-sweets.vercel.app/images/help.png"
                alt={""}
              />
              <h5>Help & support</h5>
              <h6>help@chatbar.com</h6>
            </div>
          </div>
        </Container>
      </section>
      {/* <section className={styles.Join}>
        <Container>
          <h5>Join US</h5>
          <Row className="justify-content-between align-items-center">
            <Col lg={6}>
              <h3>A Glimpse Inside Iqbal Sweets </h3>
            </Col>
            <Col lg={6}>
              <div className={styles.JoinR}>
                <Link className={styles.main_btn} href={""}>
                  JOIN US
                </Link>
              </div>
            </Col>
          </Row>
          <Row className={styles.JoinDown}>
            <Col xl={6}>
              <NextImage
                src="https://img.freepik.com/premium-photo/delicious-indian-chaat-photo_1036998-295375.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                alt={""}
              />
              <p>
                Let the pictures take you on a journey! Step inside our inviting
                dining space, where warm lighting and cozy seating create a
                welcoming atmosphere. Watch our talented chef in action,
                crafting culinary delights with fresh, local ingredients that
                will have you saying &apos;ooh la la!
              </p>
              <p>
                We can&apos;t wait to share our delicious dishes and warm
                Canadian hospitality with you.
              </p>
            </Col>
            <Col xl={6}>
              <NextImage
                src="https://img.freepik.com/premium-photo/tangy-sev-puri-chaat-with-onion-photo_1036998-294976.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                className={styles.Serv2}
                alt={""}
              />
              <NextImage
                src="https://img.freepik.com/premium-photo/flavorful-kala-chana-chaat-golgappa-white-backgr-golgappa-picture-photography_1020697-447901.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                className={styles.Serv3}
                alt={""}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.joinSection}>
        <Container>
          <div className={styles.join}>
            <div className={styles.Images}>
              <NextImage
                src="https://img.freepik.com/free-photo/dinner-table-with-foods-soft-drinks-restaurant_114579-3319.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                className={styles.join1}
                alt={""}
              />
              <NextImage
                src="https://img.freepik.com/premium-photo/close-up-restaurant-table-with-delicious-meal-surrounded-by-plants-rattan-lights_885831-159791.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                className={styles.join2}
                alt={""}
              />
            </div>

            <div className={styles.joincontent}>
              <div className={styles.joinSet}>
               
                <h3>Join our Mailing List</h3>
                <p>
                  Stay connected! Join our email list to get the latest updates
                  on new menu items, special events, and exclusive offers.
                </p>
                <Link className={styles.main_btn} href={""}>
                  JOIN TODAY
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section> */}

      <Footer />
    </PageLayout>
  );
}
