import React from "react";

// import useLocalization from "../../Hooks/useLocalization";

import ServicesList from "../../Components/Services/Services";

import styles from "./Services.module.scss";

const Services = () => {
  

  return (
    <main>
      <section className={styles.services}>
        <div className={`container ${styles.container}`}>'service'</div>
      </section>
      <ServicesList />
    </main>
  );
};

export default Services;
