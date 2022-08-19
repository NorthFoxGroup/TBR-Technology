import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Footer,
  Home,
  Navbar,
  Company,
  ScrollToTop,
  BusinessModal,
} from "./Screen";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/businessModal" element={<BusinessModal />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </>
  );
};

export default App;
