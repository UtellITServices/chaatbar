import NextImage from "@/components/image/NextImage";
import styles from "./Franchises.module.scss";
import Head from "next/head";
import Link from "next/link";
import { Container } from "react-bootstrap";

export default function Franchises() {
  return (
    <>
      <Head>
        <title>Chatbar</title>
      </Head>

      <main className={styles.welcomePage}>
        <section className={styles.branchs}>
          <Container>
            <div className={styles.wrapper}>
              <div className={styles.logo}>
                <Link href="/">
                  <NextImage src="/images/logo.png" alt="" />
                </Link>
              </div>
              <h1>Welcome to Chatbar </h1>
              <h2>Select Resturant </h2>
              <div className={styles.list}>
                <div className={styles.branch}>
                  <Link href="/">
                    <NextImage
                      src="https://img.freepik.com/free-photo/restaurant-private-room-with-table-12-blue-chairs-white-brick-walls-wide-window-paintings_140725-8451.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                      alt=""
                    />
                  </Link>
                  <h3>Country Hills</h3>
                  <p>
                    6004 Country Hills Blvd NE unit 2030, Calgary, AB T3N 1A8
                  </p>
                </div>
                <div className={styles.branch}>
                  <Link href="/branch-two/home">
                    <NextImage
                      src="https://img.freepik.com/free-photo/restaurant-private-room-with-table-14-persons-wooden-ceiling-brick-walls-fireplace_140725-8452.jpg?uid=R115693902&ga=GA1.1.61680293.1721194367&semt=ais_hybrid"
                      alt=""
                    />
                  </Link>
                  <h3>Hills Blvd</h3>
                  <p>
                    6004 Country Hills Blvd NE unit 2030, Calgary, AB T3N 1A8
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}
