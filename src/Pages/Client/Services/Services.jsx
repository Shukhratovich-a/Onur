import React from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";

import { HOST } from "../../../config";

import useLocalization from "../../../Hooks/useLocalization";

import Partners from "../../../Components/Partners/Partners";
import ServicesList from "../../../Components/Services/Services";
import News from "../../../Components/News/News";

import Loading from "../../../Components/Lib/Loading/Loading";
import Refresh from "../../../Components/Lib/Icons/Refresh";

import styles from "./Services.module.scss";

const Services = () => {
  const { serviceName } = useParams();
  const [lang] = useLocalization(true);

  const [service, setService] = React.useState({});

  const [loading, setLoading] = React.useState(true);
  const [buttonLoading, setButtonLoading] = React.useState(false);

  const getPartner = async (serviceSlug, serivceLang) => {
    setLoading(true);
    setButtonLoading(false);
    setService({});

    try {
      const response = await fetch(HOST + "/services/" + serviceSlug + "?lang=" + serivceLang);

      const data = await response.json();

      if (data?.status === 200 && data?.data) {
        setService(data.data[0]);

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
    getPartner(serviceName, lang);
  }, [serviceName, lang]);

  return (
    <main>
      <section className={styles.services}>
        <div className={`container ${styles.container}`}>
          {service.serviceName && (
            <div className={styles.service__inner}>
              <img
                className={styles.service__poster}
                src={service.serviceImage}
                alt={service.serviceName}
                width={850}
                height={425}
              />

              <div>
                <h3 className={styles.service__title}>{service.serviceName}</h3>

                <p className={styles.service__text}>{parse(String(service.serviceDescription))}</p>
              </div>
            </div>
          )}

          {loading && (
            <div className={styles.service__loading}>
              <div className={styles.service__loading__load}>
                <Loading />
              </div>
            </div>
          )}

          {buttonLoading && (
            <div className={styles.service__loading}>
              <button
                className={styles.service__loading__refresh}
                onClick={() => {
                  getPartner(serviceName, lang);
                }}
              >
                <Refresh />
              </button>
            </div>
          )}
        </div>
      </section>

      {service.partners?.length > 0 && <Partners serviceId={service.serviceId} />}

      <ServicesList />

      {service.serviceId && <News serviceId={service.serviceId} />}
    </main>
  );
};

export default Services;
