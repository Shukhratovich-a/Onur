import React from "react";
import styles from "./Info.module.scss";
import useLocalization from "../../Hooks/useLocalization"
import Telegram from "../../Assets/Images/telegram.png";
import Facebook from "../../Assets/Images/facebook.png";
import Instagram from "../../Assets/Images/instagram.png";
import Gmail from "../../Assets/Images/gmail.png";
import Telephone from "../../Assets/Images/telephone.png";

function Info() {
  const [lang]=useLocalization()
  return (
    <div className={styles.info}>
      <div className={styles.container}>
        <h2 className={styles.info__title}>{lang.contact.title2}</h2>
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
    </div>
  );
}

export default Info;
