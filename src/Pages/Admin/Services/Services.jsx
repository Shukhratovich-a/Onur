import { Routes, Route } from "react-router-dom";

import AdminServices from "../../../Components/AdminServices/AdminServices";
import ServiceEdit from "../ServiceEdit/ServiceEdit";

const Partners = () => {
  return (
    <main className="main">
      <Routes>
        <Route path={"/"} element={<AdminServices />} />

        <Route path={"/edit/:serviceSlug/:serviceLang"} element={<ServiceEdit />} />

        {/* <Route path={"/:partnerId"} element={<Products />} /> */}
        {/* <Route path={"/product/create/:partnerId"} element={<ProductEdit />} /> */}
        {/* <Route path={"/product/edit/:productId"} element={<ProductEdit />} /> */}
      </Routes>
    </main>
  );
};

export default Partners;
