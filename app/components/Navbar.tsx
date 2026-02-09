"use client";

import { useState } from "react";


export default function Navbar() {
  const [open, setOpen] = useState(false);
  

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full bg-[#fbf6ef] px-6 sm:px-10 py-6 z-[1000]">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold tracking-wide">
            <a href="#"> Get Better  </a>
          </h1>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-10 text-lg">
            <a href="#" className="hover:opacity-70 transition">Blog</a>
            <a href="#" className="hover:opacity-70 transition">Contact</a>
          </nav>

          {/* Hamburger / Close */}
          <button
            onClick={() => setOpen(!open)}
            className="relative w-8 h-6 md:hidden z-[1001]"
            aria-label="Toggle menu"
          >
            <span
              className={`absolute left-0 top-1/2 w-full h-[2px] bg-black transition-all duration-300
                ${open ? "rotate-45" : "-translate-y-2"}
              `}
            />
            <span
              className={`absolute left-0 top-1/2 w-full h-[2px] bg-black transition-all duration-300
                ${open ? "-rotate-45" : "translate-y-2"}
              `}
            />
          </button>
        </div>
      </header>

      {/* FULLSCREEN OVERLAY */}
      <div
        className={`fixed inset-0 bg-[#fbf6ef] z-[900] flex flex-col items-center justify-center gap-12 text-2xl transition-opacity duration-300 md:hidden
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <a href="#" onClick={() => setOpen(false)} className="hover:opacity-70">
          Blog
        </a>
        <a href="#" onClick={() => setOpen(false)} className="hover:opacity-70">
          Contact
        </a>
      </div>

      {/* Spacer */}
      <div className="h-[88px]" />
    </>
  );
}
