"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "Do you take insurance?",
    answer:
      "I am an out-of-network provider, but I can provide a superbill for possible reimbursement.",
  },
  {
    question: "What are your rates?",
    answer:
      "Individual therapy sessions are $150 per session. Limited sliding scale spots are available.",
  },
  {
    question: "Do you have any openings?",
    answer:
      "Availability changes weekly. Reach out and I’ll respond within 24–48 hours.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row bg-[#EFEAE3] overflow-hidden">

      {/* LEFT IMAGE SIDE */}
      <div className="w-full lg:w-1/2 flex justify-center items-center py-16 lg:py-0">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="
            relative
            w-[280px] sm:w-[360px] md:w-[420px] lg:w-[480px]
            h-[360px] sm:h-[460px] md:h-[520px] lg:h-[600px]
            overflow-hidden
            rounded-t-[220px]   /* semicircle TOP */
            rounded-b-none
            shadow-lg
          "
        >
          <Image
            src="/new-faq.png"
            alt="Decor"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* RIGHT FAQ SIDE */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-20">

        {/* HEADING ANIMATION */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-semibold text-[#1f2a1f] mb-12"
        >
          FAQs
        </motion.h2>

        <div className="border-t border-[#1f2a1f]/40">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-b border-[#1f2a1f]/40 py-6 cursor-pointer"
                onClick={() =>
                  setOpenIndex(isOpen ? null : index)
                }
              >
                <div className="flex items-center gap-6">
                  <div className="text-2xl w-6">
                    {isOpen ? "–" : "+"}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-medium text-[#1f2a1f]">
                    {faq.question}
                  </h3>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden pl-12 pr-4 text-[#1f2a1f]/80 text-base sm:text-lg leading-relaxed"
                >
                  <div className="pt-4">{faq.answer}</div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
