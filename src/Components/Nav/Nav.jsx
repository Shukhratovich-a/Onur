import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useLocalization from "../../Hooks/useLocalization";
import useBurger from "../../Hooks/useBurger";

import DropDown from "../DropDown/DropDown";
import Socials from "../Socials/Socials";

import styles from "./Nav.module.scss";

const Nav = () => {
  const localization = useLocalization();
  const [isOpen, setIsOpen] = useBurger();
  const screenWidth = useWindowDimensions();
  const [dropdownState, setDropdownState] = React.useState(false);

  const location = useLocation().pathname.split("/")[2];

  const closeNav = (evt) => {
    if (!evt.target.className.includes("nav__list")) setIsOpen(false);
  };

  const dropdownClose = () => {
    setTimeout(() => {
      setDropdownState(false);
    }, 1500);
  };

  React.useEffect(() => {
    setDropdownState(false);
  }, [location]);

  return (
    <nav
      className={`${styles.nav} ${isOpen && screenWidth <= 1000 ? styles["nav--open"] : ""}`}
      onClick={closeNav}
    >
      <div className={styles.nav__inner}>
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
          <li
            className={styles.nav__item}
            onMouseEnter={() => setDropdownState(true)}
            onMouseLeave={dropdownClose}
          >
            <button
              className={`${styles.nav__link} ${
                ["kas", "nova", "spk", "candan", "baykara"].includes(location)
                  ? styles["nav__link--active"]
                  : ""
              }`}
              title={localization.nav.partners}
            >
              {localization.nav.partners}
            </button>

            {screenWidth > 1000 ? (
              <DropDown
                className={`${styles.nav__dropdown} ${
                  dropdownState ? styles["nav__dropdown--open"] : ""
                }`}
                style={styles["nav__dropdown--open"]}
                location={location}
              />
            ) : null}
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

        {screenWidth <= 1000 ? <Socials className={styles.nav__socials} /> : null}
      </div>
    </nav>
  );
};

export default Nav;
