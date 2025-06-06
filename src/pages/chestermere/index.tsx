/* eslint-disable @next/next/no-img-element */
import NextImage from "@/components/image/NextImage";
import { REVIEWS_LIST } from "@/constants/reviewsList";
import { Footer } from "@/layout/footer";
import PageLayout from "@/layout/pageLayout";
import CatHighlight from "@/page_sections/home/catHighLight";
import FranchiseSection from "@/page_sections/home/franchiseSection";
import GetInTouch from "@/page_sections/home/getTouch";
import Head from "next/head";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IoMdStar } from "react-icons/io";
import { TfiQuoteLeft, TfiQuoteRight } from "react-icons/tfi";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Home.module.scss";

const brand_slides = [
  {
    image: "/images/brands/image1.png",
  },
  {
    image: "/images/brands/image2.png",
  },
  {
    image: "/images/brands/image3.png",
  },
  {
    image: "/images/brands/image4.jpeg",
  },
  {
    image: "/images/brands/image1.png",
  },
  {
    image: "/images/brands/image2.png",
  },
  {
    image: "/images/brands/image3.png",
  },
  {
    image: "/images/brands/image4.jpeg",
  },
];
const menu_categories = [
  {
    title: "Raj kachori",
    image: "/images/home/delight1.jpg",
  },
  {
    title: "Veg Sandwich",
    image: "/images/home/delight2.jpg",
  },
  {
    title: "Gol Gappa",
    image: "/images/home/delight3.jpg",
  },
  {
    title: "Maki di roti with saag",
    image: "/images/home/delight4.jpg",
  },
  // {
  //   title: "A Fusion of Taste and Tradition",
  //   image: "/images/GOBI-MANCHURIAN.jpg",
  // },
];

export default function Home() {
  const router = useRouter();
  const totalSlides = 3;
  const brandSliderNext = useRef(null);
  const brandSliderPrev = useRef(null);

  const bannerSliderNext = useRef(null);
  const bannerSliderPrev = useRef(null);

  const reviewSliderNext = useRef(null);
  const reviewSliderPrev = useRef(null);

  // const router = useRouter();

  // useEffect(() => {

  //   router.push('/coming-soon');
  // }, [router]);

  const [currentSlide, setCurrentSlide] = useState(1);
  return (
    <PageLayout>
      <Head>
        <title>ChatBar</title>
        <meta
          name="description"
          content="Best Indian restaurant in Chestermere City! Experience the flavors of Indian street food brought to you by the top restaurant in Chestermere, CA."
        />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.homePage}>
        {/* ---------- banner ---------------- */}
        <section className={styles.banner}>
          <div className={styles.video_wrap}>
            <Swiper
              className={styles.banner_swiper}
              spaceBetween={30}
              loop={true}
              // navigation={true}
              navigation={{
                nextEl: bannerSliderNext.current,
                prevEl: bannerSliderPrev.current,
              }}
              slidesPerView={1}
              modules={[Navigation]}
            >
              <SwiperSlide>
                <video autoPlay loop muted playsInline webkit-playsinline disablePictureInPicture>
                  <source src="/video/chestermereBanner.mp4" type="video/mp4" />
                </video>
              </SwiperSlide>
              <SwiperSlide>
                <NextImage src="/images/home/chestBanner2.jpg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <NextImage src="/images/home/chestBanner3.jpg" alt="" />
              </SwiperSlide>
            </Swiper>
            <div style={{ maxHeight: "100%" }}></div>
          </div>
          <Container>
            <div className={styles.banner_inner}>
              <div className={styles.content}>
                <h3>Flavors of India on the streets of YYC !!</h3>
                <h1>CHAAT BAR - Best Indian Food Point in Chestermere</h1>
                {/* <h3>Best Indian Food Point in Calgary</h3> */}
                <h4>
                  Welcome to Chaat Bar and Parontha Place where we're bringing
                  up a vibrant taste of India to Chestermere with authentic
                  Indian street food.
                </h4>
              </div>
              {/* <div className={styles.image}>
                <img src="/images/banner/banner1.png" alt="banner" />
              </div> */}
            </div>
            <div className={styles.arrows}>
              <span
                className={`${styles.arrow_btn} ${styles.prev_btn}`}
                ref={bannerSliderPrev}
              >
                <FaArrowLeftLong />
              </span>
              <span
                className={`${styles.arrow_btn} ${styles.next_btn}`}
                ref={bannerSliderNext}
              >
                <FaArrowRightLong />
              </span>
            </div>
          </Container>
        </section>
        {/* ---------- banner end ---------------- */}

        <section className={styles.weeklyDelights}>
          <div className={styles.images}>
            {/* <NextImage
              className={styles.imageOne}
              src="/images/image-1.png"
              alt=""
            />
            <NextImage
              className={styles.imageTwo}
              src="/images/image-2.png"
              alt=""
            /> */}
            <NextImage
              className={styles.imageThree}
              src="/images/image-2.png"
              alt=""
            />
            <NextImage
              className={styles.imageFour}
              src="/images/image-1.png"
              alt=""
            />
          </div>
          <Container className={styles.container}>
            <div className={styles.head}>
              <h2>Weekly Delights</h2>
              <h3>Discover Our Limited-Time Specials</h3>
              <p>
                Every week or so, we will bring you an array of exciting
                limited-time specials from Indian streets. These best,
                irresistible creations at our Chestermere location will surprise
                your taste buds and keep you coming back for more. From creative
                spins on classic street dishes to seasonal surprises, our
                culinary team is constantly pushing the boundaries to offer you
                a unique dining experience.
              </p>
              <p>
                Don’t miss out on these delicious delights – stop by The Chaat
                Bar and Parontha Place in Chestermere, Alberta and savor the
                flavors of the week!
              </p>
            </div>
            <div className={styles.menuCards_wrap}>
              <Row className={styles.row}>
                {menu_categories?.map((item, index) => (
                  <Col xl={3} lg={4} md={6} key={index}>
                    <div className={styles.cat_card}>
                      <div className={styles.image}>
                        <NextImage src={item?.image} alt="" />
                      </div>
                      <div className={styles.content}>
                        <h5>{item?.title}</h5>
                      </div>
                    </div>
                  </Col>
                ))}
                <Col xl={3} lg={4} md={6}>
                  <div className={styles.see_all}>
                    <div
                      className={styles.see_btn}
                      onClick={() => router.push("/chestermere/menus")}
                    >
                      <span className={styles.icon}>
                        <FaArrowRight />
                      </span>
                      <h6>See all</h6>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
            {/* <div className={styles.menu}>
              {MENU_LIST.filter((item) => item.id).map((item, index) => (
                <div key={index} className={styles.menuItem}>
                  <div className={styles.image}>
                    <NextImage src={item.image} alt="" />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.title}>
                      <h2>{item.name}</h2>
                      <div className={styles.rating}>
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                        <IoMdStar />
                      </div>
                    </div>
                    <h4>{item.price}</h4>
                  </div>
                </div>
              ))}
            </div> */}
          </Container>
        </section>

        <section className={styles.mus}>
          <Container>
            <div className={styles.head}>
              <h2>An Unforgettable Culinary Experience</h2>
              <h3>What Makes Our Indian Street Food Restaurant Special?</h3>
              <p>
                The best Indian street food served at The Chaat Bar and Parontha
                Place in Chestermere is more than just a snack or meal. It’s a
                sensory adventure that will transport you to the bustling roads
                of Mumbai, Delhi, Kolkata, and Amritsar. Here’s what sets our
                street food apart:
              </p>
            </div>
            <div className={styles.slider}>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                onSlideChange={(swiper) =>
                  setCurrentSlide(swiper.activeIndex + 1)
                }
                // onInit={(swiper) => setTotalSlides(swiper.slides.length)}
              >
                <SwiperSlide>
                  <div className={styles.slideWrapper}>
                    <div className={styles.image}>
                      <NextImage
                        src={"/images/chaat6.png"}
                        alt={""}
                      />
                    </div>
                    <div className={styles.content}>
                      <div className={styles.slideCount}>
                        <span>{currentSlide}</span> / {totalSlides}
                      </div>
                      <h2>Bursting with Authentic Flavors:</h2>
                      <p>
                        We believe in preserving the essence of traditional
                        Indian street food recipes served on the streets for
                        centuries. Each dish at the best Indian street food
                        restaurant in Chestermere is crafted with care using a
                        harmonious blend of aromatic spices, fresh ingredients,
                        and time-honored recipes.
                      </p>
                      <p>
                        From the tangy chaats to the succulent kebabs, every
                        bite is a symphony of authentic savors that will
                        transport you to the vibrant streets of India.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.slideWrapper}>
                    <div className={styles.image}>
                      <NextImage src={"/images/home/delight2.jpg"} alt={""} />
                    </div>
                    <div className={styles.content}>
                      <div className={styles.slideCount}>
                        <span>{currentSlide}</span> / {totalSlides}
                      </div>
                      <h2>Sonorous and Colorful Presentations:</h2>
                      <p>
                        As Chestermere’s go-to Indian street food restaurant, we
                        understand that street food is not only about taste but
                        also about visual appeal. Our culinary team takes pride
                        in presenting each dish as a vibrant work of art,
                        enticing your senses even before the first bite.
                      </p>
                      <p>
                        From the vibrant colors of sauces to artistic garnishes,
                        we make sure that every plate is a visual and flavorful
                        delight, showcasing the charm of the best Indian street
                        food in Chestermere!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={styles.slideWrapper}>
                    <div className={styles.image}>
                      <NextImage
                        src={"/images/chaat5.png"}
                        alt={""}
                      />
                    </div>
                    <div className={styles.content}>
                      <div className={styles.slideCount}>
                        <span>{currentSlide}</span> / {totalSlides}
                      </div>
                      <h2>Innovation Meets Tradition:</h2>
                      <p>
                        While we pay homage to the rich culinary heritage of
                        India, we also infuse our street food with a touch of
                        innovation. Our skilled Indian chefs in Chestermere are
                        constantly experimenting with new flavors, textures, and
                        presentation styles. They are crafting a menu that
                        seamlessly blends tradition with contemporary flair.
                        Thus, giving you a memorable desi dining experience at
                        the best Indian restaurant in Chestermere, Alberta!
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </Container>
        </section>

        <CatHighlight />

        <section className={styles.reviews_slider}>
          <Container>
            <h2>
              Customers' Take on Best
              <br /> Indian Food Restaurant in NE Chestermere
            </h2>
            <div className={styles.slider_inner}>
              <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                centeredSlides={true}
                navigation={{
                  nextEl: reviewSliderNext.current,
                  prevEl: reviewSliderPrev.current,
                }}
                modules={[Autoplay, Navigation]}
                // slidesPerView={3}
                breakpoints={{
                  540: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                  },
                  767: {
                    slidesPerView: 2,
                  },
                  991: {
                    slidesPerView: 3,
                    centeredSlides: true,
                  },
                }}
              >
                {REVIEWS_LIST.filter((item) => item.id).map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.reviewWrapper}>
                      <div className={styles.quoteLeft}>
                        <TfiQuoteLeft />
                      </div>
                      <div className={styles.quoteRight}>
                        <TfiQuoteRight />
                      </div>
                      <div className={styles.content}>
                        <div className={styles.rating}>
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                          <IoMdStar />
                        </div>
                        <h3>{item.name}</h3>
                        <p>{item.review}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}

                <div className={styles.arrows}>
                  <span
                    className={`${styles.arrow_btn} ${styles.prev_btn}`}
                    ref={reviewSliderPrev}
                  >
                    <FaArrowLeftLong />
                  </span>
                  <span
                    className={`${styles.arrow_btn} ${styles.next_btn}`}
                    ref={reviewSliderNext}
                  >
                    <FaArrowRightLong />
                  </span>
                </div>
              </Swiper>
            </div>
          </Container>
        </section>

        <GetInTouch />
        <FranchiseSection bgImagePath="/images/menus/banner2.JPG" />

        <section className={styles.brand_slider}>
          <Container>
            <div className={styles.slider_inner}>
              <Swiper
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: brandSliderNext.current,
                  prevEl: brandSliderPrev.current,
                }}
                modules={[Autoplay, Navigation]}
                centeredSlides
                breakpoints={{
                  540: {
                    slidesPerView: 2,
                    centeredSlides: false,
                  },
                  991: {
                    slidesPerView: 3,
                    centeredSlides: true,
                  },
                }}
              >
                {brand_slides?.map((slide, index) => (
                  <SwiperSlide key={index}>
                    <div className={styles.slide}>
                      <img src={slide?.image} alt="image" />
                    </div>
                  </SwiperSlide>
                ))}
                <div className={styles.arrows_wrap}>
                  <span
                    className={`${styles.arrow_btn} ${styles.prev_btn}`}
                    ref={brandSliderPrev}
                  >
                    <FaArrowLeftLong />
                  </span>
                  <span
                    className={`${styles.arrow_btn} ${styles.next_btn}`}
                    ref={brandSliderNext}
                  >
                    <FaArrowRightLong />
                  </span>
                </div>
              </Swiper>
            </div>
          </Container>
        </section>
        <Footer />
      </main>
    </PageLayout>
  );
}
