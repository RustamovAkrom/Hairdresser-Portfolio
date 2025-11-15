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
        Men Haqimda
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
            Salom! Mening ismim <span className="font-semibold text-pink-600">Dilfuza</span>, mening yoshim 40 da va sartoroshlik sohasida 25+ yildan beri shu sohani har hil yonalishlaini chuqur organib ishlab kelyapman.
          </p>
          <p>
            Mening asosiy tajribam shulardan iborat: soch kesish, makiyash, turmaklash, kelin chiqarish, haftalik qosh boyash, yillk rastishovka chizish, qoshlarga struktura bilan forma berish, mikrobleyding, yillik qosh chizish, 6 oylik himiya, viozaivka, 6 oylik jingalak qilish, keratin soch tekislash 3-6 oygacha, kuygan va zararlangan sochlar uchun vitaminli botext soch tekislash, yosh bolalar strijkasi, soch rangi boyicha kalorist.

          </p>
          <a
            href="#contact"
            className="mt-4 inline-block px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-2xl shadow-md transition transform hover:scale-105 w-max text-center"
          >
            Yozilish
          </a>
        </motion.div>
      </div>
    </section>
  );
}
