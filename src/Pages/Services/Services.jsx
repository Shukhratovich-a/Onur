import React from "react";

// import useLocalization from "../../Hooks/useLocalization";

import ServicesList from "../../Components/Services/Services";
import ServiceProducts from "../../Data/Products";
import { useParams } from "react-router-dom";
import { useState } from "react";

import styles from "./Services.module.scss";
import servicesProducts from "../../Data/ServiseProducts";

const Services = () => {
  const { serviceName } = useParams();
  const [serviceProducts, setServerProducts] = useState(ServiceProducts[serviceName]);

  return (
    <main>
      <section className={styles.services}>
        <div className={`container ${styles.container}`}>
          <ul>
            {
              serviceProducts &&
              <li>
                <p>{servicesProducts.poster}</p>
              </li>
            }
          </ul>
        </div>
      </section>
      <ServicesList />
    </main>
  );
};

export default Services;
