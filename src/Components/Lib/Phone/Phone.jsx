import PhoneIcon from "../Icons/Phone";

import styles from "./Phone.module.scss";

const Phone = () => {
  return (
    <div className={styles.phone}>
      <a className={styles.phone__link} href="tel:+998951441333">
        <span className={styles.phone__number}>+99895 144 13 33</span>

        <span className={styles.phone__icon}>
          <PhoneIcon />
        </span>
      </a>
    </div>
  );
};

export default Phone;
