import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Partners from "../../Components/Partners/Partners";

import Datas from "../../Data/Products";

import styles from "./Product.module.scss";

const Products = () => {
  const { companyName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Datas[companyName]);
  }, [companyName]);

  return (
    <main className="main">
      <section className={styles.products}>
        <div className={`container`}>
          <h2 className={styles.products__heading}>
            <span>{companyName}</span>
            's products
          </h2>

          <ul className={styles.product__list}>
            {products.map((product) => (
              <li className={styles.product__item} key={product.productCode}>
                <div className={styles.product__inner}>
                  <div className={styles.product__wrapper}>
                    <img
                      className={styles.product__image}
                      src={product.poster}
                      alt={product.title}
                      width={320}
                      height={320}
                    />
                  </div>

                  <h3 className={styles.product__title}>{product.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Partners />
    </main>
  );
};

export default Products;
