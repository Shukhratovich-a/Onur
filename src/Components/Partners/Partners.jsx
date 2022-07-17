import { Link } from "react-router-dom";

import useLocaliztion from "../../Hooks/useLocalization";

import Nova from "../../Assets/Partners/Nova.svg";
import Kas from "../../Assets/Partners/Kas.svg";
import Spk from "../../Assets/Partners/Spk.svg";
import Baykara from "../../Assets/Partners/Baykara.svg";
import Candan from "../../Assets/Partners/Candan.svg";

import styles from "./Partners.module.scss";

const Partners = () => {
  const localiztion = useLocaliztion();

  return (
    <section className={styles.partners}>
      <div className={`container`}>
        <h2 className={styles.partners__heading}>{localiztion.partners.heading}</h2>

        <ul className={styles.partners__list}>
          <li className={styles.partner}>
            <div className={styles.partner__wrapper}>
              <img
                className={styles.partner__image}
                src={Nova}
                alt="Nova's logo"
                width={100}
                height={100}
              />
            </div>

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
          <li className={styles.partner}>
            <div className={styles.partner__wrapper}>
              <img
                className={styles.partner__image}
                src={Kas}
                alt="Nova's logo"
                width={100}
                height={100}
              />
            </div>

            <div className={styles.partner__inner}>
              <Link className={styles.partner__link} to={"/partners/kas"}>
                Show products
              </Link>

              <a
                className={styles.partner__link}
                href="https://kas.com.tr/"
                rel="noreferrer noopener"
                target={"_blank"}
              >
                Site
              </a>
            </div>
          </li>
          <li className={styles.partner}>
            <div className={styles.partner__wrapper}>
              <img
                className={styles.partner__image}
                src={Spk}
                alt="Nova's logo"
                width={100}
                height={100}
              />
            </div>

            <div className={styles.partner__inner}>
              <Link className={styles.partner__link} to={"/partners/spk"}>
                Show products
              </Link>

              <a
                className={styles.partner__link}
                href="https://spk.com.tr/"
                rel="noreferrer noopener"
                target={"_blank"}
              >
                Site
              </a>
            </div>
          </li>
          <li className={styles.partner}>
            <div className={styles.partner__wrapper}>
              <img
                className={styles.partner__image}
                src={Candan}
                alt="Nova's logo"
                width={100}
                height={100}
              />
            </div>

            <div className={styles.partner__inner}>
              <Link className={styles.partner__link} to={"/partners/candan"}>
                Show products
              </Link>

              <a
                className={styles.partner__link}
                href="http://candanmakina.com/"
                rel="noreferrer noopener"
                target={"_blank"}
              >
                Site
              </a>
            </div>
          </li>
          <li className={styles.partner}>
            <div className={styles.partner__wrapper}>
              <img
                className={styles.partner__image}
                src={Baykara}
                alt="Nova's logo"
                width={100}
                height={100}
              />
            </div>

            <div className={styles.partner__inner}>
              <Link className={styles.partner__link} to={"/partners/baykara"}>
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
