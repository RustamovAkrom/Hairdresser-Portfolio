"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";

export default function Hero() {
  const bgImage = "/hero-bg-light.webp";

  // Scroll function
  const scrollDown = useCallback(() => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 sm:px-12 lg:px-24 bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/50 transition-colors"></div>

      {/* Content — CHAP TOMONDA */}
      <motion.div
        className="relative z-10 max-w-2xl flex flex-col"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-xl">
          Dilfuza Halikova
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-white/90 drop-shadow-lg max-w-xl">
          Universal tajribali ayollar sartaroshi • kolorist • makiyaj va prichyoska ustasi
        </p>

        <a
          href="#contact"
          className="mt-8 px-10 py-4 text-lg font-semibold bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-105 w-fit"
        >
          Ro‘yxatdan o‘tish
        </a>
      </motion.div>

      {/* Scroll Indicator — BOSILSA SCROLL QILADI */}
      <motion.button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-90 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-5 h-8 border-2 border-pink-400 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce" />
        </div>
        <span className="text-white text-sm mt-2">Pastga siljiting</span>
      </motion.button>
    </section>
  );
}
