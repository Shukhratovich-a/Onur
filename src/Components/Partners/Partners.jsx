import React from "react";
import { Link } from "react-router-dom";

import useLocalization from "../../Hooks/useLocalization";

import Nova from "../../Assets/Partners/Nova.svg";
import Kas from "../../Assets/Partners/Kas.svg";
import Spk from "../../Assets/Partners/Spk.svg";
import Baykara from "../../Assets/Partners/Baykara.svg";
import Candan from "../../Assets/Partners/Candan.svg";

import styles from "./Partners.module.scss";

const Partners = () => {
  const localization = useLocalization();

  const [partners, setPartners] = React.useState([
    { name: "nova", image: Nova, site: "https://novaplastik.com/", isHover: false },
    { name: "kas", image: Kas, site: "https://kas.com/", isHover: false },
    { name: "spk", image: Spk, site: "https://spk.com/", isHover: false },
    { name: "candan", image: Candan, site: "http://candanmakina.com/", isHover: false },
    { name: "baykara", image: Baykara, site: "https://baykara.com/", isHover: false },
  ]);

  const cardHoverEnter = (index) => {
    const array = [...partners];
    setTimeout(() => {
      array[index].isHover = true;
      setPartners(array);
    }, 250);
  };

  const cardHoverLeave = (index) => {
    const array = [...partners];
    array[index].isHover = false;
    setPartners(array);
  };

  return (
    <section className={styles.partners}>
      <div className={`container`}>
        <h2 className={styles.partners__heading}>{localization.partners.heading}</h2>

        <ul className={styles.partners__list}>
          {partners.map((partner, index) => {
            return (
              <li
                className={`${styles.partner} ${partner.isHover ? styles["partner--hover"] : ""}`}
                key={index}
                onMouseEnter={() => cardHoverEnter(index)}
                onMouseLeave={() => cardHoverLeave(index)}
              >
                <div className={styles.partner__wrapper}>
                  <img
                    className={styles.partner__image}
                    src={partner.image}
                    alt={partner.name + "'s logo"}
                    width={100}
                    height={100}
                  />
                </div>

                <div className={styles.partner__inner}>
                  <Link className={styles.partner__link} to={"/partners/" + partner.name}>
                    {localization.partners.showProducts}
                  </Link>

                  <a
                    className={styles.partner__link}
                    href={partner.site}
                    rel="noreferrer noopener"
                    target={"_blank"}
                  >
                    {localization.partners.officialSite}
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Partners;
