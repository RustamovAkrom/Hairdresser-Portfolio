"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-28 px-6 max-w-7xl mx-auto"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-0 w-64 h-64 bg-pink-300/20 blur-[120px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-rose-400/20 blur-[140px] rounded-full -z-10"></div>

      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-16 text-center 
        bg-gradient-to-r from-pink-600 to-rose-400 text-transparent bg-clip-text drop-shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Men Haqimda
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-14 items-center">

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative group"
        >
          <div className="
            absolute -inset-4 bg-gradient-to-r from-pink-300 to-rose-400 
            opacity-30 blur-xl rounded-3xl group-hover:opacity-40 transition-all duration-500
          "></div>

          <img
            src="/images/master.jpg"
            alt="Master"
            className="
              relative rounded-3xl shadow-2xl w-full max-w-md mx-auto object-cover 
              group-hover:scale-[1.02] transition-transform duration-500
            "
          />
        </motion.div>

        {/* Text Block */}
        <motion.div
          className="flex flex-col gap-6 text-lg text-neutral-800 dark:text-neutral-200 leading-relaxed"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-[1.1rem]">
            Salom! Men{" "}
            <span className="font-semibold text-pink-600">Dilfuza</span>.
            25 yildan ortiq tajribaga ega professional ayollar sartaroshi,
            kolorist va go‘zallik ustasiman. Mening asosiy maqsadim —
            har bir mijozga individual yondashuv asosida yuqori sifatli
            servis ko‘rsatish.
          </p>

          <p className="text-[1.1rem]">
            Xizmatlarimga: soch kesish, bo‘yash, turmaklash, keratin tekislash,
            jingalak qilish, professional makiyaj, botext davolash,
            mikrobleyding, qosh shakllantirish va kelinlar uchun to‘liq obraz
            tayyorlash kiradi.
          </p>

          <p className="italic text-pink-600 font-medium">
            Maqsadim — sizni yanada chiroyli, ishonchli va yoshroq ko‘rsatish ❤️
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="
              mt-4 inline-block px-10 py-4 font-semibold rounded-2xl shadow-md
              bg-gradient-to-r from-pink-600 to-rose-500 text-white 
              hover:shadow-xl transition-all
            "
          >
            Yozilish
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
