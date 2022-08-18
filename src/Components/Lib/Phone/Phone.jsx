import PhoneIcon from "../Icons/Phone";

import styles from "./Phone.module.scss";

const Phone = () => {
  return (
    <div className={styles.phone}>
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