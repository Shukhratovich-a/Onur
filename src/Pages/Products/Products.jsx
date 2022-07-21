import { useState } from "react";
import { useParams } from "react-router-dom";

import Datas from "../../Data/Products";

import styles from "./Product.module.scss";

const Products = () => {
  const { companyName } = useParams();
  const [products, setProducts] = useState(Datas[companyName]);

  return (
    <main className="main">
      <div className="container">
        <ul className={styles.product__list}>
          {products.map((product) => (
            <li className={styles.product__item}>
              <img className={styles.product__image} src={product.poster} alt={product.title} />
              <h3 className={styles.product__title}>{product.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Products;
