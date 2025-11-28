"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Bot, Phone } from "lucide-react";

export default function Contact() {
  const contacts = [
    { icon: <Phone size={20} />, label: "+998 (99) 026 01 51", href: "tel:+998990260151" },
    { icon: <Bot size={20} />, label: "Telegram Kanal", href: "https://t.me/Dilfuza_gozallik_markazi" },
    { icon: <Instagram size={20} />, label: "Instagram", href: "https://www.instagram.com/kholikova9263/" },
    { icon: <Facebook size={20} />, label: "Facebook", href: "https://www.facebook.com/dilfuzakiz.halikova" },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 px-6 max-w-4xl mx-auto text-center"
    >
      {/* Decorative Background Blurs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-pink-300/20 blur-[130px] rounded-full -z-10"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-rose-400/20 blur-[130px] rounded-full -z-10"></div>

      {/* Title */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold mb-10 
          bg-gradient-to-r from-pink-600 to-rose-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Bog‘lanish
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg mb-12 text-neutral-700 dark:text-neutral-300 leading-relaxed"
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Ro‘yxatdan o‘tish yoki konsultatsiya uchun quyidagi manzillarga murojaat qilishingiz mumkin:
      </motion.p>

      {/* Contact Cards */}
      <div className="grid sm:grid-cols-2 gap-6">
        {contacts.map((c, idx) => (
          <motion.a
            key={c.label}
            href={c.href}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 p-6 bg-white/50 dark:bg-neutral-800/40 backdrop-blur-xl rounded-3xl shadow-xl border border-white/30 dark:border-neutral-700/40 font-medium text-lg transition-transform"
          >
            <div className="p-3 bg-pink-100 dark:bg-pink-900 rounded-full">
              {c.icon}
            </div>
            <span className="text-neutral-900 dark:text-white">{c.label}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
