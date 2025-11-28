"use client";

import { useState } from "react";
import { ModeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { title: "Men Haqimda", href: "#about" },
    { title: "Hizmatlar", href: "#services" },
    { title: "Ishlarim", href: "#portfolio" },
    { title: "Bog`lanish", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 dark:bg-black/40 border-b border-neutral-200 dark:border-neutral-800 transition-colors shadow-sm">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-wide text-pink-600 dark:text-pink-400">
          HairStyler
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-neutral-900 dark:text-white hover:text-pink-500 dark:hover:text-pink-400 transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-pink-500 hover:after:w-full after:transition-all"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* CTA & Theme toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-block bg-pink-500 text-white px-5 py-2 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-transform font-semibold"
          >
            Royhatga yozilish
          </a>
          <ModeToggle />

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-white dark:bg-black/90 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800"
          >
            <div className="flex flex-col px-6 py-6 gap-5 text-lg font-medium">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
                >
                  {link.title}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-pink-500 text-white px-4 py-2 rounded-full text-center hover:bg-pink-600 transition font-semibold"
              >
                Royhatga yozilish
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
