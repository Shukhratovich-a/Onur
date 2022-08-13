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
          {service && <img src={service.poster} alt="" />}
        </div>
      </section>
      
      <ServicesList />
    </main>
  );
};

export default Services;
