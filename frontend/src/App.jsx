import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Stars from "./components/Stars";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import PlanetDetail from "./pages/PlanetDetail";
import Rockets from "./pages/Rockets";
import Footer from "./components/Footer";
import Reserve from "./pages/Reserve";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import About from "./pages/About";
import AfterContact from "./pages/AfterContact";
import Recap from "./pages/Recap";
import Confirm from "./pages/Confirm";

function App() {
  return (
    <>
      <Navbar />
      <Stars />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/planets" element={<Planets />} />
        <Route path="/planetdetail" element={<PlanetDetail />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/reservation" element={<Reserve />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/aftercontact" element={<AfterContact />} />
        <Route path="/recap" element={<Recap />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
