"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OfficeSection() {
  return (
    <section className="w-full bg-[#fbf6ef] px-6 sm:px-12 lg:px-24 py-24">
      <div className="flex flex-col lg:flex-row items-center gap-16">

        {/* LEFT – IMAGES (comes first on mobile) */}
        <div className="w-full lg:w-1/2 order-1 flex justify-center">
          <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: true }}
  className="grid grid-cols-2 gap-6 w-full max-w-[520px]"
>
  {/* Image 1 */}
  <div className="relative w-full aspect-[3/4] rounded-t-full overflow-hidden">
    <Image
      src="/office1.jpg"
      alt="Office interior"
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-cover"
    />
  </div>

  {/* Image 2 */}
  <div className="relative w-full aspect-[3/4] rounded-t-full overflow-hidden translate-y-10">
    <Image
      src="/office2.jpg"
      alt="Therapy office"
      fill
      sizes="(max-width: 1024px) 100vw, 50vw"
      className="object-cover"
    />
  </div>
</motion.div>
 </div>

        {/* RIGHT – TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 order-2 text-center lg:text-left"
        >
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#1f2a1f]">
            A calm, welcoming space
          </h2>

          <p className="mt-6 text-lg sm:text-xl text-[#3c4a3c] leading-relaxed max-w-xl mx-auto lg:mx-0">
            My office is designed to be a peaceful and grounding environment
            where you can feel comfortable, supported, and at ease from the
            moment you arrive.
          </p>

          <p className="mt-6 text-lg sm:text-xl text-[#3c4a3c] leading-relaxed max-w-xl mx-auto lg:mx-0">
            Soft natural light, warm textures, and thoughtful details help
            create a space that encourages openness, reflection, and healing.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
