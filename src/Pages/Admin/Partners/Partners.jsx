import { Routes, Route } from "react-router-dom";

import AdminPartners from "../../../Components/AdminPartners/AdminPartners";
import PartnerEdit from "../PartnerEdit/PartnerEdit";
import Products from "../Products/Products";
import ProductEdit from "../ProductEdit/ProductEdit";

const Partners = () => {
  return (
    <main className="main">
      <Routes>
        <Route path={"/"} element={<AdminPartners />} />

        <Route path={"/create"} element={<PartnerEdit />} />
        <Route path={"/edit/:partnerId"} element={<PartnerEdit />} />

        <Route path={"/:partnerId"} element={<Products />} />
        <Route path={"/product/create/:partnerId"} element={<ProductEdit />} />
        <Route path={"/product/edit/:productId"} element={<ProductEdit />} />
      </Routes>
    </main>
  );
};

export default Partners;
