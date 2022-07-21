import {useParams} from "react-router-dom"
import Datas from "../../Data/Products";
<<<<<<< HEAD
=======
import {useState} from "react"
import styles from "./Product.module.scss"
console.log(Datas);
>>>>>>> c9e20026383526fb1520bf57839f0e5770cee3d1

const Products = () => {
  const {companyName}=useParams();
  const [products,setProducts]=useState(Datas[companyName])
  
  return (
  <main className="main">
    <div className="container">
    <ul className={styles.product__list}>
      {
        products.map(((product)=>(
          <li className={styles.product__item}>
            <img className={styles.product__image} src={product.poster} alt={product.title} />
            <h3 className={styles.product__title}>{product.title}</h3>
            
          </li>
        )))
      }
    </ul>
    </div>
  </main>)
};

export default Products;
