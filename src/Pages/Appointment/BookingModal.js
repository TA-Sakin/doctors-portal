import React from "react";
import { format } from "date-fns";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { name, slots } = treatment;
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    setTreatment(null);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            for="booking-modal"
            class="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <p class="font-bold text-lg">{name}</p>
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
              class="select select-bordered w-full max-w-xs lg:max-w-sm"
            >
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>

            <input
              type="name"
              name="name"
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs lg:max-w-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
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
