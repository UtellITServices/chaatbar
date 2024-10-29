import { Container } from "react-bootstrap";
import styles from "./CommingSoon.module.scss";
import NextImage from "@/components/image/NextImage";
export default function CommingSoon() {
  return (
    <section className={styles.commingSoon}>
      <Container className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.logo}>
            <NextImage src="/images/logo23.png" alt="" />
          </div>
          <h2>Something Exciting is </h2>

          <NextImage
            className={styles.comminImage}
            src="/images/comming.png"
            alt=""
          />

          <p>
            We’re working hard to bring you an incredible experience. Stay tuned
            for something amazing!
          </p>
        </div>
      </Container>
    </section>
  );
}
