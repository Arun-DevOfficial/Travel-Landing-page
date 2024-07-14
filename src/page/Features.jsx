import React from "react";
import { GrSchedules } from "react-icons/gr";
import { IoIosWallet } from "react-icons/io";
import { MdOutlineAddLocationAlt } from "react-icons/md";

export default function Features() {
  return (
    <>
      <section className="bg-secondary py-36">
        <div className="text-center p-4">
          <h1 className="font-poppins text-3xl lg:text-6xl font-semibold">
            Things you need <span className="text-primary">to do</span>
          </h1>
          <p className="text-slate-400 text-md lg:text-xl py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni,
            <br />
            dignissimos esse minus minima sed iusto natus eveniet.
          </p>
        </div>
        <div className="flex gap-8 py-24 justify-between items-center lg:w-[60%] mx-auto flex-wrap lg:flex-nowrap p-5">
          <div className="flex flex-col cursor-pointer bg-white rounded-lg shadow-lg p-8 w-[420px] gap-8 justify-between border">
            <GrSchedules size={60} color="#fa9566" />
            <div>
              <h1 className="font-semibold text-2xl font-poppins">Sign Up</h1>
              <p className="mt-4 font-medium text-slate-500 font-poppins text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                fuga unde hic saepe. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Perspiciatis nihil debitis sint.
              </p>
            </div>
          </div>
          <div className="flex flex-col cursor-pointer border bg-white rounded-lg hover:shadow-lg p-8 w-[420px] gap-8 justify-between">
            <IoIosWallet size={60} color="#4085f5" />
            <div>
              <h1 className="font-semibold text-2xl font-poppins">Worth of money</h1>
              <p className="mt-4 font-medium text-slate-500 font-roboto text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                fuga unde hic saepe. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Perspiciatis nihil debitis sint.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-white rounded-lg border hover:shadow-lg cursor-pointer p-8 w-[420px] gap-8 justify-between">
            <MdOutlineAddLocationAlt size={60} color="#ffe8b3" />
            <div>
              <h1 className="font-semibold text-2xl font-poppins">Exciting Travel</h1>
              <p className="mt-4 font-medium text-slate-500 font-roboto text-justify">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                fuga unde hic saepe. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Perspiciatis nihil debitis sint.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
