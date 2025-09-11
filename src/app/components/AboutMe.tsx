"use client";

import { motion } from "framer-motion";

export const AboutMeSection = () => {
  return (
    <motion.section
      id="about"
      className="py-20 px-6 bg-gray-900 text-center text-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold mb-6 text-green-400">About Me</h2>
      <p className="max-w-2xl mx-auto leading-relaxed text-gray-300">
        I’m a full-stack developer with 6+ years of experience building scalable
        and efficient web applications. I specialize in React, Next.js, and
        TypeScript, creating solutions that combine clean code, modern design,
        and user-focused experiences. Beyond development, I’m passionate about
        exploring financial technology, artificial intelligence, trading, and
        side projects that push me to innovate and think differently about
        technology.
      </p>
    </motion.section>
  );
};
