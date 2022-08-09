import styles from "./Dropdown.module.scss";

const Dropdown = ({ children, className }) => {
  return <div className={`${styles.dropdown} ${className}`}>{children}</div>;
};

export default Dropdown;
