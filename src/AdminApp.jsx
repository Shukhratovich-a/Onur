import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import Home from "./Pages/Admin/Home/Home";
import Login from "./Pages/Admin/Login/Login";

import "./App.scss";

function AdminApp() {
  return (
    <div className="app">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default AdminApp;
