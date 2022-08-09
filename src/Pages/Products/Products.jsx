import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Partners from "../../Components/Partners/Partners";

import Datas from "../../Data/Products";

import styles from "./Product.module.scss";

const Products = () => {
  const { companyName } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const array = [];

    for (let product of Datas[companyName]) {
      const obj = {
        title: product.title,
        poster: product.poster,
        code: product.productCode,
      };

      const options = [];
      for (let option in product) {
        if (option !== "title" && option !== "poster" && option !== "productCode") {
          options.push([option, product[option]]);
        }
      }
      obj.options = options;

      array.push(obj);
    }

    setProducts(array);
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
              <li className={styles.product__item} key={product.code}>
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

                <div className={styles.product__options}>
                  {product.options.map((option, index) => (
                    <p className={styles.product__option} key={index}>
                      {option[0] + ": " + option[1]}
                    </p>
                  ))}
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
