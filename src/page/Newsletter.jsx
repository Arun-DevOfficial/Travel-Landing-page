import React from "react";
import News from "../Json/News.json";

export default function Newsletter() {
  return (
    <>
      <section className="bg-[#fffdfc] min-h-screen pt-48">
        <div className="mx-auto px-4 lg:px-0 max-w-7xl">
          {/* Section 1: Latest Blog Updates */}
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl lg:text-6xl font-semibold font-poppins">
              Get updated with{" "}
              <span className="text-primary">latest blogs</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-16">
              {News.map((item, index) => (
                <>
                  <div key={index} className="flex flex-col gap-5">
                    <img
                      src={item.imageUrl}
                      alt={item.date}
                      className="w-full h-auto rounded-lg hover:scale-105 transition-transform duration-250 cursor-pointer"
                    />
                    <h1 className="text-xl font-semibold">{item.desc}</h1>
                    <p className="text-base text-slate-500">{item.date}</p>
                  </div>
                </>
              ))}
            </div>
            <div className="flex justify-center items-center gap-5">
              <div className="bg-slate-300 border-slate-400 rounded-full border p-2 w-2 h-2 cursor-pointer"></div>
              <div className="bg-primary border-slate-400 rounded-full border p-2 w-2 h-2 cursor-pointer"></div>
              <div className="bg-slate-300 border-slate-400 rounded-full border p-2 w-2 h-2 cursor-pointer"></div>
            </div>
          </div>

          {/* Section 2: Subscribe Form */}
          <div className="bg-primary rounded-xl py-16 lg:py-28 mt-16 lg:mt-28">
            <div className="max-w-3xl mx-auto px-4">
              <h1 className="text-white font-semibold text-3xl lg:text-5xl font-poppins text-center mb-8">
                Subscribe and get exclusive deals & offers
              </h1>
              <div className="flex flex-col md:flex-row items-center bg-white p-4 rounded-xl">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 py-3 px-4 bg-white focus:outline-none placeholder-text-xl rounded-l-xl mb-2 md:mb-0 md:mr-2"
                  required
                />
                <button className="py-3 px-6 bg-primary text-white rounded-xl font-medium hover:bg-secondary-dark transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
