import React from "react";

import useLocalization from "../../Hooks/useLocalization";

import Profile from "../Lib/Icons/Profile";
import Person from "../Lib/Icons/Person";
import Phone from "../Lib/Icons/Phone";

import styles from "./Inputs.module.scss";

function Inputs() {
  const localiztion = useLocalization();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { firstname, lastname, contact } = evt.target.elements;

    (async () => {
      const responce = await fetch("http://localhost:5500/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: firstname.value.trim() + " " + lastname.value.trim(),
          contact: contact.value.trim(),
        }),
      });

      const data = await responce.json();

      console.log(data);
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
                name={"firstname"}
              />

              <Profile />
            </label>

            <label className={styles.inputs__inner}>
              <input
                className={styles.input}
                type="text"
                placeholder={localiztion.contact.input2}
                name={"lastname"}
              />

              <Person />
            </label>

            <label className={styles.inputs__inner}>
              <input
                className={styles.input}
                type="tel"
                placeholder={localiztion.contact.input3}
                name={"contact"}
              />

              <Phone />
            </label>

            <button className={styles.button}>{localiztion.contact.button}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
