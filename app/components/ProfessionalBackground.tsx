"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Education",
    content: `Doctor of Psychology in Clinical Psychology – Graduate School of Psychology, Malibu, California  
              Bachelor of Arts in Psychology – Pepperdine University, Malibu, California.`,
  },
  {
    title: "Licensure",
    content: `Licensed Clinical Psychologist (PsyD) – State of California 
              EMDR Trained – Evidence-based trauma therapy certification`,
  },
  {
    title: "Certifications",
    content: `Certified in Cognitive Behavioral Therapy (CBT)  
              EMDR Trained – For trauma processing and stabilization.
              Mindfulness-Based Stress Reduction (MBSR) Training`,
  },
];

export default function ProfessionalBackground() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen bg-[#E5E0DA] px-6 sm:px-12 lg:px-24 py-24">
      
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1f2a1f] text-center mb-16"
      >
        My Professional Background
      </motion.h2>

      <div className="max-w-4xl mx-auto border-t border-[#1f2a1f]/40">
        {sections.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border-b border-[#1f2a1f]/40 py-6 cursor-pointer"
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl sm:text-2xl font-medium text-[#1f2a1f]">
                  {item.title}
                </h3>

                <div className="text-2xl w-6 text-right">
                  {isOpen ? "–" : "+"}
                </div>
              </div>

              <motion.div
                initial={false}
                animate={{
                  height: isOpen ? "auto" : 0,
                  opacity: isOpen ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden text-[#1f2a1f]/80 text-base sm:text-lg leading-relaxed"
              >
                <div className="pt-4 whitespace-pre-line">
                  {item.content}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
