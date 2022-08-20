import React from "react";
import { useParams } from "react-router-dom";

// import useLocalization from "../../Hooks/useLocalization";

import Service from "../../../Data/Services";

import Partners from "../../../Components/Partners/Partners";
import ServicesList from "../../../Components/Services/Services";

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
            <div className={styles.service__inner}>
              <img
                className={styles.service__poster}
                src={service.poster}
                alt={service.text}
                width={850}
                height={425}
              />

              <div>
                <h3 className={styles.service__title}>{service.title}</h3>
                <p className={styles.service__text}>{service.text}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {serviceName === "plumbing" ? <Partners /> : null}

      <ServicesList />
    </main>
  );
};

export default Services;
