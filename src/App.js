import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Headers from "./components/Sheared/Headers/Headers";
import Footers from "./components/Sheared/Footers/Footers";
import NothingFound from "./components/Sheared/NothingFound/NothingFound";

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NothingFound />} />
      </Routes>
      <Footers />
    </div>
  );
}

export default App;
