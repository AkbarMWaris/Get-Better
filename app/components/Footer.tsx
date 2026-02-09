"use client";

import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-[#e7e3dc] px-6 sm:px-12 py-16">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl mx-auto text-center space-y-8"
      >
        
        {/* TOP LINKS */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm sm:text-base">
          {[
            "Privacy & Cookies Policy",
            "Good Faith Estimate",
            "Website Terms & Conditions",
            "Disclaimer",
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="underline underline-offset-4 hover:opacity-70 transition"
            >
              {item}
            </a>
          ))}
        </div>

        {/* TEMPLATE CREDIT */}
        <p className="text-sm sm:text-base text-[#1f2a1f]">
          Website Template Credits:{" "}
          <a
            href="#"
            className="underline underline-offset-4 hover:opacity-70 transition"
          >
            AM WARIS
          </a>
        </p>

        {/* COPYRIGHT */}
        <p className="text-sm sm:text-base text-[#1f2a1f]">
          All Rights Reserved © {currentYear} AM WARIS.
        </p>

      </motion.div>
    </footer>
  );
}
