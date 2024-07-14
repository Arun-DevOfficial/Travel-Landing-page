import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Header() {
  return (
    <>
      <header className="bg-[#fffdfc] min-h-screen">
        <div className="w-full lg:w-[70%] mx-auto">
          <Navbar />
          <Hero />
        </div>
      </header>
    </>
  );
}
