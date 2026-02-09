"use client";
import { motion } from "framer-motion";
export default function AddressSection() {
  return (
    <section className="bg-[#fbf6ef] text-[#243a1d] border-t border-[#243a1d]">
      {" "}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-20">
        {" "}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-16"
        >
          {" "}
          {/* Left */}{" "}
          <div className="space-y-6 text-center md:text-left">
            {" "}
            <h2 className="text-4xl font-semibold tracking-tight">
              {" "}
              Get Better{" "}
            </h2>{" "}
            <p className="text-lg leading-relaxed">
              {" "}
              123 Example Road <br /> Santa Monica, CA{" "}
            </p>{" "}
            <div className="space-y-2">
              {" "}
              <a
                href="mailto:email@example.com"
                className="block underline underline-offset-4 hover:opacity-70 transition"
              >
                {" "}
                email@example.com{" "}
              </a>{" "}
              <a
                href="tel:5555555555"
                className="block underline underline-offset-4 hover:opacity-70 transition"
              >
                {" "}
                (555) 555-5555{" "}
              </a>{" "}
            </div>{" "}
          </div>{" "}
          {/* Center */}{" "}
          <div className="space-y-6 text-center">
            {" "}
            <h3 className="text-3xl font-medium">Hours</h3>{" "}
            <p className="text-lg">
              {" "}
              Monday – Friday <br /> 10am – 6pm{" "}
            </p>{" "}
          </div>{" "}
          {/* Right */}{" "}
          <div className="space-y-6 text-center md:text-right">
            {" "}
            <h3 className="text-3xl font-medium">Find</h3>{" "}
            <ul className="space-y-3 text-lg">
              {" "}
              {["Home", "Contact", "Blog"].map((item) => (
                <li key={item}>
                  {" "}
                  <a
                    href="#"
                    className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0 after:bg-[#243a1d] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {" "}
                    {item}{" "}
                  </a>{" "}
                </li>
              ))}{" "}
            </ul>{" "}
          </div>{" "}
        </motion.div>{" "}
      </div>{" "}
    </section>
  );
}
