import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Headers from "./components/Sheared/Headers/Headers";
import Footers from "./components/Sheared/Footers/Footers";
import NothingFound from "./components/Sheared/NothingFound/NothingFound";
import Login from "./components/Pages/Login/Login";
import ContactUs from "./components/Pages/ContactUs/ContactUs";
import Reviews from "./components/Pages/Reviews/Reviews";
import Appointment from "./components/Pages/Appointment/Appointment";

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/appointments" element={<Appointment />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NothingFound />} />
      </Routes>
      <Footers />
    </div>
  );
}

export default App;
