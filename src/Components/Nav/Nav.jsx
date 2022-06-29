import { NavLink } from "react-router-dom";

import styles from "./Nav.module.scss";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavLink
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles["nav__link--active"] : ""}`
            }
            to={"/"}
            title="Home"
          >
            Home
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles["nav__link--active"] : ""}`
            }
            to={"/products"}
            title="Products"
          >
            Products
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles["nav__link--active"] : ""}`
            }
            to={"/about"}
            title="About"
          >
            About
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles["nav__link--active"] : ""}`
            }
            to={"/contacts"}
            title="Contacts"
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
