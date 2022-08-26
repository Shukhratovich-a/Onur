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
            <div className={styles.flex__inner}>
              <img src={Facebook} alt="email logo" width="40" height="40" />
              <p className={styles.info__text}>onur_uz</p>
            </div>

            <div className={styles.flex__inner}>
              <img src={Instagram} alt="email logo" width="40" height="40" />
              <p className={styles.info__text}> Basmala2022</p>
            </div>

            <div className={styles.flex__inner}>
              <a href="#LINK">
                <img src={Telegram} alt="email logo" width="40" height="40" />
              </a>
              <p className={styles.info__text}>Telegram</p>
            </div>
          </div>
          <div className={styles.info__flex}>
            <div className={styles.flex__inner}>
              <img src={Gmail} alt="email logo" width="40" height="40" />
              <p className={styles.info__text}>onurgroup.uz@gmail.com</p>
            </div>
            <div>
              <a className={styles.flex__link} href="tel:+998 97 422 17 77">
                <img src={Telephone} alt="email logo" width="40" height="40" />

                <p className={styles.info__text}>+998 97 422 17 77</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
