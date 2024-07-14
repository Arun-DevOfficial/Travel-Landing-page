import React from "react";
import Data from "../Json/Plan.json";
import { FaLocationArrow } from "react-icons/fa";

export default function Plan() {
  return (
    <>
      <section className="bg-[#fffdfc] min-h-screen py-24 px-3">
        <div className="lg:w-[60%] mx-auto text-center">
          <h1 className="text-3xl lg:text-6xl font-bold font-poppins">
            Best <span className="text-primary">Vacation Plan</span>
          </h1>
          <p className="text-lg lg:text-2xl font-Nunito py-5">
            Plan your perfect vacation with our travel agency. Choose <br />{" "}
            among hundreds of all-inclusive offers!
          </p>
        </div>
        <div className="flex justify-center gap-5 py-24 flex-wrap">
          {Data.map((item, index) => (
            <div
              key={index}
              className="w-96 p-2 bg-white rounded-lg hover:shadow-primary/40 cursor-pointer hover:shadow-xl border overflow-hidden"
            >
              <img
                src={item.imageUrl}
                alt={item.location}
                className="w-full rounded-lg h-[320px] object-cover object-center hover:scale-105 transition-transform duration-250"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h1 className="font-semibold text-xl">{item.city}</h1>
                  <div className="flex items-center">
                    <span className="text-xl text-slate-600 font-OpenSans">
                      ₹{item.current}
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2 items-center py-3">
                    <FaLocationArrow className="text-primary" size={15} />
                    <p className="text-gray-600 text-xl">{item.location}</p>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-5 w-5 text-yellow-500 mr-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a1 1 0 0 1 .8.4l2.55 3.47 4.2.61a1 1 0 0 1 .55 1.7l-3.05 3.16.72 4.29a1 1 0 0 1-1.45 1.05L10 15.4l-3.76 1.98a1 1 0 0 1-1.45-1.05l.72-4.29-3.05-3.16a1 1 0 0 1 .55-1.7l4.2-.61L9.2 2.4A1 1 0 0 1 10 2zm1 13a1 1 0 0 1-.62-.22l-3.3-2.18-1 5.97a1 1 0 0 1-1.48.75l-3.89-2.05 4.52-4.68a1 1 0 0 1 .29-.13l5.26-.77-2.42-3.29a1 1 0 0 1 .29-1.7l3.37-1.77-5.01-.67a1 1 0 0 1-.76-.57L10 3.26v9.44z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xl text-slate-600 font-medium font-OpenSans">
                      {item.ratings}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
