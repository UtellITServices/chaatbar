import React, { FC } from "react";
import Header from "../header";
import styles from "./pageLayout.module.scss";

interface IProps {
  children: React.ReactNode;
}

const PageLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <div className={styles.layout}>
        <Header />
        {/* <Scrollbar damping={0.05} continuousScrolling> */}
        <div style={{ height: "100vh" }}>{children}</div>
        {/* </Scrollbar> */}
      </div>
    </>
  );
};

export default PageLayout;
