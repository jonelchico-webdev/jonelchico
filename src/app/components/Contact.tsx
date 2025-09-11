"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export const ContactSection = () => {
  const contacts = [
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: "mailto:jonelrocchico@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/jonelchico",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/jonelchico-webdev",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="relative py-24 px-6 bg-gray-900 text-gray-200 text-center overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Background blobs */}
      <div className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-green-500 opacity-20 rounded-full filter blur-3xl -translate-x-1/2 -translate-y-1/2 animate-blob"></div>
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-blue-500 opacity-20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>

      <h2 className="text-3xl font-semibold mb-6 text-green-400">Contact Me</h2>
      <p className="mb-12 max-w-xl mx-auto text-gray-300">
        Let’s build something amazing together. Reach out via email or connect
        with me on LinkedIn or GitHub.
      </p>

      <div className="flex flex-wrap justify-center gap-8 z-10 relative">
        {contacts.map((contact) => (
          <motion.a
            key={contact.name}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center w-28 h-28 bg-white/5 backdrop-blur-md rounded-xl shadow-lg cursor-pointer hover:scale-105 hover:shadow-green-400/50 transition-all duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="text-4xl mb-2 text-green-400">{contact.icon}</div>
            <p className="text-sm">{contact.name}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};
