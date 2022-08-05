import React from "react";
import { Link } from "react-router-dom";

import useLocalization from "../../Hooks/useLocalization";

import Logo from "../Lib/Icons/Logo";

import styles from "./Services.module.scss";

const Services = () => {
  const localiztion = useLocalization();

  const [services, setServices] = React.useState([
    { name: "It", site: "https://novaplastik.com/", isHover: false },
    { name: "Logistika", site: "https://kas.com/", isHover: false },
    { name: "Santexnika", site: "https://spk.com/", isHover: false },
    { name: "Buxgalteriya", site: "http://candanmakina.com/", isHover: false },
    { name: "Distribyutorlik", site: "https://baykara.com/", isHover: false },
  ]);

  const cardHoverEnter = (index) => {
    const array = [...services];
    setTimeout(() => {
      array[index].isHover = true;
      setServices(array);
    }, 250);
  };

  const cardHoverLeave = (index) => {
    const array = [...services];
    array[index].isHover = false;
    setServices(array);
  };

  return (
    <section className={styles.services}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.services__heading}>{localiztion.services.heading}</h2>

        <ul className={styles.services__list}>
          {services.map((service, index) => (
            <li
              className={`${styles.service} ${service.isHover ? styles["service--hover"] : ""}`}
              key={index}
              onMouseEnter={() => cardHoverEnter(index)}
              onMouseLeave={() => cardHoverLeave(index)}
            >
              <div className={styles.service__wrapper}>
                <Logo />

                <h3 className={styles.service__heading}>{service.name}</h3>
              </div>

              <div className={styles.service__inner}>
                <Link className={styles.service__link} to={"/services/" + service.name}>
                  {/* {localiztion.services.showProducts} */}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
