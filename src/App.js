import Home from "./pages/Home";
import NavBar from "./components/Common/NavBar";
import OurVendor from "./components/Common/OurVendor";
import Footer from "./components/Common/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import { useState } from "react";
import CustomerSupport from "./components/Common/CustomerSupport";
import RelatedProducts from "./components/Common/RelatedProducts";
function App() {
  const [isHome, setIsHome] = useState(true);
  return (
    <Router>
      <NavBar />
      {!isHome && <CustomerSupport />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about-us"
          element={<About home={{ isHome, setIsHome }} />}
        />
      </Routes>
      {!isHome && <RelatedProducts home={{ isHome, setIsHome }} />}
      <OurVendor />
      <Footer />
    </Router>
  );
}

export default App;
