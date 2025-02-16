import React, { FC } from "react";
import styles from "./style.module.scss";
import { Container } from "react-bootstrap";
import { ImageBottomWave, ImageTopWave } from "@/assets/svg";

interface IProps {
  bgImagePath?: string;
}
const FranchiseSection: FC<IProps> = ({
  bgImagePath = "/images/home/franchise_bg.jpg",
}) => {
  return (
    <section
      className={styles.franchise_section}
      style={{ backgroundImage: `url(${bgImagePath})` }}
    >
      <span className={`${styles.wave} ${styles.wave_top}`}>
        <ImageTopWave />
      </span>
      <span className={`${styles.wave} ${styles.wave_bottom}`}>
        <ImageBottomWave />
      </span>
      <Container>
        <div className={styles.content}>
          <h3>Join our Franchise to Grow Business</h3>
          <p>
            Turn your passion for great food into a profitable venture by
            joining the Chaat Bar family.
          </p>
          <button className="btn btn-primary">Join Now</button>
        </div>
      </Container>
    </section>
  );
};

export default FranchiseSection;
