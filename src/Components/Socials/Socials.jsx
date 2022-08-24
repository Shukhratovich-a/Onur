import Instagram from "../Lib/Socials/Instagram";
import YouTube from "../Lib/Socials/YouTube";
import Facebook from "../Lib/Socials/Facebook";
import Telegram from "../Lib/Socials/Telegram";

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
          href="https://www.youtube.com/channel/UClUjG0xAxkDxvay7NwEJZmg"
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
          href="https://t.me/onurgroup_uz"
          rel="noreferrer noopener"
          target={"_blank"}
        >
          <Telegram />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
