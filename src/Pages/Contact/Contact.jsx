import React from "react";

import useLocalization from "../../Hooks/useLocalization";
import useContactModal from "../../Hooks/useContactModal";

import ContactInfo from "../../Components/ContactInfo/Info";
import Inputs from "../../Components/Inputs/Inputs";
import ContactModal from "../../Components/ContactModal/ContactModal";

import Phone from "../../Assets/Images/Contact/Contact.png";

import styles from "./Contact.module.scss";

function Contact() {
  const localization = useLocalization();
  const [isOpen] = useContactModal();

  return (
    <main>
      {isOpen ? (
        <ContactModal>
          <h4>Sizning xabaringiz yuborildi</h4>

          <p>Tez orada ichda siz bilan bog'lanamiz</p>
        </ContactModal>
      ) : null}

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
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A3e374e593c6826de74e554060ab9ce3457e2d5da1dda9f3a6e23d111b0078992&amp;source=constructor"
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
