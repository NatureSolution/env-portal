import { useEffect } from "react";
import { useState } from "react";

const useAdmin = (user) => {
  const [admin, setAdmin] = useState(false);
  const [adminloadding, setAdminloadding] = useState(true);
  useEffect(() => {
    const email = user.email;
    if (email) {
      fetch(`http://localhost:5000/admin/${email}`, {
        method: "GET",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setAdmin(data.admin);
          setAdminloadding(false);
        });
    }
  }, [user]);
  return [admin, adminloadding];
};
export default useAdmin;
