import React from "react";
import { Link } from "react-router-dom";

import useLocalization from "../../Hooks/useLocalization";

import It from "../../Assets/Images/Hero/It.jpg";
import Logistic from "../../Assets/Images/Hero/Logistic.jpg";
import Plumbing from "../../Assets/Images/Hero/Plumbing.jpg";
import Accounting from "../../Assets/Images/Hero/Accounting.jpg";
import Distribution from "../../Assets/Images/Hero/Distribution.jpg";

import styles from "./Services.module.scss";

const Services = () => {
  const localiztion = useLocalization();

<<<<<<< HEAD
  const [services, setServices] = React.useState([
    { name: localiztion.services.it, isHover: false, poster: It, link: "it" },
    { name: localiztion.services.logistic, isHover: false, poster: Logistic, link: "logistic" },
    { name: localiztion.services.plumbing, isHover: false, poster: Plumbing, link: "plumbing"},
    { name: localiztion.services.accounting, isHover: false, poster: Accounting, link: "accounting"},
    { name: localiztion.services.distribution, isHover: false, poster: Distribution, link: "distribution" },
  ]);
=======
  const [services, setServices] = React.useState([]);

  React.useEffect(() => {
    setServices([
      { name: localiztion.services.it, isHover: false, poster: It },
      { name: localiztion.services.logistic, isHover: false, poster: Logistic },
      { name: localiztion.services.plumbing, isHover: false, poster: Plumbing },
      { name: localiztion.services.accounting, isHover: false, poster: Accounting },
      { name: localiztion.services.distribution, isHover: false, poster: Distribution },
    ]);

  }, [localiztion]);
>>>>>>> 2570edc0f7dc08834e01bfcd90ee7cc986fb9ca0

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
              style={{ backgroundImage: `url('${service.poster}')` }}
            >
              <Link className={styles.service__link} to={"/services/" + service.link}>
                <h3 className={styles.service__heading}>{service.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
