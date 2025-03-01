import NextImage from "@/components/NextImage";
import styles from "./authLayout.module.scss";

const AuthLayout = ({ children, title }) => {
  return (
    <div className={styles.login_page} data-title={title}>
      <div className={styles.login_box}>
        <div className={styles.logo}>
          <NextImage src="/images/logo.png" alt="logo" />
        </div>
        <h4>{title}</h4>
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
