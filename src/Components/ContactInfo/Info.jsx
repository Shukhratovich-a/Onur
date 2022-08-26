import React from "react";

import useLocalization from "../../Hooks/useLocalization";

import Telegram from "../../Assets/Images/Contact/Telegram.png";
import Facebook from "../../Assets/Images/Contact/Facebook.png";
import Instagram from "../../Assets/Images/Contact/Instagram.png";
import Gmail from "../../Assets/Images/Contact/Gmail.png";
import Telephone from "../../Assets/Images/Contact/Telephone.png";

import styles from "./Info.module.scss";

function Info() {
  const localization = useLocalization();
  return (
    <section className={styles.info}>
      <div className={styles.container}>
        <h2 className={styles.info__title}>{localization.contact.title2}</h2>

        <div className={styles.info__inner}>
          <div className={styles.info__flex}>
            <a
              className={styles.flex__link}
              href="https://www.facebook.com/onurgroupuz/"
              target={"_blank"}
              rel="noreferrer noopener"
            >
              <img src={Facebook} alt="email logo" width="40" height="40" />

              <p className={styles.info__text}>Facebook</p>
            </a>

            <a
              className={styles.flex__link}
              href="https://www.instagram.com/onurgroup_uz/"
              target={"_blank"}
              rel="noreferrer noopener"
            >
              <img src={Instagram} alt="email logo" width="40" height="40" />

              <p className={styles.info__text}>Instagram</p>
            </a>

            <a
              className={styles.flex__link}
              href="https://t.me/onurgroup_uz"
              target={"_blank"}
              rel="noreferrer noopener"
            >
              <img src={Telegram} alt="email logo" width="40" height="40" />

              <p className={styles.info__text}>Telegram</p>
            </a>
          </div>

          <div className={styles.info__flex}>
            <a
              className={styles.flex__link}
              href="mailto:onurgroup.uz@gmail.com"
              target={"_blank"}
              rel="noreferrer noopener"
            >
              <img src={Gmail} alt="email logo" width="40" height="40" />

              <p className={styles.info__text}>Gmail</p>
            </a>

            <a
              className={styles.flex__link}
              href="tel:+998555001222"
              target={"_blank"}
              rel="noreferrer noopener"
            >
              <img src={Telephone} alt="email logo" width="40" height="40" />

              <p className={styles.info__text}>Telephone</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
