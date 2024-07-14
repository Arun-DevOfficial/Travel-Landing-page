import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";

export default function Hero() {
  const [Guest, setGest] = useState(1);

  const handleGuestCountIncrease = () => {
    setGest(Guest + 1);
  };
  const handleGuestCountDecrease = () => {
    if (Guest > 0) {
      setGest(Guest - 1);
    }
  };

  function showDatePicker() {
    var input = document.getElementById("scheduleDate");
    input.type = "date";
    input.focus();
    input.removeEventListener("click", showDatePicker);
  }

  return (
    <>
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-wrap justify-around items-center font-OpenSans py-8">
          <div className="w-full max-w-[550px] flex flex-col gap-7 p-4 order-2 lg:order-1">
            <h1 className="text-2xl lg:text-6xl font-bold text-gray-800">
              Get Started your exciting{" "}
              <span className="text-primary">journey</span> with us
            </h1>
            <p className="text-gray-600 text-lg mt-4 text-justify leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatem, quas, quibusdam, voluptate, quia, quod qu Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quisquam voluptatem,
              quas, quibusdam, voluptate, quia.
            </p>
            <button className="px-8 py-3 text-primary border mt-4 lg:mt-8 border-primary font-medium font-poppins rounded-md self-start hover:bg-primary hover:text-white">
              Discover Now
            </button>
          </div>
          <div className="order-1 lg:order-2">
            <img
              src={
                "https://img.freepik.com/free-photo/travel-concept-with-baggage_23-2149153260.jpg?t=st=1720837936~exp=1720841536~hmac=5a43e1294baee218268e4bdf27fed34dc29c3303f68f7161a727756c6a2c303b&w=1060"
              }
              alt="Traveler"
              className="w-auto lg:h-[640px] lg:rounded-t-[220px]"
            />
          </div>
        </div>
        <div className="container bg-white shadow-lg shadow-slate-100 lg:w-4/6 rounded-lg p-7 lg:flex gap-4 justify-around items-center lg:my-6 font-Inter ring-1 ring-slate-100 hidden">
          <div>
            <div className="flex gap-2 items-center">
              <h1 className="text-md lg:text-md font-bold text-slate-700 cursor-pointer">
                Location
              </h1>
              <FaAngleDown className="text-primary cursor-pointer" />
            </div>
            <input
              type="text"
              placeholder="Where to go?"
              className="my-2 focus:outline-none"
            />
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <h1 className="text-md lg:text-md font-bold text-slate-700">
                Date
              </h1>
              <FaAngleDown className="text-primary" />
            </div>
            <input
              type="text"
              id="scheduleDate"
              placeholder="Schedule Date"
              className="my-2 focus:outline-none"
              onClick={()=>showDatePicker()}
            />
          </div>
          <div>
            <div className="flex gap-2 items-center">
              <h1 className="text-md lg:text-md font-bold text-slate-700">
                Guest
              </h1>
              <FaAngleDown className="text-primary" />
            </div>
            <div className="flex gap-3 mt-3">
              <button
                className="text-2xl font-poppins bg-primary text-white rounded-full w-8"
                onClick={handleGuestCountIncrease}
              >
                +
              </button>
              <span className="text-lg font-Opensans">{Guest}</span>
              <button
                className="text-2xl font-poppins bg-primary text-white rounded-full w-8"
                onClick={handleGuestCountDecrease}
              >
                -
              </button>
            </div>
          </div>
          <button className="px-8 py-4 rounded-lg text-white bg-primary font-medium flex-shrink-0">
            Explore Now
          </button>
        </div>
      </section>
    </>
  );
}
