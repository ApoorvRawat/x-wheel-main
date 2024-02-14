import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Wheel-X</div>
      <div className={styles.text}>
      Wheel-X agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;