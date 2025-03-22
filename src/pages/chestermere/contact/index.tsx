import InputField from "@/components/elements/input";
import NextImage from "@/components/image/NextImage";
import { Footer } from "@/layout/footer";
import PageLayout from "@/layout/pageLayout";
import { contactYupSchema } from "@/validationSchema/contact";
import { useFormik } from "formik";
import Head from "next/head";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaRegHandshake } from "react-icons/fa";
import { MdOutlineBusinessCenter, MdSupportAgent } from "react-icons/md";
import { toast } from "sonner";
import styles from "./Contact.module.scss";

export default function Contact() {
  const [loading, setLoading] = useState(false);

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
      const res = await fetch("/api/thanks", {
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
        body: JSON.stringify(values),
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

  return (
    <PageLayout>
      <Head>
        <title>
        Contact Best Amritsari Kulcha Restaurant Chestermere | Samosa Chaat Fast Food Point
        </title>
        <meta
          name="description"
          content="Contact Chaat Bar - best fast food restaurant where guests can enjoy traditional Indian flavors! Give feedback on best Amritsari kulcha and samosa chaat in Chestermere, Alberta."
        />
      </Head>

      <section className={styles.contact}>
        <Container>
          <div className={styles.header}>
            <h2>
              Get in Touch With Top Fast Food Point in Chestermere, Alberta{" "}
            </h2>
            <h5>With Top Fast Food Point in Chestermere, Alberta</h5>
            <p>
              Got questions about our menu featuring the best Paneer Tikka or
              the most authentic Pakora's Chestermere has to offer? Want to make
              a reservation or inquire about catering? Fill out the form below,
              and our friendly team will get back to you promptly!
            </p>
            <p>
              Chaat Bar prides itself on offering a harmonious blend of
              authentic Indian street food flavors and quick service in
              Chestermere. Don’t forget to leave feedback. Your thoughts help us
              grow!
            </p>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.image_box}>
              <NextImage
                src="/images/contact/contact.jpg"
                alt={""}
              />

              <div className={styles.social}>
                <h5>Follow us on</h5>
                <div className={styles.img_social}>
                  <a href="https://www.facebook.com/thechaatbarcalgary/">
                    <NextImage
                      src="https://iqbal-sweets.vercel.app/images/facebook.png"
                      alt={""}
                    />
                  </a>
                  <a href="https://www.tiktok.com/discover/chat-bar-in-calgary">
                    <NextImage src="/images/tiktok.png" alt={""} />
                  </a>
                  <a href="https://www.instagram.com/thechaatbarcalgary/">
                    <NextImage
                      src="https://iqbal-sweets.vercel.app/images/instagram.png"
                      alt={""}
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.form_box}>
              <form onSubmit={formik.handleSubmit}>
                <Container fluid>
                  <Row className={styles.form}>
                    <Col lg={6}>
                      <InputField
                        label="Name"
                        formik={formik}
                        name="name"
                        placeholder="Enter name"
                      />
                    </Col>
                    <Col lg={6}>
                      <InputField
                        label="Email"
                        formik={formik}
                        name="email"
                        placeholder="Enter email"
                      />
                    </Col>
                    <Col lg={6}>
                      <InputField
                        isNumber
                        label="Phone number"
                        formik={formik}
                        name="phone_number"
                        placeholder="Enter phone number"
                      />
                    </Col>
                    <Col lg={12}>
                      <InputField
                        as="textarea"
                        rows={6}
                        label="Message"
                        formik={formik}
                        name="message"
                        placeholder="Enter message"
                      />
                    </Col>
                    <div className={styles.submit}>
                      <button
                        className={styles.main_btn}
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "sending..." : "Contact Us"}
                      </button>
                    </div>
                  </Row>
                </Container>
              </form>
            </div>
          </div>
        </Container>
      </section>
      <section
        className={styles.support}
        style={{ backgroundImage: "url('/images/contact/support.jpeg')" }}
      >
        <Container>
          <div className={styles.support_feature}>
            <div className={styles.sales}>
              <div className={styles.icon}>
                <MdOutlineBusinessCenter />
              </div>
              <h5>Sales & Business</h5>
              <h6>business@chatbar.com</h6>
            </div>
            <div className={styles.sales}>
              <div className={styles.icon}>
                <FaRegHandshake />
              </div>
              <h5>Partner Program</h5>
              <h6>partner@chatbar.com</h6>
            </div>
            <div className={styles.sales}>
              <div className={styles.icon}>
                <MdSupportAgent />
              </div>
              <h5>Help & Support</h5>
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

      <Footer
        title="Other Ways to Contact Best Fast Food Restaurant Chestermere"
        description="Ready to bring the Chaat Bar experience to your community in or around Chestermere? Reach out now and discover how you can become a part of our ever-growing Chaat Bar Franchise Family - the best Pav Bhaji and Black Channa Chaat restaurant!"
      />
    </PageLayout>
  );
}
