import React from "react";
import { useParams } from "react-router-dom";

// import useLocalization from "../../Hooks/useLocalization";

import Service from "../../Data/Services";

import ServicesList from "../../Components/Services/Services";

import styles from "./Services.module.scss";

const Services = () => {
  const { serviceName } = useParams();
  const [service, setService] = React.useState({});

  React.useEffect(() => {
    setService(Service[serviceName]);
  }, [serviceName]);

  return (
    <main>
      <section className={styles.services}>
        <div className={`container ${styles.container}`}>
          {service && (
            <div className={styles.servise__inner}>
              <img className={styles.servise__poster} src={service.poster} alt={service.text} />
              <div>
                <h3 className={styles.servise__title}>{service.title}</h3>
              <p className={styles.servise__text}>{service.text}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <ServicesList />
    </main>
  );
};

export default Services;
