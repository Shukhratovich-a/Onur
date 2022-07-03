import { Link, NavLink } from "react-router-dom";

import useLocalization from "../../Hooks/useLocalization";

import LogoEn from "../Lib/Icons/LogoEn";
import LogoRu from "../Lib/Icons/LogoRu";

import Socials from "../Socials/Socials";

import styles from "./Footer.module.scss";

const Footer = () => {
  const [lang] = useLocalization(true);
  const [localization] = useLocalization();

  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <Link className={styles.footer__link} to={"/"}>
          {lang === "ru" ? (
            <LogoRu gradientDark={"#ffffff"} gradientLight={"#ffffff"} color={"#ffffff"} />
          ) : (
            <LogoEn gradientDark={"#ffffff"} gradientLight={"#ffffff"} color={"#ffffff"} />
          )}
        </Link>

        <div className={styles.footer__inner}>
          <ul className={styles.footer__list}>
            <li className={styles.footer__item}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.footer__item__link} ${
                    isActive ? styles["footer__item__link--active"] : ""
                  }`
                }
                to={"/"}
              >
                {localization.nav.home}
              </NavLink>
            </li>
            <li className={styles.footer__item}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.footer__item__link} ${
                    isActive ? styles["footer__item__link--active"] : ""
                  }`
                }
                to={"/products"}
              >
                {localization.nav.products}
              </NavLink>
            </li>
            <li className={styles.footer__item}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.footer__item__link} ${
                    isActive ? styles["footer__item__link--active"] : ""
                  }`
                }
                to={"/about"}
              >
                {localization.nav.about}
              </NavLink>
            </li>
            <li className={styles.footer__item}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.footer__item__link} ${
                    isActive ? styles["footer__item__link--active"] : ""
                  }`
                }
                to={"/contacts"}
              >
                {localization.nav.contacts}
              </NavLink>
            </li>
          </ul>

          <div className={styles.footer__socials}>
            <h3 className={styles.footer__socials__heading}>Follow Onur</h3>

            <Socials />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
