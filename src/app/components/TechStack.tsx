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
      className="py-20 px-6 bg-gray-950 text-center text-gray-200"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <h2 className="text-3xl font-semibold mb-12 text-green-400">
        Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {techs.map((tech, index) => (
          <motion.div
            key={tech.name}
            className="flex flex-col items-center justify-center w-24 h-24 bg-gray-900 rounded-xl shadow-lg cursor-pointer"
            whileHover={{ scale: 1.1 }}
            animate={{
              boxShadow: [
                `0 0 10px rgba(34,197,94,0.6)`, // green glow
                `0 0 10px rgba(20,184,166,0.6)`, // teal glow
                `0 0 10px rgba(59,130,246,0.6)`, // blue glow
              ],
            }}
            transition={{
              duration: 3 + index * 0.2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <div className="text-4xl mb-2">{tech.icon}</div>
            <p className="text-sm">{tech.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
