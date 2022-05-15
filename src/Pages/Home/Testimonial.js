import React from "react";
import quote from "../../assets/icons/quote.svg";
import person1 from "../../assets/images/people1.png";
import person2 from "../../assets/images/people2.png";
import person3 from "../../assets/images/people3.png";
const Testimonial = () => {
  return (
    <div className="my-24">
      <div className="flex justify-between mx-6 lg:mx-16">
        <div className="">
          <h3 className="text-xl font-bold text-accent">Testimonial</h3>
          <h3 className="text-3xl text-gray-700">What Our Patients Say</h3>
        </div>
        <div className="">
          <img src={quote} className="w-24 lg:w-48" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:mx-28">
        <div class="card bg-base-100 mx-4 shadow-xl">
          <div class="card-body">
            <p className="mt-4">
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aliquam, et! Quis perferendis unde debitis et iste ea
              praesentium laudantium. Quisquam!
            </p>
            <div className="flex items-center mt-6">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                  <img src={person1} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Winson Herry</h3>
                <h3>California</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-base-100 mx-4 shadow-xl">
          <div class="card-body">
            <p className="mt-4">
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aliquam, et! Quis perferendis unde debitis et iste ea
              praesentium laudantium. Quisquam!
            </p>
            <div className="flex items-center mt-6">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                  <img src={person2} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Winson Herry</h3>
                <h3>California</h3>
              </div>
            </div>
          </div>
        </div>
        <div class="card bg-base-100 mx-4 shadow-xl">
          <div class="card-body">
            <p className="mt-4">
              Lorem Ipsum is simply dummy printing and typesetting indust Ipsum
              has been the Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Aliquam, et! Quis perferendis unde debitis et iste ea
              praesentium laudantium. Quisquam!
            </p>
            <div className="flex items-center mt-6">
              <div class="avatar">
                <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                  <img src={person3} alt="" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Winson Herry</h3>
                <h3>California</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
