import {useParams} from "react-router-dom"
import Datas from "../../Data/Products";
console.log(Datas);

const Products = () => {
  const objects=[
    {
      id:1,
      text:"bnma",
      title:"title1"
    }
  ]
  const {companyName}=useParams()
  return (
  <main className="main">
    <div className="container">
    {companyName}
    </div>
  </main>)
};

export default Products;
