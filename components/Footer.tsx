"use client";

import { Mail, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-16 bg-gradient-to-t from-pink-50 dark:from-black/80 to-white dark:to-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-pink-600 dark:text-pink-400 mb-2">
            HairStyler
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            © {new Date().getFullYear()} Barcha huquqlar himoyalangan.
          </p>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm">
            Ish vaqti: 08:00 - 20:00
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a href="#about" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
            Men Haqimda
          </a>
          <a href="#services" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
            Hizmatlar
          </a>
          <a href="#portfolio" className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
            Ishlarim
          </a>
          <a href="#contact" className="flex items-center gap-2 hover:text-pink-500 dark:hover:text-pink-400 transition-colors">
            <Mail size={16} /> Kontaktlar
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300 transition">
            <Instagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-pink-600 dark:text-pink-400 hover:text-pink-500 dark:hover:text-pink-300 transition">
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
