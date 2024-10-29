import React from "react";
import styles from "./loader.module.scss";
import NextImage from "../image/NextImage";

const Preloader = () => (
  <div className={styles.preloader}>
    <NextImage src="/gifs/preloader.gif" alt="" />
  </div>
);

export default Preloader;
