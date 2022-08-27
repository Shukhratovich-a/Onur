import React from "react";
import parse from "html-react-parser";

import { HOST } from "../../../config";

import useLocalization from "../../../Hooks/useLocalization";

import Loading from "../../../Components/Lib/Loading/Loading";
import Refresh from "../../../Components/Lib/Icons/Refresh";

import styles from "./About.module.scss";

const About = () => {
  const localization = useLocalization();
  const [lang] = useLocalization(true);

  const [about, setAbout] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [buttonLoading, setButtonLoading] = React.useState(false);

  const getAbout = async (lang) => {
    setLoading(true);
    setButtonLoading(false);
    setAbout([]);

    try {
      const response = await fetch(HOST + "/about?lang=" + lang);

      const data = await response.json();

      if (data.status === 200 && data.data) {
        setAbout(data.data.aboutDesctiption.split("\n").map((desctiption) => desctiption));

        setLoading(false);
        setButtonLoading(false);
      } else {
        setLoading(false);
        setButtonLoading(true);
      }
    } catch (error) {
      setLoading(false);
      setButtonLoading(true);
    }
  };

  React.useEffect(() => {
    getAbout(lang);
  }, [lang]);

  return (
    <main>
      <section className={styles.about}>
        <div className={`container ${styles.container}`}>
          <h1 className={styles.about__heading}>{localization.about.company}</h1>

          {about.length > 0 && (
            <div className={styles.about__inner}>
              {about.map((text, index) => (
                <p className={styles.about__description} key={index}>
                  {parse(String(text))}
                </p>
              ))}
            </div>
          )}

          {loading && (
            <div className={styles.about__loading}>
              <div className={styles.about__loading__load}>
                <Loading />
              </div>
            </div>
          )}

          {buttonLoading && (
            <div className={styles.about__loading}>
              <button
                className={styles.about__loading__refresh}
                onClick={() => {
                  getAbout(lang);
                }}
              >
                <Refresh />
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default About;
