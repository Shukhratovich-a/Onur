import { Routes, Route } from "react-router-dom";

import AdminPartners from "../../../Components/AdminPartners/AdminPartners";
import PartnerEdit from "../PartnerEdit/PartnerEdit";

const Partners = () => {
  return (
    <main className="main">
      <Routes>
        <Route path={"/"} element={<AdminPartners />} />
        <Route path={"/:partnerId"} element={<AdminPartners />} />
        <Route path={"/create"} element={<PartnerEdit />} />
        <Route path={"/edit/:partnerId"} element={<PartnerEdit />} />
      </Routes>
    </main>
  );
};

export default Partners;
