import React from "react";
import { toast } from "react-toastify";

const DoctorROw = ({ doctor, index, refetch, setDeletingDoctor }) => {
  const { name, email, img, speciality } = doctor;

  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
              <img src={img} alt={name} />
            </div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </td>
      <td>{email}</td>
      <th>
        <p className="text-sm bold">{speciality}</p>
        <span className="badge badge-ghost badge-sm">
          Desktop Support Technician
        </span>
      </th>
      <th>
        <label
          onClick={() => setDeletingDoctor(doctor)}
          htmlFor="delete-confirm-modal"
          className="btn btn-xs btn-denger"
        >
          DeleteX
        </label>
      </th>
    </tr>
  );
};

export default DoctorROw;
