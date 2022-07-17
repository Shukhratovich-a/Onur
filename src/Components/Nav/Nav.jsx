import { NavLink } from "react-router-dom";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useLocalization from "../../Hooks/useLocalization";
import useBurger from "../../Hooks/useBurger";

import styles from "./Nav.module.scss";

const Nav = () => {
  const localization = useLocalization();
  const [isOpen, setIsOpen] = useBurger();
  const screenWidth = useWindowDimensions();

  const closeNav = (evt) => {
    if (!evt.target.className.includes("nav__list")) setIsOpen(false);
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
            title={localization.nav.home}
          >
            {localization.nav.home}
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles["nav__link--active"] : ""}`
            }
<<<<<<< HEAD
            to={"/products/"}
            title={lang.nav.products}
=======
            to={"/partners/nova"}
            title={localization.nav.partners}
>>>>>>> 69c5dda9dbae11a6424ffc967be4e862591e90db
          >
            {localization.nav.partners}
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles["nav__link--active"] : ""}`
            }
            to={"/about"}
            title={localization.nav.about}
          >
            {localization.nav.about}
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink
            className={({ isActive }) =>
              `${styles.nav__link} ${isActive ? styles["nav__link--active"] : ""}`
            }
            to={"/contacts"}
            title={localization.nav.contacts}
          >
            {localization.nav.contacts}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
