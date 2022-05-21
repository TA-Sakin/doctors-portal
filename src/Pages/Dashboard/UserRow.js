import React from "react";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";
const UserRow = ({ user, i, refetch }) => {
  const { email, role } = user;
  const navigate = useNavigate();
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          toast.error("Failed to make an admin");
          // signOut(auth);
          // localStorage.removeItem("accessToken");
          // navigate("/home");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Admin made successfully");
        }
      });
  };
  return (
    <tr>
      <th>{i + 1}</th>
      <td>{email}</td>
      <td>
        {role !== "admin" ? (
          <button onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </button>
        ) : (
          <button onClick={makeAdmin} className="btn btn-warning btn-xs">
            Admin
          </button>
        )}
      </td>
      <td>
        <button className="btn btn-xs">Remove Admin</button>
      </td>
    </tr>
  );
};

export default UserRow;
