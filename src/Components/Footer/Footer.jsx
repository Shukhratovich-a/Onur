import { Link, NavLink } from "react-router-dom";
import parse from "html-react-parser";

import useLocalization from "../../Hooks/useLocalization";

import Logo from "../Lib/Icons/Logo";

import Socials from "../Socials/Socials";

import styles from "./Footer.module.scss";

const Footer = () => {
  const localization = useLocalization();

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={`${styles.container} container`}>
          <Link className={styles.footer__link} to={"/"}>
            <Logo gradientDark={"#ffffff"} gradientLight={"#ffffff"} color={"#ffffff"} />
          </Link>

          <div className={styles.footer__wrapper}>
            <div className={styles.footer__inner}>
              <span className={styles.footer__inner__heading}>{localization.footer.siteMenu}</span>

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
            </div>

            <div className={styles.footer__inner}>
              <span className={styles.footer__inner__heading}>{localization.footer.services}</span>

              <ul className={styles.footer__list}>
                <li className={styles.footer__item}>
                  <NavLink
                    className={({ isActive }) =>
                      `${styles.footer__item__link} ${
                        isActive ? styles["footer__item__link--active"] : ""
                      }`
                    }
                    to={"/services/it"}
                  >
                    {localization.services.it}
                  </NavLink>
                </li>
                <li className={styles.footer__item}>
                  <NavLink
                    className={({ isActive }) =>
                      `${styles.footer__item__link} ${
                        isActive ? styles["footer__item__link--active"] : ""
                      }`
                    }
                    to={"/services/logistic"}
                  >
                    {localization.services.logistic}
                  </NavLink>
                </li>
                <li className={styles.footer__item}>
                  <NavLink
                    className={({ isActive }) =>
                      `${styles.footer__item__link} ${
                        isActive ? styles["footer__item__link--active"] : ""
                      }`
                    }
                    to={"/services/plumbing"}
                  >
                    {localization.services.plumbing}
                  </NavLink>
                </li>
                <li className={styles.footer__item}>
                  <NavLink
                    className={({ isActive }) =>
                      `${styles.footer__item__link} ${
                        isActive ? styles["footer__item__link--active"] : ""
                      }`
                    }
                    to={"/services/accounting"}
                  >
                    {localization.services.accounting}
                  </NavLink>
                </li>
                <li className={styles.footer__item}>
                  <NavLink
                    className={({ isActive }) =>
                      `${styles.footer__item__link} ${
                        isActive ? styles["footer__item__link--active"] : ""
                      }`
                    }
                    to={"/services/distribution"}
                  >
                    {localization.services.distribution}
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className={styles.footer__inner}>
              <span className={styles.footer__inner__heading}>{localization.footer.workTime}</span>

              <ul className={styles.footer__list}>
                {localization.workTime.length &&
                  localization.workTime.map((time) => (
                    <li
                      className={`${styles.footer__item} ${styles["footer__work-time"]}`}
                      key={time.short}
                      title={time.title}
                    >
                      <span className={styles["footer__work-time__short"]}>
                        {parse(time.short)}
                      </span>
                      <span className={`${styles["footer__work-time__circle"]}`}></span>
                      <span className={styles["footer__work-time__time"]}>{parse(time.time)}</span>
                    </li>
                  ))}
              </ul>
            </div>

            <div className={styles.footer__inner}>
              <span className={styles.footer__inner__heading}>{localization.footer.socials}</span>

              <Socials className={styles.footer__socials} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <div className={`${styles.container} container`}>
          <span>&copy; ONUR</span>
          <span>+998 97 422 17 77</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
