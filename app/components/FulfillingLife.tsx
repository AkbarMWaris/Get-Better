"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FulfillingLife() {
  return (
    <section className="w-full flex flex-col lg:flex-row overflow-hidden">

      {/* IMAGE — appears SECOND */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full lg:w-1/2 h-[420px] sm:h-[520px] lg:h-[720px] order-1 lg:order-2"
      >
        <Image
          src="/fullfill.jpg"
          alt="Calm lifestyle"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* TEXT SIDE — appears FIRST */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full lg:w-1/2 flex flex-col bg-[#EFE3DC] order-2 lg:order-1"
      >
        {/* TEXT CONTENT AREA */}
        <div className="flex-1 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-20">
          <div className="max-w-xl space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
                Live a resilient life.
            </h2>

            <p className="text-lg sm:text-xl text-[#3c4a3c] leading-relaxed">
              Life can feel overwhelming especially for high-achieving adults balancing anxiety, stress, trauma, or burnout in a fast-paced world.
            </p>

            <p className="text-lg sm:text-xl text-[#3c4a3c] leading-relaxed">
             It's common to appear functional while feeling internally exhausted or on edge, but you're not alone. As a licensed clinical psychologist in Santa Monica, I'm here to help you find regulation and reconnection.
            </p>
          </div>
        </div>

        {/* FULL-WIDTH BOTTOM CTA */}
        <a
          href="#"
          className="group border-t border-[#1f2a1f] w-full bg-transparent hover:bg-[#1f2a1f] transition-all duration-300"
        >
          <div className="w-full px-8 sm:px-16 lg:px-24 py-6 text-center text-sm uppercase tracking-widest group-hover:text-white">
            <span>Get in touch</span>
            <span className="ml-2 transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>
        </a>
      </motion.div>

    </section>
  );
}
