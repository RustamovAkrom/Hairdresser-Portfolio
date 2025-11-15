"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const bgImage = "/hero-bg-light.webp"; // яркий фон (один для всех тем)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 sm:px-12 lg:px-24 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay для читаемости текста */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/30 transition-colors duration-500"></div>

      {/* Контент */}
      <motion.div
        className="relative z-10 max-w-2xl flex flex-col gap-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white drop-shadow-lg">
          Dilfuza Halikova
        </h1>
        <p className="text-lg sm:text-xl text-white/90 drop-shadow-md">
          Universal tajribali ayolar soch sartaroshi • master • kolorist • oz ishini ustasi
        </p>
        <a
          href="#contact"
          className="mt-6 px-8 py-4 text-lg font-semibold bg-pink-600 hover:bg-pink-700 text-white rounded-2xl shadow-lg transition transform hover:scale-105 w-max"
        >
          Записаться
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-6 border-b-4 border-pink-500 rounded-full animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, duration: 1 }}
      />
    </section>
  );
}
