import React from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

import useWindowDimensions from "../../Hooks/useWindowDimensions";
import useLocalization from "../../Hooks/useLocalization";
import useBurger from "../../Hooks/useBurger";

import Socials from "../Socials/Socials";

import styles from "./Nav.module.scss";
import Dropdown from "../Lib/Dropdown/Dropdown";

const Nav = () => {
  const localization = useLocalization();
  const [isOpen, setIsOpen] = useBurger();
  const screenWidth = useWindowDimensions();

  const location = useLocation().pathname.split("/")[2];
  const closeNav = (evt) => {
    if (!evt.target.className.includes("nav__list")) setIsOpen(false);
  };

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

          <li className={styles.nav__item}>
            <button
              className={`${styles.nav__link} ${
                ["it", "logistic", "plumbing", "accounting", "distribution"].includes(location)
                  ? styles["nav__link--active"]
                  : ""
              }`}
              title={localization.nav.services}
            >
              {localization.nav.services}
            </button>

            <Dropdown className={styles.nav__dropdown}>
              <ul>
                <li>
                  <Link to={"/services/it"}>{localization.services.it}</Link>
                </li>
                <li>
                  <Link to={"/services/logistic"}>{localization.services.logistic}</Link>
                </li>
                <li>
                  <Link to={"/services/plumbing"}>{localization.services.plumbing}</Link>
                </li>
                <li>
                  <Link to={"/services/accounting"}>{localization.services.accounting}</Link>
                </li>
                <li>
                  <Link to={"/services/distribution"}>{localization.services.distribution}</Link>
                </li>
              </ul>
            </Dropdown>
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
