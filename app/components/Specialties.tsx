"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const specialties = [
  {
    title: "Perfectionism",
    description:
    "High internal pressure leaves many functional yet stuck—therapy fosters self-compassion and realistic resilience. Explore patterns affecting relationships and work, developing insight for a stronger sense of self.",
    image: "/perfect.png",
  },
  {
    title: "Trauma",
    description:
      "Specializing in single-incident and complex trauma from childhood or relationships, I use paced EMDR and stabilization methods. Focus is on emotional regulation and rebuilding confidence beyond sessions.",
    image: "/trauma.png",
  },
  {
    title: "Stress",
    description:
      "Navigating chronic stress and its body-mind toll, I integrate collaborative therapy with practical tools. High-achievers learn to slow down, reduce bracing, and build enduring emotional balance.",
    image: "/stress.jpg",
  },
];

export default function Specialties() {
  return (
    <section className="w-full bg-[#EAE6DE]/40 py-20 px-6 sm:px-10 lg:px-24">
      <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-semibold mb-16">
        My Specialties
      </h2>

      <div className="grid gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3">
        {specialties.map((item, index) => (
          <div
            key={index}
            className="border border-[#1f2a1f] p-8 sm:p-10 flex flex-col justify-between bg-[#c0bfbc]"
          >
            <div className="space-y-6 ">
              <h3 className="text-xl text-center sm:text-2xl font-semibold">{item.title}</h3>
              <p className="text-[#3c4a3c] leading-relaxed text-base sm:text-lg">
                {item.description}
              </p>
            </div>

            {/* Animated Image */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="mt-10 flex justify-center"
            >
              <div className="relative w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
