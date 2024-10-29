import InputField from "@/components/elements/input";
import NextImage from "@/components/image/NextImage";
import { Footer } from "@/layout/footer";
import PageLayout from "@/layout/pageLayout";
import { useFormik } from "formik";
import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./franchises.module.scss";

const Franchise = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    onSubmit: () => {},
  });

  return (
    <PageLayout>
      <Head>
        <title>
          Best Food Menu in SW Calgary | Explore Food Menu of the Chaat Bar
        </title>
        <meta
          name="description"
          content="Chaat Bar’s menu features delicious regional specialties and comfort food classics made with fresh ingredients. Explore our menu & find your favorite dish! "
        />
      </Head>

      <main className={styles.main}>
        <section
          className={styles.banner}
          style={{ backgroundImage: "url(/images/menus/banner2.png)" }}
        >
          <Container>
            <div className={styles.content_wrapper}>
              <h1>Franchises</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                recusandae itaque esse doloribus.
              </p>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div className={styles.section_wrap}>
              <Row className="g-5">
                <Col lg={7}>
                  <div className={styles.content_box}>
                    <h2>
                      Unlock Success with <span>Chaat Bar&apos;s</span>{" "}
                      Franchise!
                    </h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magnam culpa qui id laboriosam, natus ut laudantium eaque
                      dicta neque non, aspernatur quos recusandae eveniet dolore
                      doloremque minus. Amet, repudiandae dolor?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magnam culpa qui id laboriosam, natus ut laudantium eaque
                      dicta neque non, aspernatur quos recusandae eveniet dolore
                      doloremque minus. Amet, repudiandae dolor?
                    </p>
                    <Row className={`gy-4 ${styles.cards_wrap}`}>
                      <Col md={4} sm={6}>
                        <div className={styles.card}>
                          <NextImage src="/images/franchise/img3.png" alt="" />
                          <p>
                            Proven Success Benefit from a proven track record of
                            franchise success.
                          </p>
                        </div>
                      </Col>
                      <Col md={4} sm={6}>
                        <div className={styles.card}>
                          <NextImage src="/images/franchise/img2.png" alt="" />
                          <p>
                            Training & Support Receive comprehensive training
                            and ongoing support.
                          </p>
                        </div>
                      </Col>
                      <Col md={4} sm={6}>
                        <div className={styles.card}>
                          <NextImage src="/images/franchise/img1.png" alt="" />
                          <p>
                            Growing Market Tap into a flourishing market for
                            specialty beverages.
                          </p>
                        </div>
                      </Col>
                    </Row>

                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Magnam culpa qui id laboriosam.
                    </p>
                  </div>
                </Col>
                <Col lg={5}>
                  <div className={styles.form_box}>
                    <h3>Get started with us</h3>
                    <div className={styles.form_fields}>
                      <InputField
                        label="Name"
                        name="name"
                        formik={formik}
                        placeholder="Enter name"
                      />
                      <InputField
                        label="Email"
                        name="email"
                        formik={formik}
                        placeholder="Enter email"
                      />
                      <InputField
                        label="Phone"
                        name="phone"
                        formik={formik}
                        placeholder="Enter phone number"
                      />
                      <InputField
                        as="textarea"
                        multiple
                        rows={5}
                        label="Message"
                        name="message"
                        formik={formik}
                        placeholder="Enter messages"
                      />
                      <div className={styles.submit}>
                        <button className="btn btn-primary">SUBMIT</button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </PageLayout>
  );
};

export default Franchise;
