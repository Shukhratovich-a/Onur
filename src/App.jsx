import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact"

import Home from "./Pages/Home/Home";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contact/>}/>
      </Routes>
      

      <Footer />
    </div>
  );
}

export default App;
