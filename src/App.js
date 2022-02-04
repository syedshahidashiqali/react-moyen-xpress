import Home from "./pages/Home";
import NavBar from "./components/Common/NavBar";
import OurVendor from "./components/Common/OurVendor";
import Footer from "./components/Common/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <OurVendor />
      <Footer />
    </Router>
  );
}

export default App;
