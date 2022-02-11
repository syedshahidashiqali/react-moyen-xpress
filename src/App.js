import Home from "./pages/Home";
import NavBar from "./components/Common/NavBar";
import OurVendor from "./components/Common/OurVendor";
import Footer from "./components/Common/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import { useState } from "react";
import CustomerSupport from "./components/Common/CustomerSupport";
import CardContainer from "./components/Common/CardContainer";
import { newArrivalDefault } from "./urls";
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
      {!isHome && (
        <div className="container">
          <CardContainer
            url={newArrivalDefault}
            name={"Related Products"}
            isTimeline={false}
          />
        </div>
      )}
      <OurVendor />
      <Footer />
    </Router>
  );
}

export default App;
