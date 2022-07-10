import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";

import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";

import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import About from "./Pages/About/About";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/partners/:companyName" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ScrollToTop>

      <Footer />
    </div>
  );
}

export default App;
