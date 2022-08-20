import React from "react";

import { HOST } from "../../config";

import useLocalization from "../../Hooks/useLocalization";
import useContactModal from "../../Hooks/useContactModal";

import Profile from "../Lib/Icons/Profile";
import Phone from "../Lib/Icons/Phone";

import styles from "./Inputs.module.scss";

function Inputs() {
  const localiztion = useLocalization();
  const [, setIsOpen] = useContactModal();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { name, contact, message } = evt.target.elements;

    (async () => {
      const responce = await fetch(HOST + "/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: name.value.trim(),
          userContact: contact.value.trim(),
          userMessage: message.value.trim(),
        }),
      });

      const data = await responce.json();

      if (data.status === 201) {
        evt.target.reset();
        setIsOpen(true);
      }
    })();
  };

  return (
    <div className={styles.inputs}>
      <div className="container">
        <h3 className={styles.title}>{localiztion.contact.inputTitle}</h3>

        <div className={styles.input__flex}>
          <form className={styles.inputs__flex__inner} onSubmit={handleSubmit}>
            <label className={styles.inputs__inner}>
              <input
                className={styles.input}
                type="text"
                placeholder={localiztion.contact.input1}
                name={"name"}
              />

              <Profile />
            </label>

            <label className={styles.inputs__inner}>
              <input
                className={styles.input}
                type="tel"
                placeholder={localiztion.contact.input2}
                name={"contact"}
              />

              <Phone />
            </label>

            <label className={styles.inputs__inner}>
              <textarea
                className={styles.input}
                name={"message"}
                cols="30"
                rows="10"
                placeholder={localiztion.contact.input3}
              ></textarea>
            </label>

            <button className={styles.button}>{localiztion.contact.button}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
