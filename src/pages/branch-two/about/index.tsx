import Head from "next/head";

import NextImage from "@/components/image/NextImage";
import { Footer } from "@/layout/footer";
import PageLayout from "@/layout/pageLayout";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./About.module.scss";

export default function About() {
  return (
    <PageLayout>
      <Head>
        <title>About Us</title>
      </Head>

      <section className={styles.main}>
        |
        <Container>
          <div className={styles.order}>
            <h2>Discover Our Story</h2>
            <h5>Embracing the Essence of Indian Street Food in YYC</h5>
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
                <h4>A Celebration of Canadian Culinary Traditions</h4>
                <div className={styles.description}>
                  <p>
                    Chaat Bar is an experienced culinary team driven by a
                    passion for bringing the unique flavors of Indian street
                    dishes to the lively streets of YYC. With our deep love for
                    street food and a commitment to authenticity, we have
                    meticulously crafted a menu that showcases the diverse
                    culinary traditions found in {`India’s`} vibrant street food
                    scene.
                  </p>
                  <p>
                    With our desi dishes, we can transport you to the bustling
                    streets of Mumbai, Kolkata, and Delhi. Streets, where the
                    tantalising aroma of spices fills the air and every bite is
                    a symphony of flavours. Experience the magic of Indian
                    street food right here in the Big Apple with Chaat Bar
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
                  src="https://img.freepik.com/free-photo/life-style_1122-1996.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                  className={styles.cuisinLImg}
                  alt="chefimg"
                />
              </Col>
              <Col xl={7}>
                <Col xxl={10}>
                  <div className={styles.cuisinR}>
                    <h5>OUR MISSION </h5>
                    <p className="">
                      To delight food lovers in YYC with the authentic and
                      vibrant flavours of Indian street food. Grill and Chow
                      serves up a culinary experience that captures the essence
                      of the bustling streets of India.
                    </p>
                  </div>
                </Col>
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
          <Row className={styles.row}>
            <Col lg={6}>
              <div className={styles.restA}>
                <h5>OUR VISION </h5>

                <p>
                  As a leading Indian restaurant in Calgary, Chaat Bar wants to
                  become a go-to destination for those craving a taste of
                  {"India’s"} diverse street food. We want to create a vibrant
                  and immersive dining experience that leaves a lasting
                  impression on the minds of our customers, making them say WOW!
                </p>
                <p></p>
              </div>
            </Col>
            <Col lg={6}>
              <NextImage
                src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141350.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                alt=""
              />
            </Col>
          </Row>
          <Row className={styles.row}>
            <Col lg={6}>
              <NextImage
                src="https://img.freepik.com/free-photo/side-view-rice-garnish-with-fried-onion-carrot-greens-chili-pepper-table_141793-5069.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                alt=""
              />
            </Col>
            <Col lg={6}>
              <div className={styles.restA}>
                <h5>Contact Now</h5>
                <p className={styles.weighted}>
                  Ready to embark on a gourmet journey? Contact us to reserve a
                  table, inquire about our catering services or simply share
                  your thoughts. {"We’re"} waiting to hear from you!
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
                src="https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151431710.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                className={styles.join1}
                alt=""
              />
              <NextImage
                src="https://img.freepik.com/free-photo/pre-prepared-food-showcasing-ready-eat-delicious-meals-go_23-2151246080.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                className={styles.join2}
                alt=""
              />
              <NextImage
                src="https://img.freepik.com/free-photo/high-angle-indian-food-assortment_23-2148747704.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                className={styles.join3}
                alt=""
              />
            </div>

            <div className={styles.joincontent}>
              <div className={styles.joinSet}>
                <h5>They did said:</h5>
                <p>
                  &quot;Food is the ingredient that binds us together,
                  transcending borders and cultures, and sparking joy in every
                  bite.&quot; Kamander Brar, Founder, The Chaat Bar and Parontha
                  Place&quot;
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
