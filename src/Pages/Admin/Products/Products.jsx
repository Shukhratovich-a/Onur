import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";

import { HOST } from "../../../config";

import styles from "./Products.module.scss";

const AdminPartners = () => {
  const { partnerId } = useParams();
  const navigate = useNavigate();

  const [partner, setPartner] = React.useState({});
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const responce = await fetch(HOST + "/partners/" + partnerId);

      const data = await responce.json();

      if (data.status === 200) {
        setPartner(() => data.data);
        setProducts(() => data.data.products);
      }
    })();
  }, [partnerId]);

  return (
    <section className={`${styles.partner}`}>
      <div className={`${styles.container} container`}>
        <Button
          className={`${styles.partner__button}`}
          variant={"contained"}
          type={"button"}
          onClick={() => navigate("/admin/partners/edit/" + partner.partnerId)}
        >
          Edit Partner
        </Button>

        <div className={`${styles.partner__top}`}>
          <div className={`${styles.partner__top__wrapper}`}>
            <img
              className={`${styles.partner__top__image}`}
              src={partner.partnerImage}
              alt=""
              width={500}
              height={500}
            />
          </div>

          <div className={`${styles.partner__top__inner}`}>
            <span className={`${styles.partner__top__heading}`}>{partner.partnerName}</span>

            <a
              className={`${styles.partner__top__heading}`}
              href={partner.partnerSite}
              rel="noreferrer noopener"
              target={"_blank"}
            >
              {partner.partnerSite}
            </a>
          </div>
        </div>

        <ul className={`${styles.partner__products}`}>
          {products.length > 0 &&
            products.map((product) => (
              <li className={`${styles.product}`} key={product.productId}>
                <img
                  className={`${styles.product__image}`}
                  src={product.productImage}
                  alt=""
                  width={320}
                  height={320}
                />

                <div className={`${styles.product__inner}`}>
                  <span className={`${styles.product__heading}`}>{product.productName}</span>

                  <Button
                    className={`${styles.product__button}`}
                    variant={"contained"}
                    type={"button"}
                    onClick={() => navigate("/admin/partners/edit/" + partner.partnerId)}
                    fullWidth
                  >
                    Edit Partner
                  </Button>

                  <Button
                    className={`${styles.product__button}`}
                    variant={"contained"}
                    type={"button"}
                    onClick={() => navigate("/admin/partners/edit/" + partner.partnerId)}
                    fullWidth
                  >
                    Delete
                  </Button>
                </div>
              </li>
            ))}
        </ul>

        <Button
          className={`${styles.partner__bottom__button}`}
          variant={"contained"}
          type={"button"}
          onClick={() => navigate("/admin/partners/edit/" + partner.partnerId)}
        >
          Add Product
        </Button>
      </div>
    </section>
  );
};

export default AdminPartners;
