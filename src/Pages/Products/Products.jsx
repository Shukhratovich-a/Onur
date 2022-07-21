import {useParams} from "react-router-dom"
import Datas from "../../Data/Products";

const Products = () => {
  const {companyName}=useParams()
  return (
  <main className="main">
    <div className="container">
    {companyName}
    </div>
  </main>)
};

export default Products;
