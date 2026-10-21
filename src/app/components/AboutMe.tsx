"use client";

import { motion } from "framer-motion";

export const AboutMeSection = () => {
  return (
    <motion.section
      id="about"
      className="border-y border-white/10 bg-[#101410] px-6 py-20 text-[#f2f4ef] sm:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div>
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#c7f36b]">A little about me</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Curious by nature.<br />Engineer by craft.</h2>
        </div>
        <div>
          <p className="text-base leading-8 text-white/70 sm:text-lg">
            I’m a full-stack developer with 6+ years of experience building
            scalable and efficient web applications. I specialize in React,
            Next.js, and TypeScript, creating solutions that pair clean
            engineering with thoughtful user experiences.
          </p>
          <p className="mt-4 text-base leading-8 text-white/55">
            Beyond development, I’m interested in financial technology,
            artificial intelligence, and side projects that push me to think
            differently about technology.
          </p>
        </div>
      </div>
    </motion.section>
  );
};
