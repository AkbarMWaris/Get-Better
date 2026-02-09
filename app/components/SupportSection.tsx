"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function SupportSection() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row">
      
      {/* LEFT IMAGE SIDE */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full lg:w-1/2 h-[400px] lg:h-auto"
      >
        <Image
          src="/new-support.png"
          alt="Support"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* RIGHT CONTENT SIDE */}
      <div className="w-full lg:w-1/2 bg-[#EFE3DC] flex flex-col">
        
        {/* TEXT CONTENT */}
        <div className="px-6 md:px-16 py-16 flex-1 flex flex-col justify-center">
          <h2 className="text-3xl md:text-5xl font-semibold text-[#1f2a1f] leading-tight">
            You don’t have to brace for life <br className="hidden md:block"/> all alone.
          </h2>

          <p className="mt-6 text-lg text-[#1f2a1f]/80">
            If you are facing any of these, there’s hope:
          </p>

          <ul className="mt-6 space-y-3 text-[#1f2a1f]/80 text-base md:text-lg list-disc list-inside">
            <li>Constant worry or overthinking</li>
            <li>Tension, poor sleep, or emotional edginess</li>
            <li>Lingering effects of trauma on relationships or confidence</li>
            <li>Burnout from high pressure or perfectionism</li>
            <li>A sense that something’s always about to go wrong</li>
          </ul>

          <p className="mt-8 text-[#1f2a1f]/80 text-base md:text-lg">
            With warmth and evidence-based guidance like CBT and EMDR, we’ll work together to build safety, regulation, and resilience.
          </p>
        </div>

        {/* FULL-WIDTH BOTTOM BAR */}
        <a
          href="#"
          className="group border-t border-[#1f2a1f] w-full text-center py-6 uppercase tracking-widest text-sm transition-all duration-300 hover:bg-[#1f2a1f] hover:text-white"
        >
          Work with me <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">→</span>
        </a>

      </div>
    </section>
  );
}
