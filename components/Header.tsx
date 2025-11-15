"use client";

import { useState } from "react";
import { ModeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { title: "Master haqida", href: "#about" },
    { title: "Hizmatlar", href: "#services" },
    { title: "Ishlar", href: "#portfolio" },
    { title: "Bog`lanish", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/50 dark:bg-black/30 z-50 border-b border-neutral-200 dark:border-neutral-800 transition-colors">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide dark:text-white">
          AYOLAR SARTAROSHI
        </h1>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-7 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* CTA + Theme Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:block bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition"
          >
            Royhatga yozilish
          </a>
          <ModeToggle />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-neutral-700 transition"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-16 left-0 w-full bg-white dark:bg-black/90 backdrop-blur-md border-t border-neutral-200 dark:border-neutral-800 transition-all overflow-hidden ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-4 px-5 py-6 text-lg font-medium">
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
            className="bg-pink-500 text-white px-4 py-2 rounded-full text-center hover:bg-pink-600 transition"
          >
            Royhatga yozilish
          </a>
        </nav>
      </div>
    </header>
  );
}
