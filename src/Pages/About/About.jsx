import React from "react";

import useLocalization from "../../Hooks/useLocalization";

import styles from "./About.module.scss";

const About = () => {
  const [lang] = useLocalization();
  return (
    <main>
      <section className={styles.about}>
        <div className={`container ${styles.container}`}>
          <h1 className={styles.about__heading}>{lang.about.company}</h1>

          <div className={styles.about__inner}>
            <p className={styles.about__paragraph}>{lang.about.text1}</p>
            <p className={styles.about__paragraph}>{lang.about.text2}</p>
            <p className={styles.about__paragraph}>{lang.about.text3}</p>
            <p className={styles.about__paragraph}>{lang.about.text4}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
