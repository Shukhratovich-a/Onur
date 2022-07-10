import useLocaliztion from "../../Hooks/useLocalization";

import styles from "./Partners.module.scss";

const Partners = () => {
  const localiztion = useLocaliztion();

  return (
    <section className={styles.partners}>
      <div className={`container`}>
        <h2 className={styles.partners__heading}>{localiztion.partners.heading}</h2>
      </div>
    </section>
  );
};

export default Partners;
