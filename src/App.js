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
import History from "./components/Pages/Dashboard/History";
import AllUsers from "./components/Pages/Dashboard/AllUsers";
import AddDoctor from "./components/Pages/Dashboard/AddDoctor";
import RequireAdmin from "./components/Pages/Login/RequireAdmin";
import ManageDoctors from "./components/Pages/Dashboard/ManageDoctors";
import Payment from "./components/Pages/Dashboard/Payment";

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
          <Route path="history" element={<History />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route
            path="allusers"
            element={
              <RequireAdmin>
                <AllUsers />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="adddoctor"
            element={
              <RequireAdmin>
                <AddDoctor></AddDoctor>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="managedoctors"
            element={
              <RequireAdmin>
                <ManageDoctors />
              </RequireAdmin>
            }
          ></Route>
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
