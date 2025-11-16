"use client";

import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-neutral-100 dark:bg-neutral-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-5 text-center flex flex-col items-center gap-4">
        <h3 className="text-2xl font-bold dark:text-white">HairStyler</h3>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base">
          © {new Date().getFullYear()} Barcha huquqlar himoyalangan.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 text-pink-500">
          <a href="#about" className="hover:text-pink-400 transition-colors">Men Haqimda</a>
          <a href="#services" className="hover:text-pink-400 transition-colors">Hizmatlar</a>
          <a href="#portfolio" className="hover:text-pink-400 transition-colors">Ishlarim</a>
          <a href="#contact" className="flex items-center gap-1 hover:text-pink-400 transition-colors">
            <Mail size={16} /> Kontaktlar
          </a>
        </div>

        <p className="text-neutral-600 dark:text-neutral-400 text-sm mt-4">
          Telefon: +998(99)026-01-51 | Ish vaqti: 08:00 - 20:00
        </p>
      </div>
    </footer>
  );
}
