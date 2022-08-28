import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { HOST } from "../../config";

import styles from "./AdminServices.module.scss";

const AdminServices = () => {
  const [services, setServices] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/services");

      const data = await responce.json();

      if (data.status === 200) {
        setServices(() => data.data);
      }
    })();
  }, []);

  return (
    <section className={`${styles.services}`}>
      <div className={`${styles.container} container`}>
        <Button
          className={`${styles.services__button}`}
          variant={"contained"}
          type={"button"}
          onClick={() => navigate("/admin/")}
        >
          back
        </Button>

        <ul className={`${styles.services__list}`}>
          {services.length > 0 &&
            services.map((service) => (
              <li className={`${styles.service}`} key={service.serviceId}>
                <img
                  className={`${styles.service__image}`}
                  src={service.serviceImage}
                  alt=""
                  width={240}
                  height={100}
                />

                <h3 className={`${styles.service__heading}`}>{service.serviceName}</h3>

                <div className={`${styles.service__buttons}`}>
                  <Button
                    className={`${styles.service__button}`}
                    variant={"contained"}
                    type={"button"}
                    onClick={() => navigate("/admin/services/edit/" + service.serviceSlug + "/en")}
                  >
                    Edit
                  </Button>

                  <Button
                    className={`${styles.service__button}`}
                    variant={"contained"}
                    type={"button"}
                    onClick={() => navigate("/admin/services/" + service.serviceId + "/en")}
                  >
                    Products
                  </Button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default AdminServices;
