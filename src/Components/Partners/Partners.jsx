import React from "react";
import { Link } from "react-router-dom";

import { HOST } from "../../config";

import useLocalization from "../../Hooks/useLocalization";

import Loading from "../Lib/Loading/Loading";
import Refresh from "../Lib/Refresh/Refresh";

import styles from "./Partners.module.scss";

const Partners = () => {
  const localization = useLocalization();

  const [partners, setPartners] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [buttonLoading, setButtonLoading] = React.useState(false);

  const getPartners = async () => {
    setLoading(true);
    setButtonLoading(false);

    try {
      const response = await fetch(HOST + "/partners");

      const data = await response.json();

      if (data.status === 200 && data.data && data.data.length > 0) {
        setPartners(
          data.data.map((partner) => {
            partner.isHover = false;

            return partner;
          })
        );

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
    getPartners();
  }, []);

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
          {partners &&
            partners.map((partner, index) => {
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
                      src={partner.partnerImage}
                      alt={partner.partnerName + "'s logo"}
                      width={100}
                      height={100}
                    />
                  </div>

                  <div className={styles.partner__inner}>
                    <Link className={styles.partner__link} to={"/partners/" + partner.partnerId}>
                      {localization.partners.showProducts}
                    </Link>

                    <a
                      className={styles.partner__link}
                      href={partner.partnerSite}
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

        {loading && (
          <div className={styles.partner__loading}>
            <div className={styles.partner__loading__load}>
              <Loading />
            </div>
          </div>
        )}

        {buttonLoading && (
          <div className={styles.partner__loading}>
            <button
              className={styles.partner__loading__refresh}
              onClick={() => {
                getPartners();
              }}
            >
              <Refresh />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Partners;
