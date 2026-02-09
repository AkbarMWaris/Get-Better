"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <main className="min-h-screen bg-[#E8DAD7]">
    

      <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-24 py-20 gap-16 overflow-hidden">

        {/* LEFT IMAGE — Top Arch Shape */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center w-full lg:w-1/2"
        >
          <div className="relative w-[240px] sm:w-[300px] md:w-[340px] lg:w-[360px] h-[340px] sm:h-[420px] md:h-[500px] lg:h-[540px] overflow-hidden rounded-t-[180px]">
            <Image
              src="/hero.png"
              alt="Flowers"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* RIGHT CONTENT — CENTERED */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col items-center text-center space-y-8"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight max-w-xl">
            "Healing begins where the mind meets the body."
          </h2>

          <p className="text-lg sm:text-xl text-[#3c4a3c] max-w-md">
              Therapy for adults in Santa Monica, CA.
          </p>

          <button className="border border-[#1f2a1f] px-10 py-4 text-sm tracking-widest uppercase hover:bg-[#1f2a1f] hover:text-white transition-all duration-300">
            Connect With Me →
          </button>
        </motion.div>

      </section>
    </main>
  );
}
