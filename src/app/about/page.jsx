import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
   <div className={styles.container}>
    <div className={styles.textContainer}>
      <h2 className={styles.subtitle}>About Agency</h2>
      <h1 className={styles.title}>
        Heading 1
      </h1>
      <p className={styles.desc}>
        Paragraph 1
      </p>
      <div className={styles.boxes}>
        <div className={styles.box}>
          <h1>Heading 2</h1>
          <p>Paragraph2</p>
        </div>
        <div className={styles.box}>
          <h1>Heading 2</h1>
          <p>Paragraph2</p>
        </div>
        <div className={styles.box}>
          <h1>Heading 2</h1>
          <p>Paragraph2</p>
        </div>
      </div>
    </div>
    <div className={styles.imgContainer}>
      <Image
      src="/about.png"
      alt="About Image"
      fill
      className={styles.img}
      />
    </div>
   </div>
  );
};

export default AboutPage;

  