import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          {/* <!-- Page content here --> */}
          <h2 className="text-3xl font-bold text-purple-500">
            Welcome to Your Dashboard
          </h2>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard"> My Appointments</Link>
            </li>
            <li>
              <Link to="/dashboard/myreview"> My Reviews</Link>
            </li>
            <li>
              <Link to="/dashboard/history"> My History</Link>
            </li>
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/allusers"> Al Users</Link>
                  <Link to="/dashboard/adddoctor"> Add A Doctor</Link>
                  <Link to="/dashboard/managedoctors"> Manage Doctors</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
