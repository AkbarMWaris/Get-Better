"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function IntroSection() {
  return (
    <section className="w-full bg-[#E5E0DA] px-6 md:px-16 lg:px-24 py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">

        {/* LEFT TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex flex-col items-start lg:items-start"
        >
          <h1 className="text-4xl md:text-6xl font-semibold text-[#1f2a1f] leading-tight">
            Hi, I’m Dr. Maya,
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#1f2a1f]/80 leading-relaxed max-w-xl">
              I'm a licensed clinical psychologist based in Santa Monica, California, committed to providing a safe, warm, and collaborative environment where high-achieving adults can explore anxiety, trauma, stress, and burnout. With empathy and evidence-based methods like CBT, EMDR, and mindfulness, we'll work together to build resilience and regulation in your daily life.
          </p>

          {/* CENTERED BUTTON */}
          <div className="w-full flex justify-center">
            <Link
              href="/contact"
              className="mt-15 border border-[#1f2a1f] px-10 py-3 text-sm uppercase tracking-widest text-[#1f2a1f] hover:bg-[#1f2a1f] hover:text-white transition-all duration-300"
            >
              LET'S CHAT →
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE SIDE */}
       <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="w-full lg:w-1/2 flex justify-center lg:justify-end"
>
  <div className="relative">

    {/* MAIN ARCH IMAGE — ANIMATES FIRST */}
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 80 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="relative w-[260px] sm:w-[320px] md:w-[360px] lg:w-[380px] h-[420px] sm:h-[520px] md:h-[600px] overflow-hidden rounded-t-[180px]"
    >
      <Image
        src="/dr.png"
        alt="Flowers"
        fill
        className="object-cover"
        priority
      />
    </motion.div>

    {/* CIRCLE IMAGE — ANIMATES SECOND
    <motion.div
      variants={{
        hidden: { opacity: 0,  y: 40 },
        visible: { opacity: 1, y: 20 }
      }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="absolute -bottom-10 -right-10 sm:-bottom-12 sm:-right-12 w-[150px] sm:w-[180px] md:w-[220px] h-[150px] sm:h-[180px] md:h-[220px] rounded-full overflow-hidden shadow-xl"
    >
      <Image
        src="/eight.jpg"
        alt="Flowers close"
        fill
        className="object-cover"
      />
    </motion.div> */}

  </div>
</motion.div>

      </div>
    </section>
  );
}
