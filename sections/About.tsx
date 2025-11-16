"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-14 text-center text-neutral-900 dark:text-white"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Men Haqimda
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image */}
        <motion.img
          src="/images/master.jpg"
          alt="Master"
          className="rounded-3xl shadow-xl w-full max-w-md mx-auto object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        />

        {/* Text Block */}
        <motion.div
          className="flex flex-col gap-6 text-neutral-900 dark:text-white leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Salom! Men <span className="font-semibold text-pink-500">Dilfuza</span>. 
            25 yildan ortiq tajribaga ega professional ayollar sartaroshi, kolorist va 
            go‘zallik ustasiman. Har bir mijozimga individual yondashuv bilan xizmat ko‘rsatishni 
            o‘zimning eng asosiy printsipim deb bilaman.
          </p>

          <p>
            Mening xizmatlarimga soch kesish, bo‘yash, turmaklash, professional makiyaj, 
            keratin tekislash, jingalak qilish, sartaroshlik kimyosi, mikrobleyding, 
            qoshni shakllantirish, botext davolash, kelinlar uchun to‘liq obraz tayyorlash 
            va yana ko‘plab xizmatlar kiradi.
          </p>

          <p>
            Maqsadim — sizni yanada chiroyli, ishonchli va yoshroq ko‘rsatish ❤️
          </p>

          <a
            href="#contact"
            className="mt-4 inline-block px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-2xl shadow-lg transition-transform hover:scale-105 w-max"
          >
            Yozilish
          </a>
        </motion.div>
      </div>
    </section>
  );
}
