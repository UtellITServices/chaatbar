/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styles from "./style.module.scss";
import { useRouter } from "next/router";

const GetInTouch = () => {
  const router = useRouter();

  const isDesktop =
    typeof window !== "undefined" ? window?.innerWidth >= 768 : false;
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  const leftControl = useAnimation();
  const centerControl = useAnimation();
  const rightControl = useAnimation();

  useEffect(() => {
    if (inView && isDesktop) {
      leftControl.start({ opacity: 1, x: 0 });
      rightControl.start({ opacity: 1, x: 0 });
    }
    if (inView) {
      centerControl.start({ opacity: 1, y: 0 });
    }
  }, [inView]);
  const is_calgary = router.pathname.startsWith("/calgary");

  return (
    <section ref={ref} className={styles.get_touch}>
      <motion.div
        initial={isDesktop ? { opacity: 0, x: -150 } : false}
        animate={leftControl}
        transition={{ duration: 0.5 }}
        className={styles.image}
      >
        <img src="/images/getInTouch/image1.png" alt="image1" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={centerControl}
        transition={{ duration: 0.5 }}
        className={styles.content}
      >
        <h3>Get in Touch with Us</h3>
        {is_calgary ? (
          <p>
            Have a question, feedback, or just want to say hello? We’d love to
            hear from you! Fill out the form below and the professional crew at
            the best Indian restaurant in North East Calgary will respond
            promptly.
          </p>
        ) : (
          <p>
            Have a question, feedback, or just want to say hello? We'd love to
            hear from you! Fill out the form below and the friendly team at the
            best Indian restaurant in Chestermere, Alberta will get back to you
            as soon as possible.
          </p>
        )}
        <p>
          Your satisfaction is our top priority and we’re here to ensure your
          experience at The Chaat Bar and Parontha Place is nothing short of
          exceptional.
        </p>
      </motion.div>
      <motion.div
        initial={isDesktop ? { opacity: 0, x: 150 } : false}
        animate={rightControl}
        transition={{ duration: 0.5 }}
        className={styles.image}
      >
        <img src="/images/getInTouch/image2.png" alt="image1" />
      </motion.div>
    </section>
  );
};

export default GetInTouch;
