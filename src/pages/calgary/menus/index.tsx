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
import { useEffect, useState } from "react";
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
  const [loading, setLoading] = useState(false);
  const { menuList, setMenuList } = useStore((state: any) => state);

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
        menus: menus.filter((menu: any) => menu.category_id === category.id),
      }));
      setMenuList(result);
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
          Best Fast Food Menu NE Calgary | Amritsari Kulcha Chestermere | Samosa
          Chaat NE
        </title>
        <meta
          name="description"
          content="Explore Chaat Bar's menu featuring the best Amritsari Kulcha in Chestermere and authentic samosa chaat in NE Calgary! A journey of vibrant Indian flavors awaits at the best fast food restaurant in NE Calgary."
        />
      </Head>

      <main className={styles.main}>
        <section
          className={styles.banner}
          style={{ backgroundImage: "url(/images/menus/banner2.png)" }}
        >
          <Container>
            <Row className={styles.row}>
              <Col xl={5} md={6}>
                <div className={styles.content_wrapper}>
                  <h2>
                    Chaat Bar&apos;s
                    <span>
                      Best Delicious
                      <br /> Fast Food Menu Calgary
                    </span>
                  </h2>
                  <p>
                    Do you know what makes Chaat Bar the best fast-food
                    restaurant in Chestermere and NE Calgary? It’s our menu!
                    Featuring everything from authentic samosa chaat to the best
                    Amritsari kulcha in Calgary, it will take you on a
                    delightful adventure through Canada’s culinary landscape. It
                    also features regional specialties you’ll love.
                  </p>
                </div>
              </Col>
              {/* <Col xl={7} md={6}>
                <div className={styles.image_wrapper}>
                  <NextImage src="/images/menus/menu_banner.png" alt="" />
                </div>
              </Col> */}
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
          className={styles.menu}
          style={{ backgroundImage: 'url("/images/menus/paper_bg.png")' }}
        >
          <Container>
            {loading ? (
              <div className="d-flex justify-content-center py-5">
                <ThreeDots width="80" color="var(--primary)" />
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
                    {/* <div className={styles.img}>
                      <NextImage src="/images/menu-headding.svg" alt="" />
                    </div> */}
                    <TabList className={styles.name}>
                      {menuList?.map((item) => (
                        <Tab
                          className={styles.item}
                          selectedClassName={styles.active}
                          key={item?.category_id}
                        >
                          <span>{item.title}</span>
                        </Tab>
                      ))}
                      {/* <li className={styles.item}>
                    <span>SMALLS + SHARING</span>
                  </li> */}
                    </TabList>
                  </div>

                  <div className={styles.sub_categories}>
                    {menuList?.map((item) => (
                      <TabPanel key={item?.category_id}>
                        {/* <div className={styles.img}>
                          <NextImage src="/images/image-2.png" alt="" />
                        </div> */}
                        {/* <div className={styles.divider}></div> */}
                        <div className={styles.heading}>
                          <h1>{item?.title}</h1>
                          <h3>{item.description}</h3>
                        </div>
                        {item?.menus?.map((subItem) => (
                          <div
                            key={subItem?.id}
                            className={styles.inner_wrapper}
                          >
                            {/* <h2>{subItem?.title}</h2> */}
                            {/* <p>{subItem?.description}</p>
                            {subItem?.data?.map((listItem, j) => (
                            ))} */}
                            <div className={styles.list}>
                              <div className={styles.list_wrapper}>
                                <h3>{subItem?.title}</h3>
                                <div className={styles.item_divider}></div>
                                <h4>${subItem?.price}</h4>
                              </div>
                              {/* {!!subItem?.description && (
                                <h5>{subItem?.description}</h5>
                              )} */}

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
          style={{ backgroundImage: "url(/images/menus/banner2.png)" }}
        ></section>
      </main>
      {/* <section className={styles.main}>
        |
        <Container>
          <div className={styles.order}>
            <h2>Menus</h2>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
              diam vitae velit bibendum elementum eget non vivamus volutpat odio
              cras vestibulum purus aliquam.
            </h5>
          </div>
        </Container>
      </section>
      <section className={styles.menus}>
        <Container>
          <Row className={styles.menuRow}>
            <Col xl={3} md={4}>
              <NextImage src="/images/dish1.png" />
              <div className={styles.content}>
                <h4>SMALLS + SHARING</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing adipiscing
                  adipiscing.
                </p>
                <h5>
                  <a href="#">View Menu</a>
                </h5>
              </div>
            </Col>
            <Col xl={3} md={4}>
              <NextImage src="/images/dish2.png" />
              <div className={styles.content}>
                <h4>SUSHI</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing adipiscing
                  adipiscing.
                </p>
                <h5>
                  <a href="#">View Menu</a>
                </h5>
              </div>
            </Col>
            <Col xl={3} md={4}>
              <NextImage src="/images/dish3.png" />
              <div className={styles.content}>
                <h4>SALADS</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing adipiscing
                  adipiscing.
                </p>
                <h5>
                  <a href="#">View Menu</a>
                </h5>
              </div>
            </Col>
            <Col xl={3} md={4}>
              <NextImage src="/images/dish4.png" />
              <div className={styles.content}>
                <h4>SANDWICHES + BURGERS</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing adipiscing
                  adipiscing.
                </p>
                <h5>
                  <a href="#">View Menu</a>
                </h5>
              </div>
            </Col>
            <Col xl={3} md={4}>
              <NextImage src="/images/dish5.png" />
              <div className={styles.content}>
                <h4>MAINS</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing adipiscing
                  adipiscing.
                </p>
                <h5>
                  <a href="#">View Menu</a>
                </h5>
              </div>
            </Col>
            <Col xl={3} md={4}>
              <NextImage src="/images/dish6.png" />
              <div className={styles.content}>
                <h4>STEAK</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing adipiscing
                  adipiscing.
                </p>
                <h5>
                  <a href="#">View Menu</a>
                </h5>
              </div>
            </Col>

            <Col xl={3} md={4}>
              <NextImage src="/images/dish7.png" />
              <div className={styles.content}>
                <h4>SWEETS</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing adipiscing
                  adipiscing.
                </p>
                <h5>
                  <a href="#">View Menu</a>
                </h5>
              </div>
            </Col>
            <Col xl={3} md={4}>
              <NextImage src="/images/dish8.png" />
              <div className={styles.content}>
                <h4>SMOOTHIE DRINKS</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing adipiscing
                  adipiscing.
                </p>
                <h5>
                  <a href="#">View Menu</a>
                </h5>
              </div>
            </Col>
            <Col xl={3} md={4}>
              <NextImage src="/images/dish9.png" />
              <div className={styles.content}>
                <h4>Soft Drinks</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing adipiscing
                  adipiscing.
                </p>
                <h5>
                  <a href="#">View Menu</a>
                </h5>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}
      <Footer />
    </PageLayout>
  );
}
