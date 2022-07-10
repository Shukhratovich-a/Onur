import { Link } from "react-router-dom";

import useLocaliztion from "../../Hooks/useLocalization";

import styles from "./Partners.module.scss";

const Partners = () => {
  const localiztion = useLocaliztion();

  return (
    <section className={styles.partners}>
      <div className={`container`}>
        <h2 className={styles.partners__heading}>{localiztion.partners.heading}</h2>

        <ul className={styles.partners__list}>
          <li className={styles.partner}>
            <div className={styles.partner__inner}>
              <Link className={styles.partner__link} to={"/partners/nova"}>
                Show products
              </Link>

              <a
                className={styles.partner__link}
                href="https://www.novaplastik.com/ru/"
                rel="noreferrer noopener"
                target={"_blank"}
              >
                Site
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Partners;
