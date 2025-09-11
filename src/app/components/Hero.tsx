"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center h-screen px-6 bg-gradient-to-b from-gray-900 via-gray-950 to-black overflow-hidden">
      {/* Dynamic Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [100, -100, 100], y: [50, -50, 50] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Avatar */}
        <motion.div
          className="relative w-44 h-44 rounded-full overflow-hidden shadow-lg mb-6 cursor-pointer"
          animate={{
            boxShadow: [
              "0 0 20px rgba(34,197,94,0.6)", // green-500 glow
              "0 0 20px rgba(20,184,166,0.6)", // teal-500 glow
              "0 0 20px rgba(59,130,246,0.6)", // blue-500 glow
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse" }}
          whileHover={{
            scale: 1.05,
            rotateX: 5,
            rotateY: -5,
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Image
            src="/avatar.jpg"
            alt="Jonel Chico"
            width={176}
            height={176}
            className="object-cover"
          />
        </motion.div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 via-teal-400 to-blue-400 bg-clip-text text-transparent mb-2">
          Jonel Chico
        </h1>

        {/* Role / Title */}
        <motion.p
          className="text-xl md:text-2xl font-semibold text-teal-300 mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Software Engineer
        </motion.p>

        {/* Tagline */}
        <p className="text-lg text-gray-300">
          Dedicated to delivering reliable, user-focused digital solutions.
        </p>
      </motion.div>

      {/* Scroll Arrow */}
      <motion.div
        className="absolute bottom-10 cursor-pointer z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-8 h-8 text-gray-300"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
};
