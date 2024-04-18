import Home from "./pages/Home.js";
import Analytics from "./pages/analytics.js";
import Landing from "./pages/Landing/Landing.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/visualize" element={<Home />} />
        <Route exact path="/analyze" element={<Analytics />} />
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
