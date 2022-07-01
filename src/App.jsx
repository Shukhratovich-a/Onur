import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
