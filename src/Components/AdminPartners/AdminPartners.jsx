import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

import { HOST } from "../../config";

import styles from "./AdminPartners.module.scss";

const AdminPartners = () => {
  const [partners, setPartners] = React.useState([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/partners");

      const data = await responce.json();

      if (data.status === 200) {
        setPartners(() => data.data);
      }
    })();
  }, []);

  return (
    <section className={`${styles.partners}`}>
      <div className={`${styles.container} container`}>
        <Button
          className={`${styles.partners__button}`}
          variant={"contained"}
          type={"button"}
          onClick={() => navigate("/admin/")}
        >
          back
        </Button>

        <Button
          className={`${styles.partners__button}`}
          variant={"contained"}
          type={"button"}
          onClick={() => navigate("/admin/partners/create")}
        >
          Create
        </Button>

        <ul className={`${styles.partners__list}`}>
          {partners.length > 0 &&
            partners.map((partner) => (
              <li className={`${styles.partner}`} key={partner.partnerId}>
                <img
                  className={`${styles.partner__image}`}
                  src={partner.partnerImage}
                  alt=""
                  width={240}
                  height={100}
                />

                <h3 className={`${styles.partner__heading}`}>{partner.partnerName}</h3>

                <div className={`${styles.partner__buttons}`}>
                  <Button
                    className={`${styles.partner__button}`}
                    variant={"contained"}
                    type={"button"}
                    onClick={() => navigate("/admin/partners/edit/" + partner.partnerId)}
                  >
                    Edit
                  </Button>
                  <Button
                    className={`${styles.partner__button}`}
                    variant={"contained"}
                    type={"button"}
                    onClick={() => navigate("/admin/partners/" + partner.partnerId)}
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

export default AdminPartners;
