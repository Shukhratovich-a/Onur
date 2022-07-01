import React from "react";

import styles from "./About.module.scss";
import useLocalization from "../../Hooks/useLocalization";

// import Aboutuspic from  '../../Assets/Images/aboutuspic.webp';

const About = () => {
  const [lang] = useLocalization();
  return (
    <main>
      <section>
        <div className="container">
            <h1 className="about__us">{lang.about.company}</h1>

            <div className={styles.about__inner}>
              <div className={styles.about__inner1}>
              <div className={styles.about__paragraphs}>
              <p className={styles.about__inparagraph}>
                {lang.about.text1}
              </p>
              <p className={styles.about__inparagraph}>
              {lang.about.text2}
              </p>
              <p className={styles.about__inparagraph}>{lang.about.text3}</p>
              </div>
              <img
                src={'https://mos-pro-stroy.21.oml.ru/thumb/2/Dath1elKQr8aMsBTA5EwCQ/960r960/d/54583275_22.jpg'}
                alt="Picture-of-house"
                width={750}
                height={500}
              />
              </div>

              <p className={styles.about__undertext}>{lang.about.text4}</p>
            </div>
          </div>
      </section>
    </main>
  );
};

export default About;
