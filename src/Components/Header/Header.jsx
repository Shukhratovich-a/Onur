import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";

import LogoEn from "../Lib/Icons/LogoEn";
import LogoRu from "../Lib/Icons/LogoRu";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <Link className={styles.header__link} to={"/"}>
          <LogoEn />
        </Link>

        <Nav />

        <ul className={styles.header__languages}>
          <li className={styles.header__language}>
            <button className={styles.header__language__button}>RU</button>
          </li>
          <li className={styles.header__language}>
            <button
              className={`${styles.header__language__button} ${styles["header__language__button--active"]}`}
            >
              EN
            </button>
          </li>
          <li className={styles.header__language}>
            <button className={styles.header__language__button}>UZ</button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
