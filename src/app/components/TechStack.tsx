"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiMui,
  SiStripe,
  SiSanity,
} from "react-icons/si";

export const TechStackSection = () => {
  const techs = [
    { name: "React", icon: <FaReact className="text-blue-400" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "MUI", icon: <SiMui className="text-blue-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
    { name: "Stripe", icon: <SiStripe className="text-purple-400" /> },
    { name: "Sanity", icon: <SiSanity className="text-green-400" /> },
  ];

  return (
    <motion.section
      id="tech"
      className="border-y border-white/10 bg-[#101410] px-6 py-20 text-[#f2f4ef] sm:py-24"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#c7f36b]">Tools of the trade</p>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Technologies I work with</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {techs.map((tech) => (
          <motion.div
            key={tech.name}
            className="flex min-h-20 items-center gap-3 rounded-xl border border-white/10 bg-[#0b0e0c] px-4 py-3 transition-colors hover:border-[#c7f36b]/35"
          >
            <span aria-hidden="true" className="text-2xl">{tech.icon}</span>
            <p className="text-sm font-medium text-white/80">{tech.name}</p>
          </motion.div>
        ))}
        </div>
      </div>
    </motion.section>
  );
};
