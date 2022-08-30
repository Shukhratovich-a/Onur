import React from "react";

import { HOST } from "../../config";

import useLocalization from "../../Hooks/useLocalization";
import useContactModal from "../../Hooks/useContactModal";

import Profile from "../Lib/Icons/Profile";
import Phone from "../Lib/Icons/Phone";
import ContactModal from "../../Components/ContactModal/ContactModal";

import styles from "./Inputs.module.scss";

const Inputs = () => {
  const localiztion = useLocalization();
  const [isOpen, setIsOpen] = useContactModal();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const { name, contact, message } = evt.target.elements;

    let messageValue = message.value.trim();

    if (name.value.trim().length < 3) {
      name.focus();
      return;
    }
    if (contact.value.trim().split(" ").join("").split("+").join("").length !== 12) {
      contact.focus();
      return;
    }

    const body = {
      username: name.value.trim(),
      userContact: contact.value.trim().split(" ").join("").split("+").join(""),
    };

    if (messageValue.length !== 0) {
      body.userMessage = messageValue;
    }

    (async () => {
      const responce = await fetch(HOST + "/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
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
      {isOpen ? (
        <ContactModal>
          <h4>{localiztion.contact.modal.title}</h4>

          <p>{localiztion.contact.modal.text}</p>
        </ContactModal>
      ) : null}

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
                onFocus={(evt) => {
                  if (evt.target.value === "") {
                    evt.target.value = "+998";
                  }
                }}
                onChange={(evt) => {
                  const value = evt.target.value.split("");
                  let str = "";

                  if (value.length >= 18) {
                    value.pop();
                    evt.target.value = value.join("");
                    return;
                  }

                  for (let i = 0; i < value.length; i++) {
                    if (i === 4 && value[i] !== " ") {
                      str = str + " " + value[i];
                    } else if (i === 7 && value[i] !== " ") {
                      str = str + " " + value[i];
                    } else if (i === 11 && value[i] !== " ") {
                      str = str + " " + value[i];
                    } else if (i === 14 && value[i] !== " ") {
                      str = str + " " + value[i];
                    } else {
                      str += value[i];
                    }
                  }
                  evt.target.value = str;
                }}
                onKeyDown={(evt) => {
                  if (
                    ![1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "Control", "Shift", "Alt"].includes(evt.key) &&
                    ![48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 17, 16, 18].includes(evt.keyCode) &&
                    evt.key !== "Backspace" &&
                    evt.keyCode !== 8
                  ) {
                    evt.preventDefault();
                  }

                  if (
                    evt.target.value === "+998 " &&
                    evt.code === "Backspace" &&
                    evt.key === "Backspace" &&
                    evt.keyCode === 8
                  ) {
                    evt.preventDefault();
                  }

                  if (
                    evt.code === "Backspace" &&
                    evt.key === "Backspace" &&
                    evt.keyCode === 8 &&
                    (evt.target.value === "+998 " ||
                      evt.target.value === "+998" ||
                      evt.target.value === "+99" ||
                      evt.target.value === "+9" ||
                      evt.target.value === "+" ||
                      evt.target.value === "")
                  ) {
                    evt.target.value = "+998 ";
                  }
                }}
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
};

export default Inputs;
