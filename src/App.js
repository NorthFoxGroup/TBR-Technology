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
import Services1 from "./Screen/Services/Services1";
import Services2 from "./Screen/Services/Services2";
import Services3 from "./Screen/Services/Services3";
import Services4 from "./Screen/Services/Services4";
import Services5 from "./Screen/Services/Services5";
import Services6 from "./Screen/Services/Services6";
import Services7 from "./Screen/Services/Services7";
import Services8 from "./Screen/Services/Services8";
import Services9 from "./Screen/Services/Services9";
import Services10 from "./Screen/Services/Services10";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service1" element={<Services1 />} />
          <Route path="/service2" element={<Services2 />} />
          <Route path="/service3" element={<Services3 />} />
          <Route path="/service4" element={<Services4 />} />
          <Route path="/service5" element={<Services5 />} />
          <Route path="/service6" element={<Services6 />} />
          <Route path="/service7" element={<Services7 />} />
          <Route path="/service8" element={<Services8 />} />
          <Route path="/service9" element={<Services9 />} />
          <Route path="/service10" element={<Services10 />} />
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
