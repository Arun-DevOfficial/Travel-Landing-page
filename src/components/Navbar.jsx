import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="flex justify-between items-center p-8 font-poppins sticky top-0 bg-white/30 backdrop-blur-sm">
        <div>
          <h1 className="text-2xl font-semibold">
            <span className="text-primary">Tra</span>book
          </h1>
        </div>
        <ul className="hidden lg:flex gap-5">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Destination</a>
          </li>
          <li>
            <a href="/login">Tour</a>
          </li>
          <li>
            <a href="/login">Blog</a>
          </li>
        </ul>
        <div className="flex gap-5">
          <button className="px-4 text-primary font-medium py-2 rounded-md">
            Login
          </button>
          <button className="bg-primary text-white px-8 py-3 shadow-lg shadow-slate-300 rounded-md">
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
}
