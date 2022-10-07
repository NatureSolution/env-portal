import React from "react";
import { useState } from "react";
import { useQuery } from "react-query";
import Loadding from "../../Sheared/Loadding";
import DeleteConformModal from "./DeleteConformModal";
import DoctorROw from "./DoctorROw";

const ManageDoctors = () => {
  const [deletingDoctor, setDeletingDoctor] = useState(null);
  const {
    data: doctors,
    isLoadding,
    refetch,
  } = useQuery("doctors", () =>
    fetch("http://localhost:5000/doctor", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoadding) {
    return <Loadding></Loadding>;
  }
  console.log(doctors);
  return (
    <div>
      <h2 className="text-2xl">Doctors: </h2>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Speciality</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {doctors?.map((doctor, index) => (
              <DoctorROw
                key={doctor._key}
                doctor={doctor}
                index={index}
                refetch={refetch}
                setDeletingDoctor={setDeletingDoctor}
              ></DoctorROw>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Speciality</th>
              <th>Action</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
      {deletingDoctor && (
        <DeleteConformModal
          deletingDoctor={deletingDoctor}
          refetch={refetch}
          setDeletingDoctor={setDeletingDoctor}
        ></DeleteConformModal>
      )}
    </div>
  );
};

export default ManageDoctors;
