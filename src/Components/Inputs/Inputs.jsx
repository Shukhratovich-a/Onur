import React from "react";

import useLocalization from "../../Hooks/useLocalization";

import Profile from "../Lib/Icons/Profile";
import Person from "../Lib/Icons/Person";
import Phone from "../Lib/Icons/Phone";

import styles from "./Inputs.module.scss";

function Inputs() {
  const localiztion = useLocalization();
  return (
    <div className={styles.inputs}>
      <div className="container">
        <h3 className={styles.title}>{localiztion.contact.inputTitle}</h3>
        <div className={styles.input__flex}>
          <div className={styles.inputs__flex__inner}>
            <div className={styles.inputs__inner}>
              <input
                className={styles.input}
                type="text"
                placeholder={localiztion.contact.input1}
              />

              <Profile />
            </div>
            <div className={styles.inputs__inner}>
              <input
                className={styles.input}
                type="text"
                placeholder={localiztion.contact.input2}
              />

              <Person />
            </div>
            <div className={styles.inputs__inner}>
              <input
                className={styles.input}
                type="number"
                placeholder={localiztion.contact.input3}
              />

              <Phone />
            </div>
            <button className={styles.button}>{localiztion.contact.button}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
