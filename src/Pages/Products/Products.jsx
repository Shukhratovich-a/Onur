import React from "react";
import { useParams } from "react-router-dom";

import { HOST } from "../../config";

import Partners from "../../Components/Partners/Partners";

import Loading from "../../Components/Lib/Loading/Loading";
import Refresh from "../../Components/Lib/Icons/Refresh";

import styles from "./Product.module.scss";

const Products = () => {
  const { partnerId } = useParams();
  const [partner, setPartner] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [buttonLoading, setButtonLoading] = React.useState(false);

  const getPartner = async (partnerId) => {
    setLoading(true);
    setButtonLoading(false);

    try {
      const response = await fetch(HOST + "/partners/" + partnerId);

      const data = await response.json();

      if (data?.status === 200 && data?.data) {
        setPartner(data.data);

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
    getPartner(partnerId);
  }, [partnerId]);

  return (
    <main className="main">
      <section className={styles.products}>
        <div className={`container`}>
          {Number(partner?.partnerId) === Number(partnerId) && (
            <div className={styles.products__inner}>
              <h2 className={styles.products__heading}>
                <span>{partner.partnerName}</span>
                's products
              </h2>

              <ul className={styles.product__list}>
                {partner?.products &&
                  partner?.products?.map((product) => (
                    <li className={styles.product__item} key={product.productId}>
                      <div className={styles.product__inner}>
                        <div className={styles.product__wrapper}>
                          <img
                            className={styles.product__image}
                            src={product.productImage}
                            alt={product.productName}
                            width={320}
                            height={320}
                          />
                        </div>

                        <h3 className={styles.product__title}>{product.productName}</h3>
                      </div>

                      <ul className={styles.product__options}>
                        {product.productParams.length > 0 &&
                          product.productParams.map((param) => (
                            <li className={styles.product__option} key={param.productParamId}>
                              {param.productParamName + ": " + param.productParamText}
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
              </ul>
            </div>
          )}

          {loading && (
            <div className={styles.products__loading}>
              <div className={styles.products__loading__load}>
                <Loading />
              </div>
            </div>
          )}

          {buttonLoading && (
            <div className={styles.products__loading}>
              <button
                className={styles.products__loading__refresh}
                onClick={() => {
                  getPartner(partnerId);
                }}
              >
                <Refresh />
              </button>
            </div>
          )}
        </div>
      </section>

      <Partners />
    </main>
  );
};

export default Products;
