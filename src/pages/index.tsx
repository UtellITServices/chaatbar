/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import { Container } from "react-bootstrap";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.page}>
      <Container>
        <div className={styles.page_inner}>
          {/* <h1>The Chaatbar</h1> */}
          <img className={styles.logo} src="/images/logo.png" alt="" />
          <div className={styles.box_wrap}>
            <div
              className={styles.card}
              onClick={() => router.push("/calgary")}
            >
              <div className={styles.image_wrap}>
                <img src="/images/rest.jpg" alt="" />
              </div>
              <div className={styles.content}>
                <h5>The Chaatbar Calgary</h5>
                <p>
                  6004 Country Hills Blvd NE unit 2030, Calgary, AB T3N 1A8,
                  Canada
                </p>
                <p className="mt-2">
                  <b>Phone number:</b> +1 403-460-0405
                </p>
              </div>
            </div>
            <div
              className={styles.card}
              onClick={() => router.push("/chestermere")}
            >
              <div className={styles.image_wrap}>
                <img src="/images/food-sold-streets.jpg" alt="" />
              </div>
              <div className={styles.content}>
                <h5>The Chaatbar Chestermere</h5>
                <p>320 W Creek Dr, Chestermere, AB T1X 0B4, Canada</p>
                <p className="mt-2">
                  <b>Phone number:</b> +1 825-540-1590
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
