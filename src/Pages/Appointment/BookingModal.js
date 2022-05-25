import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formattedDate = format(date, "PP");
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formattedDate,
      slot,
      price,
      patient: user.email,
      patientName: user.displayName,
      phone: e.target.phone.value,
    };
    fetch("https://desolate-earth-06461.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast.success(`Appointment booked on ${formattedDate} at ${slot}`);
        } else {
          toast.error(
            `Already booked appointment on ${formattedDate} at ${slot}`
          );
        }
        // used to change state
        refetch();
        setTreatment(null);
      });
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <p className="font-bold text-lg">{name}</p>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 justify-items-center mt-10"
          >
            <input
              value={format(date, "PP")}
              className="input w-full max-w-xs lg:max-w-sm"
              disabled
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs lg:max-w-sm"
            >
              {slots.map((slot, i) => (
                <option key={i} value={slot}>
                  {slot}
                </option>
              ))}
            </select>

            <input
              type="name"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs lg:max-w-sm"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs lg:max-w-sm"
            />
            <input
              type="phone"
              name="phone"
              placeholder="Your phone number"
              className="input input-bordered w-full max-w-xs lg:max-w-sm"
            />
            <input
              type="submit"
              value="SUBMIT"
              className="btn btn-accent text-white w-full max-w-xs lg:max-w-sm"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
