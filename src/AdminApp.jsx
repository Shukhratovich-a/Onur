import React from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import useToken from "./Hooks/useToken";

import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import Home from "./Pages/Admin/Home/Home";
import Services from "./Pages/Admin/Services/Services";
import Partners from "./Pages/Admin/Partners/Partners";
import Users from "./Pages/Admin/Users/Users";
import Login from "./Pages/Admin/Login/Login";
import About from "./Pages/Admin/About/About";
import Posts from "./Pages/Admin/Posts/Posts";

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
          <Route path="/services/*" element={<Services />} />
          <Route path="/partners/*" element={<Partners />} />
          <Route path="/users/:userStatus" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about/:aboutLanguage" element={<About />} />
          <Route path="/posts/*" element={<Posts />} />
          <Route path="*" element={<Navigate to={"/admin"} />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default AdminApp;
