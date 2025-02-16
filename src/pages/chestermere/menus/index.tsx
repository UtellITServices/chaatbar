/* eslint-disable @typescript-eslint/no-unused-vars */
import { Col, Container, Row } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import menuList from "@/utils/constants/menu.json";
import NextImage from "@/components/image/NextImage";
import { Footer } from "@/layout/footer";
import PageLayout from "@/layout/pageLayout";
import Head from "next/head";
import styles from "./menu.module.scss";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase.config";
import { useEffect, useRef, useState } from "react";
import { useStore } from "@/store";
import { ThreeDots } from "react-loader-spinner";

// export async function getServerSideProps() {
//   try {
//     const menus = await fetch(
//       `https://cloudapi.rootficus.com/api/v1/vendor/get_menu`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           "x-api-key": "cus_R6KbnfvuFAzrSy",
//         },
//         body: JSON.stringify({
//           accessKey: process.env.API_KEY,
//         }),
//       }
//     );
//     const menuData = await menus.json();
//     return { props: { menuData } };
//   } catch (err) {
//     return { props: { menuData: null } };
//   }
// }

export default function Menus() {
  const sectionRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { menuList, setMenuList } = useStore((state: any) => state);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  async function getCategoryWithProducts() {
    const categoryCollectionRef = collection(db, "category");
    const menuCollectionRef = collection(db, "menus");

    try {
      setLoading(true);
      const [categoriesSnapshot, menusSnapshot] = await Promise.all([
        getDocs(categoryCollectionRef),
        getDocs(menuCollectionRef),
      ]);
      const categories = categoriesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const menus = menusSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      const result = categories.map((category: any) => ({
        ...category,
        menus: menus
          .filter((menu: any) => menu.category_id === category.id)
          .reverse(),
      }));
      setMenuList(result.reverse());
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCategoryWithProducts();
  }, []);

  return (
    <PageLayout>
      <Head>
        <title>
          Best Fast Food Menu Canada | Amritsari Kulcha and Samosa Chaat
          Chestermere
        </title>
        <meta
          name="description"
          content="Explore Chaat Bar's menu featuring the best Amritsari Kulcha and authentic samosa chaat in Chestermere! A journey of vibrant Indian flavors awaits at the best fast food restaurant in Chestermere, CA."
        />
      </Head>

      <main className={styles.main}>
        <section
          className={styles.banner}
          style={{ backgroundImage: "url(/images/menus/menu_banner.jpg)" }}
        >
          <Container>
            <Row className={styles.row}>
              <Col md={7}>
                <div className={styles.content_wrapper}>
                  <h2>
                    Chaat Bar&apos;s
                    <span>
                      Best Delicious
                      <br /> Fast Food Menu Chestermere
                    </span>
                  </h2>
                  <p>
                    Do you know what makes Chaat Bar the best fast-food
                    restaurant in Chestermere? It’s our menu! Featuring
                    everything from authentic samosa chaat to the best Amritsari
                    kulcha in Alberta, our menu is a culinary journey… A journey
                    that showcases the essence of Indian street food while
                    celebrating Canada’s multicultural flavors.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className={styles.marquee_section}>
          <Marquee className="bg-dark">
            <div className={styles.marq}>
              <h5 className={styles.op5}>Explore Menu Below</h5>
              <div className={styles.dot}>
                <NextImage src="/images/dot.png" className="" alt="" />
              </div>
              <h5 className={styles.op}>Explore Menu Below</h5>
              <div className={styles.dot}>
                <NextImage src="/images/dot.png" className="" alt="" />
              </div>
              <h5 className={styles.op5}>Explore Menu Below</h5>
              <div className={styles.dot}>
                <NextImage src="/images/dot.png" className="" alt="" />
              </div>
              <h5 className={styles.op}>Explore Menu Below</h5>
              <div className={styles.dot}>
                <NextImage src="/images/dot.png" className="" alt="" />
              </div>
              <h5 className={styles.op5}>Explore Menu Below</h5>
              <div className={styles.dot}>
                <NextImage src="/images/dot.png" className="" alt="" />
              </div>
              <h5 className={styles.op}>Explore Menu Below</h5>
              <div className={styles.dot}>
                <NextImage src="/images/dot.png" className="" alt="" />
              </div>
              <h5 className={styles.op5}>Explore Menu Below</h5>
              <div className={styles.dot}>
                <NextImage src="/images/dot.png" className="" alt="" />
              </div>
              <h5 className={styles.op}>Explore Menu Below</h5>
              <div className={styles.dot}>
                <NextImage src="/images/dot.png" className="" alt="" />
              </div>
              <h5 className={styles.op5}>Explore Menu Below</h5>
              <div className={styles.dot}>
                <NextImage src="/images/dot.png" className="" alt="" />
              </div>
              <h5 className={styles.op5}>Explore Menu Below</h5>
              <div className={styles.dot}>
                <NextImage src="/images/dot.png" className="" alt="" />
              </div>
              <h5 className={styles.op}>Explore Menu Below</h5>
              <div className={styles.dot}>
                <NextImage src="/images/dot.png" className="" alt="" />
              </div>
            </div>
          </Marquee>
        </section>

        <section
          ref={sectionRef}
          className={styles.menu}
          style={{ backgroundImage: 'url("/images/menus/paper_bg.png")' }}
        >
          <Container>
            {loading ? (
              <div className="d-flex justify-content-center py-5 position-relative z-3">
                <ThreeDots width="100" color="#378805" />
              </div>
            ) : menuList?.length ? (
              <Tabs>
                <div className={styles.wrapper}>
                  <NextImage
                    className={styles.bgImage}
                    src="/images/menus/decoration.png"
                    alt=""
                  />
                  <div className={styles.categories}>
                    <TabList className={styles.name}>
                      {menuList?.map((item) => (
                        <Tab
                          className={styles.item}
                          selectedClassName={styles.active}
                          key={item?.category_id}
                          onClick={handleScroll}
                        >
                          <span>{item.title}</span>
                        </Tab>
                      ))}
                    </TabList>
                  </div>

                  <div className={styles.sub_categories}>
                    {menuList?.map((item) => (
                      <TabPanel key={item?.category_id}>
                        <div className={styles.heading}>
                          <h1>{item?.title}</h1>
                          <h3>{item.description}</h3>
                        </div>
                        {item?.menus?.map((subItem) => (
                          <div
                            key={subItem?.id}
                            className={styles.inner_wrapper}
                          >
                            <div className={styles.list}>
                              <div className={styles.list_wrapper}>
                                <h3>{subItem?.title}</h3>
                                <div className={styles.item_divider}></div>
                                <h4>${subItem?.price}</h4>
                              </div>

                              {subItem?.add_on?.map((addOn, add) => (
                                <div className={styles.add_on} key={add}>
                                  <h3>{addOn?.title} (V)</h3>
                                  <div className={styles.item_divider}></div>
                                  <h4>{addOn?.price}</h4>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </TabPanel>
                    ))}
                  </div>
                </div>
              </Tabs>
            ) : (
              <div className="text-center py-5" style={{ color: "#fff" }}>
                <h1>No data found</h1>
              </div>
            )}
          </Container>
        </section>
        <section
          className={styles.bg_footer}
          style={{ backgroundImage: "url(/images/menus/menu_banner.jpg)" }}
        ></section>
      </main>
      <Footer
        title="Contact Details of Best Fast Food Restaurant Chestermere City"
        description="Ready to bring the Chaat Bar experience to your community in or around Chestermere? Get in touch today. Let's discuss how you can become part of the growing Chaat Bar community - best Amritsari kulcha and samosa chaat restaurant!"
      />
    </PageLayout>
  );
}
