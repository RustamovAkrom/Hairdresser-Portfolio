"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";

export default function Hero() {
  const bgImage = "/hero-bg-light.webp";

  const scrollDown = useCallback(() => {
    const nextSection = document.getElementById("about");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 sm:px-12 lg:px-24 overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/50 transition-colors"></div>

      {/* Decorative Background Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300/30 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute -bottom-24 -right-10 w-96 h-96 bg-rose-400/30 blur-[160px] rounded-full -z-10"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl flex flex-col gap-6"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight drop-shadow-2xl">
          Dilfuza Halikova
        </h1>

        <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-white/90 drop-shadow-lg max-w-xl">
          Universal tajribali ayollar sartaroshi • kolorist • makiyaj va prichyoska ustasi
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 w-fit px-12 py-4 text-lg font-semibold bg-gradient-to-r from-pink-600 to-rose-500 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all"
        >
          Ro‘yxatdan o‘tish
        </motion.a>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollDown}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-90 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex items-start justify-center p-1">
          <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" />
        </div>
        <span className="text-white text-sm mt-2 font-medium drop-shadow-md">Pastga siljiting</span>
      </motion.button>
    </section>
  );
}
