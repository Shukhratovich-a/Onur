import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import useToken from "./Hooks/useToken";

import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import Home from "./Pages/Admin/Home/Home";
import Partners from "./Pages/Admin/Partners/Partners";
import Login from "./Pages/Admin/Login/Login";

import "./App.scss";

function AdminApp() {
  const [token] = useToken();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) return navigate("/admin/login");
  }, [token, navigate]);

  return (
    <div className="app app--admin">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partners/*" element={<Partners />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default AdminApp;
