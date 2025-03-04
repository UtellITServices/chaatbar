/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import NextImage from "@/components/image/NextImage";
import { motion, useAnimation } from "framer-motion";
import { FC, useEffect } from "react";
import { Container } from "react-bootstrap";
import { useInView } from "react-intersection-observer";
import styles from "./style.module.scss";

interface IAnimProps {
  image: string;
  children: React.ReactNode;
}

const AnimationSection: FC<IAnimProps> = ({ children, image }) => {
  // const router = useRouter();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8,
  });
  const imgControl = useAnimation();
  const contentControl = useAnimation();

  useEffect(() => {
    if (inView) {
      imgControl.start({ opacity: 1, y: 0 });
      contentControl.start({ opacity: 1 });
    }
  }, [inView]);

  // const is_calgary = router.pathname.startsWith("/calgary");

  return (
    <div className={styles.wrapper} ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={contentControl}
        transition={{ duration: 0.6 }}
        className={styles.content}
      >
        {children}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={imgControl}
        transition={{ duration: 0.6 }}
        className={styles.image}
      >
        <NextImage src={image} alt="" />
      </motion.div>
    </div>
  );
};

interface IProps {
  isCalgary?: boolean;
}

const CatHighlight: FC<IProps> = ({ isCalgary }) => {
  return (
    <section className={styles.hmMenu}>
      <Container>
        <div className={styles.hhMenu_inner}>
          <AnimationSection
            image={
              isCalgary
                ? "/images/food/food2.jpg"
                : "/images/food/food2.jpg"
            }
          >
            <h2>Garden of Flavors</h2>
            <h3>Vegetarian Delights, a celebration of taste</h3>
            {isCalgary ? (
              <p>
                Menu at Chaat Bhar Bar - top Indian restaurant in NE Calgary
                region - showcases the vibrant diversity of Indian cuisine,
                featuring a rich selection of vegetarian delights that will
                tantalize your palate.
              </p>
            ) : (
              <p>
                Menu at Chaat Bhar Bar - top Indian restaurant in Chestermere -
                showcases the vibrant diversity of Indian cuisine, featuring a
                rich selection of vegetarian delights that will tantalize your
                palate.
              </p>
            )}
          </AnimationSection>
          <AnimationSection
            image={
              isCalgary
                ? "/images/home/sweetsCalgary.jpg"
                : "/images/food/food3.jpg"
            }
          >
            <div className={styles.content}>
              <h2>Irresistible Sweet Treats</h2>
              <h3>Sweet Treats for Your Mouth Only</h3>
              <p>
                Dive into the multiverse of mouthwatering desserts from Indian
                streets that will leave your mouth craving for more.
              </p>
            </div>
          </AnimationSection>
          <AnimationSection
            image={
              isCalgary
                ? "/images/home/fieryFood.jpg"
                : "/images/home/fieryFood.jpg"
            }
          >
            <h2>Bold and Spicy Delights</h2>
            <h3>Ignite Your Taste Buds with Fiery Foods</h3>
            <p>
              Experience the thrill of authentic Indian spices in every bite.
              Unique tastes in every dish served with culinary love and
              immaculate hospitality at an Indian street food restaurant in
              Chestermere.
            </p>
          </AnimationSection>
        </div>
      </Container>
    </section>
  );
};

export default CatHighlight;
