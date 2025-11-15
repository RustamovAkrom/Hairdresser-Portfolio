"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-12 text-center text-neutral-900 dark:text-white transition-colors duration-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Обо мне
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src="/images/master.jpg"
          alt="Master"
          className="rounded-2xl shadow-lg w-full max-w-sm mx-auto object-cover"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        <motion.div
          className="flex flex-col gap-6 text-neutral-900 dark:text-white transition-colors duration-500"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Привет! Я <span className="font-semibold text-pink-600">Dilfuza</span>, профессиональный парикмахер-стилист с более чем 7-летним опытом.
          </p>
          <p>
            Специализируюсь на <span className="text-pink-600 font-semibold">сложных техниках окрашивания</span>, стрижках и укладках.
          </p>
          <p>
            Мой подход — индивидуальная работа с каждым клиентом: подбор цвета, формы и уходов. 
          </p>
          <a
            href="#contact"
            className="mt-4 inline-block px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-2xl shadow-md transition transform hover:scale-105 w-max text-center"
          >
            Записаться
          </a>
        </motion.div>
      </div>
    </section>
  );
}
