import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./DropDown.module.scss";

const DropDown = ({ className }) => {
  const partners = ["nova", "kas", "spk", "candan", "baykara"];

  return (
    <div className={`${styles.dropdown} ${className} `}>
      <div className={styles.dropdown__inner}>
        <ul className={`${styles.dropdown__list}`}>
          {partners.map((partner) => (
            <li className={styles.dropdown__item} key={partner}>
              <NavLink
                className={({ isActive }) =>
                  `${styles.dropdown__link} ${isActive ? styles["dropdown__link--active"] : ""}`
                }
                to={"/partners/" + partner}
              >
                {partner}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
