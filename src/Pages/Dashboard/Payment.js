import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51L2z9nA8mAYRnufV6enLNxSybFkj6WJCwGw6g0QcLmR6Z7Q1OlSk2ixL1ELYZVdw6GORobYk1h20VfMlbiBgqDVm00IMEqc2ic"
);
const Payment = () => {
  // const [appointment, setAppointment] = useState({});
  const { id } = useParams();
  const url = `https://desolate-earth-06461.herokuapp.com/booking/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="">
      <h3 className="font-bold text-xl my-3 text-accent">Payment</h3>
      <div className="card mx-auto w-50 max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-secondary">
            Hello, {appointment?.patientName}
          </h2>
          <h2 className="">Pay for {appointment?.treatment}</h2>
          <p>Please pay: ${appointment?.price}</p>
          <div className="card-actions justify-end">
            {/* <button className="btn btn-primary">Buy Now</button> */}
          </div>
        </div>
      </div>
      <div className="card mx-auto border-2 border-green-400 w-50 max-w-lg mt-20 bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
