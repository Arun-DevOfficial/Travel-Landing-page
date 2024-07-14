import React from "react";
import { TiArrowLeftThick } from "react-icons/ti";
import Feed from "../assets/Feedb.png";

export default function Feedback() {
  return (
    <>
      <section className="bg-[#f7f8fc] py-24">
        <div className="w-full lg:w-[60%] mx-auto p-4 flex flex-wrap gap-3 justify-between items-center">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-poppins font-semibold">
              What people say <br />
              <span className="text-primary">about us</span>
            </h1>
            <p className="font-medium text-lg py-8">
              Our clients send us bunch smiles with our services <br /> and we love
              them
            </p>
            <div className="flex gap-4 items-center">
              <TiArrowLeftThick
                size={5}
                className="bg-primary text-white w-12 h-12 rounded-full cursor-pointer shadow-lg shadow-primary"
              />
              <TiArrowLeftThick
                size={5}
                className="border border-primary text-primary w-12 h-12 rotate-180 rounded-full cursor-pointer"
              />
            </div>
          </div>
          <div>
            <img src={Feed} alt="feedback" />
          </div>
        </div>
      </section>
    </>
  );
}