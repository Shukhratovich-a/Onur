import React from "react";

import useLocalization from "../../Hooks/useLocalization";

import styles from "./About.module.scss";

const About = () => {
  const localization = useLocalization();
  return (
    <main>
      <section className={styles.about}>
        <div className={`container ${styles.container}`}>
          <h1 className={styles.about__heading}>{localization.about.company}</h1>

          <div className={styles.about__inner}>
            <p className={styles.about__description}>{localization.about.text1}</p>
            <p className={styles.about__description}>{localization.about.text2}</p>
            <p className={styles.about__description}>{localization.about.text3}</p>
            <p className={styles.about__description}>{localization.about.text4}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
