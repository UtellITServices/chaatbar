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
          About Best Prantha Restaurant | Fast Food Calgary | Top Desserts
        </title>
        <meta
          name="description"
          content="Learn about Chaat Bar featuring the best Prantha and authentic Desserts in NE Calgary! Everything about the best fast-food restaurant in NE Calgary!"
        />
      </Head>

      <section className={styles.main}>
        |
        <Container>
          <div className={styles.order}>
            <h2>Discover Our Story</h2>
            <h5>
              Celebrating the Spirit of Samosa Chat and Best Indian Fast Food in
              Northeast Calgary
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
                  Blending Indian Street Food Heritage with Canadian Culinary
                  Charm
                </h4>
                <div className={styles.description}>
                  <p>
                    Chaat Bar is a dedicated culinary team fueled by a passion
                    for bringing the unique flavors of Indian street dishes to
                    the lively streets of NE Calgary. With our deep love for
                    iconic dishes like Prantha and Pakoda and a commitment to
                    authenticity, we have meticulously crafted a menu that
                    showcases the diverse culinary traditions found in India’s
                    vibrant street fast food scene.
                  </p>
                  <p>
                    With our desi dishes, we whisk you away to the bustling
                    streets of Mumbai, Kolkata, and Delhi. Streets… Streets
                    where the enticing aroma of spices fills the air and every
                    bite offers a melody of bold savors. Experience the magic of
                    Indian street food right here in NE Calgary with Chaat Bar.
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
                  src="/images/chaat4.png"
                  className={styles.abRL}
                  alt=""
                />
                <NextImage
                  src="/images/chaat3.png"
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
            <Row className={clsx(styles.row)}>
              <Col xl={5}>
                <NextImage
                  src="/images/food/food3.jpg"
                  className={styles.cuisinLImg}
                  alt="chefimg"
                />
              </Col>
              <Col xl={6}>
                <div className={styles.cuisinR}>
                  <h5>OUR MISSION</h5>
                  <p className="">
                    To delight food lovers in YYC with the genuine and vibrant
                    tastes of the best Indian street fast food. Grill and Chow
                    serve up a culinary experience that captures the essence of
                    the bustling streets of India. Whether you’re looking for
                    the Fast Food in NE Calgary, we’ve got something to satisfy
                    every craving!
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
                  As a leading Indian restaurant, Chaat Bar aims to become the
                  go-to destination for those craving authentic street food
                  including the best Amritsari Kulcha in Calgary. We strive to
                  offer a vivid and immersive dining experience that leaves a
                  lasting impression, making every visit WOW-worthy!
                </p>
                <p></p>
              </div>
            </Col>
            <Col lg={5} className="text-end">
              <NextImage 
               src="/images/staff/staff2.jpg" alt="" />
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col lg={5}>
              <NextImage src="/images/food/food2.jpg" alt="" />
            </Col>
            <Col lg={6}>
              <div className={styles.restA}>
                <h5>Contact Best Fast Food Restaurant Calgary</h5>
                <p className={styles.weighted}>
                  Eager to embark on a gourmet journey? Contact us to reserve a
                  table, inquire about our catering services, or simply share
                  your thoughts. From the best fast food in Calgary to beloved
                  street food classics, we’re waiting to hear from you!
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
                src="/images/about/about4.jpg"
                className={styles.join1}
                alt=""
              />
              <NextImage
                src="/images/about/about2.jpg"
                className={styles.join2}
                alt=""
              />
              <NextImage
                src="/images/about/about3.jpg"
                className={styles.join3}
                alt=""
              />
            </div>

            <div className={styles.joincontent}>
              <div className={styles.joinSet}>
                <h5>They Did Say:</h5>
                <p>
                  {`“Food`} is the ingredient that binds us together,
                  transcending borders and cultures, and sparking joy in every{" "}
                  {`bite.”`}
                  <br />- Kamander Brar, Founder, The Chaat Bar and Parontha
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
      <Footer />
    </PageLayout>
  );
}
