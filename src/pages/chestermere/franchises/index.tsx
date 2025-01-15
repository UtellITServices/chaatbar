import InputField from "@/components/elements/input";
import NextImage from "@/components/image/NextImage";
import { Footer } from "@/layout/footer";
import PageLayout from "@/layout/pageLayout";
import { contactYupSchema } from "@/validationSchema/contact";
import { useFormik } from "formik";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { toast } from "sonner";
import styles from "./franchises.module.scss";

const Franchise = () => {
  const [loading, setLoading] = useState(false);

  const [activeStep, setActiveStep] = useState(1);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone_number: "",
      message: "",
    },
    validationSchema: contactYupSchema,
    onSubmit: (values) => {
      handleSubmit(values);
      sendEmail(values);
    },
  });

  const sendEmail = async (values) => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/franchise", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        "There was an error sending your message. Please try again later."
      );
    }
    setLoading(false);
  };

  const handleSubmit = async (values) => {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetch("/api/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          is_franchise: true,
        }),
      });
      if (res.ok) {
        formik.resetForm();
        toast.success("Form submitted successfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        "There was an error sending your message. Please try again later."
      );
    }
    setLoading(false);
  };

  const steps_data = [
    {
      text: "Submit the Form",
    },
    {
      text: "Receive the Franchise Application",
    },
    {
      text: "Complete and Return the Form",
    },
    {
      text: "Let’s Grow Together",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev < steps_data.length ? prev + 1 : 1));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageLayout>
      <Head>
        <title>
          Buy Best Fast Food Franchise Calgary | Amritsari Kulcha and Samosa
          Chaat Point Chestermere
        </title>
        <meta
          name="description"
          content="Everything about buying best fast food restaurant franchise in Chemstere and NE Calgary! Learn intricate details about owning best Amritsari Kulcha and Samosa chaat branch in Calgary."
        />
      </Head>

      <main className={styles.main}>
        <section
          className={styles.banner}
          style={{ backgroundImage: "url(/images/menus/banner2.png)" }}
        >
          <Container>
            <div className={styles.content_wrapper}>
              <h1>
                Purchase Chaat Bar Franchise - Best Fast Food Point Calgary
              </h1>
              <p>
                Turn your passion for great food into a thriving business by
                becoming part of the Chaat Bar family. Whether you want to offer
                the best Amritsari kulcha or authentic samosa chaat in
                Chestermere or in NE Calgary, we’ll allow you to bring a taste
                of Indian streets to your local streets!
              </p>
            </div>
          </Container>
        </section>
        <section>
          <Container>
            <div className={styles.section_wrap}>
              <Row className="g-md-5">
                <Col lg={7}>
                  <div className={styles.content_box}>
                    <h2>
                      Ready to Start Your <span>Chaat Bar</span> Franchise
                      Journey?
                    </h2>
                    <p>
                      Your journey to owning a Chaat Bar franchise starts here!
                      Begin by filling out the form below, and we'll send a
                      comprehensive PDF of the franchise application straight to
                      your mailbox. This document contains everything you need
                      to know about the Chaat Bar family. For example, our
                      commitment to serving the best fast food in Chestermere
                      and NE Calgary and how you can join us.
                    </p>
                    <p>
                      Once you've completed the application, send it back via
                      email using the address listed above. We're here to assist
                      you in turning your love for good food into a thriving
                      business. Let's make your dream of owning a successful,
                      vibrant Chaat Bar franchise - where you can offer delights
                      like Amritsari kulcha and samosa - a reality!
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
                    <h4>
                      Why Join Best Fast Food Franchise in Chestermere and NE
                      Calgary?
                    </h4>
                    <div className={styles.reason_step}>
                      <h6>Proven Business Model</h6>
                      <p>
                        Tap into a well-established, successful franchise model
                        with a loyal customer base and increasing demand.
                      </p>
                    </div>
                    <div className={styles.reason_step}>
                      <h6>Comprehensive Support & Training</h6>
                      <p>
                        From choosing the perfect location to the grand opening,
                        we provide hands-on training and operational support
                        every step of the way.
                      </p>
                    </div>
                    <div className={styles.reason_step}>
                      <h6>Unique & High-Demand Menu</h6>
                      <p>
                        Chaat Bar features a unique menu including the best
                        Amritsari Kulcha in Calgary and other Indian street food
                        favorites. All prepared for today’s food lovers.
                      </p>
                    </div>

                    <p>
                      At Chaat Bar, we are committed to preparing you for
                      colossal victory in it. Whether you want marketing help,
                      all-around training, operational support, or anything
                      else, the attitude and work ethic of our team is aimed at
                      making your experience as a Chaat Bar franchisee in NE
                      Calgary smooth and rewarding.
                    </p>
                    <p>
                      If you’re ready to be part of something unique and
                      impactful, connect with us today to explore the exciting
                      opportunity of owning a Chaat Bar restaurant - best fast
                      food franchise in Chestermere and NE Calgary!
                    </p>
                  </div>
                </Col>
                <Col lg={5}>
                  <div className={styles.right_wrap}>
                    <div className={styles.form_box}>
                      <h3>Get started with us</h3>
                      <form onSubmit={formik.handleSubmit}>
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
                            name="phone_number"
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
                            <button
                              className="btn btn-primary"
                              disabled={loading}
                            >
                              {loading ? "Sending..." : "SUBMIT"}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className={styles.step_section}>
                      <Container>
                        <div className={styles.process_steps}>
                          {steps_data.map((item, index) => (
                            <div
                              className={`${styles.step} ${
                                activeStep < index + 1 ? null : styles.active
                              }`}
                              key={index}
                            >
                              <h5>{index + 1}</h5>
                              <p>{item.text}</p>
                            </div>
                          ))}
                        </div>
                      </Container>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </section>
      </main>

      <Footer
        title="Contact Best Fast Food Restaurant in NE Calgary"
        description="Ready to bring the Chaat Bar experience to your community in or around Chestermere and NE Calgary? Get in touch today and let's explore the possibilities of you being a part of the ever-expanding Chaat Bar Franchise Family - the best Amritsari kulcha and samosa chaat restaurant!"
      />
    </PageLayout>
  );
};

export default Franchise;
