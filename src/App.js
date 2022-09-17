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
import Appointments from "./components/Pages/Appointment/Appointments";
import Signup from "./components/Pages/Login/Signup";
import RequirAuth from "./components/Pages/Login/RequirAuth";
import UpdatePassword from "./components/Pages/Login/ResetePassword";
import ResetePassword from "./components/Pages/Login/ResetePassword";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import MyAppointments from "./components/Pages/Dashboard/MyAppointments";
import MyReviews from "./components/Pages/Dashboard/MyReviews";

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/appointments"
          element={
            <RequirAuth>
              <Appointments />
            </RequirAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequirAuth>
              <Dashboard></Dashboard>
            </RequirAuth>
          }
        >
          <Route index element={<MyAppointments />}></Route>
          <Route path="myreview" element={<MyReviews />}></Route>
        </Route>
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/updatepass" element={<UpdatePassword />} />
        <Route path="/resetepass" element={<ResetePassword />} />
        <Route path="*" element={<NothingFound />} />
      </Routes>

      <Footers />
      <ToastContainer />
    </div>
  );
}

export default App;
