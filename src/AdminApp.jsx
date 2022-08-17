import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import "./App.scss";

function AdminApp() {
  return (
    <div className="app">
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<>ddgf</>} />
          <Route path="/products" element={<>ddfdggfggf</>} />
        </Routes>
      </ScrollToTop>
    </div>
  );
}

export default AdminApp;
