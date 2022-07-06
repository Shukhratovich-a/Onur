import React from "react";

import styles from "./About.module.scss";
import useLocalization from "../../Hooks/useLocalization";

const About = () => {
  const [lang] = useLocalization();
  return (
    <main>
      <section className={styles.about}>
        <div className={`container ${styles.container}`}>
          <h1 className={styles.about__heading}>{lang.about.company}</h1>

          <div className={styles.about__inner}>
            <div className={styles.about__inner1}>
              <div className={styles.about__paragraphs}>
                <p className={styles.about__inparagraph}>{lang.about.text1}</p>
                <p className={styles.about__inparagraph}>{lang.about.text2}</p>
                <p className={styles.about__inparagraph}>{lang.about.text3}</p>
              </div>
            </div>

            <p className={styles.about__undertext}>{lang.about.text4}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
