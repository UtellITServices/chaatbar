import Head from "next/head";

import NextImage from "@/components/image/NextImage";
import { Footer } from "@/layout/footer";
import PageLayout from "@/layout/pageLayout";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./About.module.scss";
import clsx from "clsx";

export default function About() {
  return (
    <PageLayout>
      <Head>
        <title>
          About Best Saag Makki di Rotti Restaurant | Fast Food Point | Desi
          Ghee di Choori Chestermere
        </title>
        <meta
          name="description"
          content="Learn about Chaat Bar featuring the best Saag Makki di Rotti and authentic Desi Ghee di Choori in Chestermere! Everything about the best fast-food restaurant in Chestermere."
        />
      </Head>

      <section className={styles.main}>
        |
        <Container>
          <div className={styles.order}>
            <h2>Discover Our Story</h2>
            <h5>
              Embracing the Essence of Saag Makki di Rotti and Best Indian Fast
              Food in Chestermere
            </h5>
          </div>
        </Container>
      </section>
      <section className={styles.about_us}>
        <Container>
          <Row>
            <Col xl={6}>
              <div className={styles.content_wrapper}>
                <h5>Welcome</h5>
                <h3>Who We Are</h3>
                <h4>
                  A Celebration of Indian Street Food and Canadian Culinary
                  Traditions
                </h4>
                <div className={styles.description}>
                  <p>
                    Chaat Bar is an experienced culinary team driven by a
                    passion for bringing the unique flavors of Indian street
                    dishes to the lively streets of Chestermere. With our deep
                    love for street food like Paneer Kulcha and Paneer Pakora
                    and a commitment to authenticity, we have meticulously
                    crafted a menu that showcases the diverse culinary
                    traditions found in India’s vibrant street fast food scene.
                  </p>
                  <p>
                    With our desi dishes, we transport you to the bustling
                    streets of Mumbai, Kolkata, and Delhi. Streets, where the
                    tantalizing aroma of spices fills the air and every bite is
                    a symphony of flavors. Experience the magic of Indian street
                    food right here in Chestermere with Chaat Bar.
                  </p>
                </div>
                {/* <Link className={styles.main_btn} href={""}>
                  Learn More
                </Link> */}
              </div>
            </Col>
            <Col xl={6}>
              <div className={styles.abRight}>
                <NextImage
                  src="https://img.freepik.com/premium-photo/thanksgiving-decorations_1278144-17623.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                  className={styles.abRL}
                  alt=""
                />
                <NextImage
                  src="https://img.freepik.com/premium-photo/closeup-mutton-chicken-tikka-skewers-white-plate_487509-937.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                  className={styles.abRR}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.cuisin}>
        <div className={styles.cuisinA}>
          <Container>
            <Row className={styles.row}>
              <Col xl={5}>
                <NextImage
                  src="/images/about/about7.jpg"
                  className={styles.cuisinLImg}
                  alt="chefimg"
                />
              </Col>
              <Col xl={6}>
                <div className={styles.cuisinR}>
                  <h5>OUR MISSION</h5>
                  <p className="">
                    To delight food lovers in YYC with the authentic and vibrant
                    flavors of the best Indian street fast food. Grill and Chow
                    serve up a culinary experience that captures the essence of
                    the bustling streets of India. Craving for the Fast food?
                    Want to try something spicy and tasty like Amritsari Kulcha
                    in Chestermere? We’ve got something for everyone!
                  </p>
                </div>
              </Col>
            </Row>
            {/* <div className={styles.cuisin_wrap}>
              <NextImage
                src="https://img.freepik.com/premium-photo/top-view-table-full-delicious-food-composition_1189562-17708.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                alt=""
              />
            </div> */}
          </Container>
        </div>
      </section>
      <section className={styles.rest}>
        <Container className={styles.restP}>
          <Row className={clsx(styles.row, "justify-content-end")}>
            <Col lg={6}>
              <div className={styles.restA}>
                <h5>OUR VISION</h5>
                <p>
                  As a leading Indian restaurant in Chestermere, Chaat Bar aims
                  to become the go-to destination for those craving authentic
                  street food including the best Amritsari Kulcha. Our team is
                  dedicated to one major aspect - creating an immersive dining
                  experience that keeps you coming back for more. Making every
                  visit WOW-worthy!
                </p>
                <p></p>
              </div>
            </Col>
            <Col lg={5} className="text-end">
              <NextImage src="/images/about/about8.jpg" alt="" />
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col lg={5}>
              <NextImage src="/images/about/about9.jpg" alt="" />
            </Col>
            <Col lg={6}>
              <div className={styles.restA}>
                <h5>Contact Best Fast Food Restaurant Chestermere</h5>
                <p className={styles.weighted}>
                  Ready to embark on a gourmet journey? Contact us to reserve a
                  table, inquire about our catering services, or simply share
                  your thoughts. From the best fast food in Chestermere to
                  traditional street favorites, we’re waiting to hear from you!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className={styles.joinSection}>
        <Container>
          <div className={styles.join}>
            <div className={styles.Images}>
              <NextImage
                src="/images/about/about10.jpg"
                className={styles.join1}
                alt=""
              />
              <NextImage
                src="/images/about/about11.jpg"
                className={styles.join2}
                alt=""
              />
              <NextImage
                src="/images/about/about12.jpg"
                className={styles.join3}
                alt=""
              />
            </div>

            <div className={styles.joincontent}>
              <div className={styles.joinSet}>
                <h3>They Did Say:</h3>
                <p>
                  - {`“Food`} is the ingredient that binds us together,
                  transcending borders and cultures, and sparking joy in every{" "}
                  {`bite.”`}
                </p>
                <p>
                  - Kamander Brar, Founder, The Chaat Bar and Parontha Place
                  Place
                </p>
                {/* <Link className={styles.main_btn} href={""}>
                  Learn More
                </Link> */}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <Footer description="Ready to bring the Chaat Bar experience - best Prantha and Vada Pav restaurant - to your community? Get in touch today, and let's explore the possibilities of you being a part of the ever-expanding Chaat Bar Franchise Family!" />
    </PageLayout>
  );
}
