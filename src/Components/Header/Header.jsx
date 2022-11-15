import React from "react";

import { Link } from "react-router-dom";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useLocalization from "../../Hooks/useLocalization";
import useBurger from "../../Hooks/useBurger";

import Nav from "../Nav/Nav";

import Logo from "../Lib/Icons/Logo";
import Burger from "../Lib/Icons/Burger";
import Close from "../Lib/Icons/Close";

import styles from "./Header.module.scss";

const Header = () => {
  const [lang, setLang] = useLocalization(true);
  const [langIsOpen, setLangIsOpen] = React.useState(false);

  const [small, setSmall] = React.useState(false);

  const [burgerIsOpen, setBurgerIsOpen] = useBurger();
  const screenWidth = useWindowDimensions();

  if (burgerIsOpen) {
    window.document.body.style.overflow = "hidden";
  } else {
    window.document.body.style.overflow = "unset";
  }

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => setSmall(window.pageYOffset > 100));
    }
  }, []);

  React.useEffect(() => {
    setLangIsOpen(false);
  }, [lang]);

  const handleSetLanguage = (evt) => {
    setLang(evt.target.value);
  };

  return (
    <header className={`${styles.header} ${small ? styles["header--small"] : ""}`}>
      {langIsOpen && screenWidth <= 1000 ? (
        <div className={styles.header__lang__curtain} onClick={() => setLangIsOpen(false)}></div>
      ) : null}

      {/* <div className={`${styles.header__test}`}>
        <div className={`${styles.header__test__inner}`}>
          <span>наш сайт работает в тестовом режиме</span>
          {screenWidth > 500 && <span>наш сайт работает в тестовом режиме</span>}
          {screenWidth > 780 && <span>наш сайт работает в тестовом режиме</span>}
          {screenWidth > 1020 && <span>наш сайт работает в тестовом режиме</span>}
          {screenWidth > 1300 && <span>наш сайт работает в тестовом режиме</span>}
        </div>
        <div className={`${styles.header__test__inner}`}>
          <span>наш сайт работает в тестовом режиме</span>
          {screenWidth > 500 && <span>наш сайт работает в тестовом режиме</span>}
          {screenWidth > 780 && <span>наш сайт работает в тестовом режиме</span>}
          {screenWidth > 1020 && <span>наш сайт работает в тестовом режиме</span>}
          {screenWidth > 1300 && <span>наш сайт работает в тестовом режиме</span>}
        </div>
      </div> */}

      <div className={`${styles.container} container`}>
        <Link className={styles.header__link} to={"/"}>
          <Logo color="#fff" />
        </Link>

        <Nav />

        {screenWidth <= 1000 ? (
          <span
            className={`${styles.header__language__button} ${styles.header__active__lang}`}
            onClick={() => setLangIsOpen(!langIsOpen)}
          >
            {lang}
          </span>
        ) : null}

        <ul
          className={`${styles.header__languages} ${
            langIsOpen && screenWidth <= 1000 ? styles["header__languages--open"] : ""
          }`}
        >
          <li
            className={`${styles.header__language} ${
              lang === "ru" ? styles["header__language--active"] : ""
            }`}
          >
            <button
              className={`${styles.header__language__button}`}
              value="ru"
              onClick={handleSetLanguage}
            >
              ru
            </button>
          </li>
          <li
            className={`${styles.header__language} ${
              lang === "en" ? styles["header__language--active"] : ""
            }`}
          >
            <button
              className={`${styles.header__language__button}`}
              value="en"
              onClick={handleSetLanguage}
            >
              en
            </button>
          </li>
          <li
            className={`${styles.header__language} ${
              lang === "uz" ? styles["header__language--active"] : ""
            }`}
          >
            <button
              className={`${styles.header__language__button}`}
              value="uz"
              onClick={handleSetLanguage}
            >
              uz
            </button>
          </li>
        </ul>

        {screenWidth <= 1000 ? (
          <button className={styles.header__burger} onClick={() => setBurgerIsOpen(!burgerIsOpen)}>
            {burgerIsOpen ? <Close /> : <Burger />}
          </button>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
