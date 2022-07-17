import { NavLink } from "react-router-dom";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useLocalization from "../../Hooks/useLocalization";
import useBurger from "../../Hooks/useBurger";

import styles from "./Nav.module.scss";

const Nav = () => {
  const [lang] = useLocalization();
  const [isOpen, setIsOpen] = useBurger();
  const screenWidth = useWindowDimensions();

  const closeNav = (evt) => {
    if(!evt.target.className.includes('nav__list')) setIsOpen(false)
  };

  return (
    <nav
      className={`${styles.nav} ${isOpen && screenWidth <= 1000 ? styles["nav--open"] : ""}`}
      onClick={closeNav}
    >
      <ul className={styles.nav__list}>
        <li className={styles.nav__item}>
          <NavLink
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles["nav__link--active"] : ""}`
            }
            to={"/"}
            title={lang.nav.home}
          >
            {lang.nav.home}
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles["nav__link--active"] : ""}`
            }
            to={"/products/"}
            title={lang.nav.products}
          >
            {lang.nav.products}
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles["nav__link--active"] : ""}`
            }
            to={"/about"}
            title={lang.nav.about}
          >
            {lang.nav.about}
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles["nav__link--active"] : ""}`
            }
            to={"/contacts"}
            title={lang.nav.contacts}
          >
            {lang.nav.contacts}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
