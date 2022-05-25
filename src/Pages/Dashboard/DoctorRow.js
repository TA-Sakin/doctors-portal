import React from "react";
import { toast } from "react-toastify";

const DoctorRow = ({ doctor, i, refetch, setDeleteDoctor }) => {
  const { name, email, speciality, img } = doctor;
  return (
    <tr>
      <th>
        <label>
          <p>{i + 1}</p>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>{email}</td>
      <td>
        <span className="badge badge-ghost badge-lg">{speciality}</span>
      </td>
      <th>
        <label
          onClick={() => setDeleteDoctor(doctor)}
          for="delete-confirm-modal"
          className="btn btn-error btn-sm"
        >
          Delete
        </label>
      </th>
    </tr>
  );
};

export default DoctorRow;
