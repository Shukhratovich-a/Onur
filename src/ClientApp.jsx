import { Routes, Route } from "react-router-dom";

import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";

import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";
import Services from "./Pages/Services/Services";

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
        </Routes>
      </ScrollToTop>

      <Footer />
    </div>
  );
}

export default ClientApp;
