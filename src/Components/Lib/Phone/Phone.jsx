import React from "react";

import PhoneIcon from "../Icons/Phone";

import styles from "./Phone.module.scss";

const Phone = () => {
  const [isHover, setIsHover] = React.useState(false);

  const handleClick = (evt) => {
    if (!isHover) {
      evt.preventDefault();
      setIsHover(true);
    }
  };

  React.useEffect(() => {
    let timeout;

    if (isHover) {
      timeout = setTimeout(() => {
        setIsHover(false);
      }, 5000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isHover]);

  return (
    <div
      className={`${styles.phone} ${isHover ? styles["phone--hover"] : ""}`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={handleClick}
    >
      <a className={styles.phone__link} href="tel:+998555001222">
        <span className={styles.phone__number}>+99855 500 12 22</span>

        <span className={styles.phone__icon}>
          <PhoneIcon />
        </span>
      </a>
    </div>
  );
};

export default Phone;
