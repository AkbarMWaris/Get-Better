"use client";

import { motion } from "framer-motion";

export default function GetStarted() {
  return (
    <section className="w-full bg-[#C9D5C8] text-[#595656] px-6 sm:px-12 lg:px-24 py-24 sm:py-32">
      
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
          Get started today.
        </h2>

        {/* Subtext */}
        <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-[#595656]/90 leading-relaxed">
            Ready to find calm amid anxiety, trauma as a high-achieving adult?
          <br className="hidden sm:block" />
            Contact me to book your first in-person or telehealth session in California. I look forward to our collaborative journey toward resilience and reconnection.    
        </p>

        {/* Button */}
        <div className="mt-12">
          <a
            href="#"
            className="group inline-block border border-white px-8 sm:px-10 py-4 text-sm sm:text-base tracking-widest uppercase transition-all duration-300 hover:bg-white hover:text-[#6f6f3c]"
          >
            <span>Get in touch</span>
            <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </motion.div>
    </section>
    
  );
}
