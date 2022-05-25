import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      fetch(
        `https://desolate-earth-06461.herokuapp.com/booking?patient=${user.email}`,
        {
          method: "GET",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/home");
            // return toast.error("Error authorizing, please login again!");
          }
          return res.json();
        })
        .then((data) => {
          setAppointments(data);
        });
    }
  }, [user, navigate]);
  return (
    <div>
      <h3 className="font-bold text-xl my-3 text-accent">My Appointement</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Slot</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((a, i) => (
              <tr>
                <th>{i + 1}</th>
                <td>{a.patientName}</td>
                <td>{a.date}</td>
                <td>{a.slot}</td>
                <td>{a.treatment}</td>
                <td>
                  {a.price && !a.paid && (
                    <Link to={`/dashboard/payment/${a._id}`}>
                      <button className="btn btn-sm btn-success">Pay</button>
                    </Link>
                  )}
                  {a.price && a.paid && (
                    <div>
                      <p className="cursor-auto btn btn-sm btn-warning">Paid</p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-yellow-700">
                          {a.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAppointment;
