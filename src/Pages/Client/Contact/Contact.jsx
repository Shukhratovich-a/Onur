import React from "react";

import useLocalization from "../../../Hooks/useLocalization";

import ContactInfo from "../../../Components/ContactInfo/Info";
import Inputs from "../../../Components/Inputs/Inputs";

import Phone from "../../../Assets/Images/Contact/Contact.png";

import styles from "./Contact.module.scss";

function Contact() {
  const localization = useLocalization();

  return (
    <main>
      <div className="container">
        <div className={styles.contact}>
          <div className={styles.contact__left}>
            <h1 className={styles.contact__title}>{localization.contact.title}</h1>
            <p className={styles.contact__text}>{localization.contact.text}</p>
          </div>

          <div className={styles.contact__right}>
            <img className={styles.contact__img} src={Phone} alt="contact img" />
          </div>
        </div>
      </div>

      <iframe
        className={styles.contact__map}
        src="https://yandex.uz/map-widget/v1/-/CCUVUMcDDC"
        width="100%"
        height="575"
        title="map"
        scrolling="no"
        frameBorder="0"
      ></iframe>

      <ContactInfo />

      <Inputs />
    </main>
  );
}

export default Contact;
