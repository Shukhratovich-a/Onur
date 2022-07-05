import Instagram from "../Lib/Socials/Instagram";
import YouTube from "../Lib/Socials/YouTube";
import Facebook from "../Lib/Socials/Facebook";
import Twitter from "../Lib/Socials/Twitter";
import TikTok from "../Lib/Socials/TikTok";

import styles from "./Socials.module.scss";

const Socials = ({ className }) => {
  return (
    <ul className={`${styles.socials} ${className}`}>
      <li className={styles.social}>
        <a
          className={styles.social__link}
          href="https://www.instagram.com/onurgroup_uz/"
          rel="noreferrer noopener"
          target={"_blank"}
        >
          <Instagram />
        </a>
      </li>
      <li className={styles.social}>
        <a
          className={styles.social__link}
          href="#youtube"
          rel="noreferrer noopener"
          target={"_blank"}
        >
          <YouTube />
        </a>
      </li>
      <li className={styles.social}>
        <a
          className={styles.social__link}
          href="https://www.facebook.com/onurgroupuz/"
          rel="noreferrer noopener"
          target={"_blank"}
        >
          <Facebook />
        </a>
      </li>
      <li className={styles.social}>
        <a
          className={styles.social__link}
          href="#twitter"
          rel="noreferrer noopener"
          target={"_blank"}
        >
          <Twitter />
        </a>
      </li>
      <li className={styles.social}>
        <a
          className={styles.social__link}
          href="#tiktok"
          rel="noreferrer noopener"
          target={"_blank"}
        >
          <TikTok />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
