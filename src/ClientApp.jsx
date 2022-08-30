import { Routes, Route, Navigate } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Client/Home/Home";
import Products from "./Pages/Client/Products/Products";
import About from "./Pages/Client/About/About";
import Services from "./Pages/Client/Services/Services";
import Contact from "./Pages/Client/Contact/Contact";
import News from "./Pages/Client/News/News";

import Phone from "./Components/Lib/Phone/Phone";

import "./App.scss";

function ClientApp() {
  return (
    <div className="app">
      <Header />

      <Phone />

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/partners/:partnerId" element={<Products />} />
          <Route path="/services/:serviceName" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/news/:newsId" element={<News />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </ScrollToTop>

      <Footer />
    </div>
  );
}

export default ClientApp;
