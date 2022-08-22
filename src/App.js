import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About/About";
import Headers from "./components/Sheared/Headers/Headers";

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
