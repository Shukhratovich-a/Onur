import styles from "./Loading.module.scss";

const Loading = ({ className }) => {
  return (
    <div className={styles.loading}>
      <svg
        className={`${styles["loading-icon"]} ${className}`}
        width={24}
        height={24}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 23a11 11 0 1 1 11-11 11.012 11.012 0 0 1-11 11Zm0-20a9 9 0 1 0 9 9 9.01 9.01 0 0 0-9-9Z"
          style={{ opacity: ".2" }}
          fill="currentColor"
        />
        <path
          d="M12 2.95A9.142 9.142 0 0 1 21.05 12a.95.95 0 0 0 1.9 0A10.95 10.95 0 0 0 12 1.05a.95.95 0 0 0 0 1.9Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};

export default Loading;
