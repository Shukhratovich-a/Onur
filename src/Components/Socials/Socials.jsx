import Instagram from "../Lib/Socials/Instagram";
import YouTube from "../Lib/Socials/YouTube";
import Facebook from "../Lib/Socials/Facebook";
import Twitter from "../Lib/Socials/Twitter";
import TikTok from "../Lib/Socials/TikTok";

import styles from "./Socials.module.scss";

const Socials = () => {
  return (
    <ul className={styles.socials}>
      <li className={styles.social}>
        <a className={styles.social__link} href="#instagram" target={"_blank"}>
          <Instagram />
        </a>
      </li>
      <li className={styles.social}>
        <a className={styles.social__link} href="#youtube" target={"_blank"}>
          <YouTube />
        </a>
      </li>
      <li className={styles.social}>
        <a className={styles.social__link} href="#facebook" target={"_blank"}>
          <Facebook />
        </a>
      </li>
      <li className={styles.social}>
        <a className={styles.social__link} href="#twitter" target={"_blank"}>
          <Twitter />
        </a>
      </li>
      <li className={styles.social}>
        <a className={styles.social__link} href="#tiktok" target={"_blank"}>
          <TikTok />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
