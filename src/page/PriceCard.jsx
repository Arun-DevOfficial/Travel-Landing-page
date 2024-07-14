import Data from "../Json/Price.json";
import { TiStarFullOutline } from "react-icons/ti";
import { FaLocationDot } from "react-icons/fa6";
import { TiArrowLeftThick } from "react-icons/ti";

export default function PriceCard() {
  return (
    <section className="bg-[#fffdfc] py-36">
      <div className="lg:w-[60%] mx-auto text-center flex flex-col justify-center items-center">
        <div className="container">
          <h1 className="font-semibold text-3xl lg:text-5xl font-poppins">
            Exclusive <span className="text-primary">deals & discounts</span>
          </h1>
          <p className="text-md lg:text-xl font-medium py-6 text-slate-500">
            Discover our fantastic early booking discounts <br /> & start
            planning your journey
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center font-Nunito py-16">
          {Data.map((item, index) => (
            <div
              key={index}
              className="bg-white border shadow-sm cursor-pointer active:shadow-lg rounded-lg overflow-hidden w-[300px] max-w-full"
            >
              <img
                src={item.imageUrl}
                alt={item.location}
                className="w-[320px] h-80 object-cover object-center hover:scale-105 transition-transform duration-150"
              />
              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-semibold mb-2">{item.city}</h1>
                  <div className="flex items-center mb-2">
                    <TiStarFullOutline
                      className="text-yellow-400 mr-1"
                      size={20}
                    />
                    <p className="text-lg font-medium">{item.ratings}</p>
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="flex gap-1 items-center">
                    <FaLocationDot className="text-slate-400" size={20} />
                    <p className="text-slate-500 text-lg flex-shrink-0 font-medium">
                      {item.location}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <p className="text-red-400 line-through text-lg">
                      ₹{item.previous}
                    </p>
                    <p className="text-lg text-primary">₹{item.current}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <TiArrowLeftThick size={5} className="bg-primary text-white w-12 h-12 rounded-full cursor-pointer shadow-lg shadow-primary"/>
          <TiArrowLeftThick size={5} className="border border-primary text-primary w-12 h-12 rotate-180 rounded-full cursor-pointer"/>
        </div>
      </div>
    </section>
  );
}
