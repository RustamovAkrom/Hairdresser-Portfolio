"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-neutral-900 dark:text-white transition-colors duration-500">
        Bog`lanish
      </h2>

      <p className="text-lg mb-6 text-neutral-700 dark:text-neutral-300 transition-colors duration-500">
       Royhatga yozilish va konsultatsiya uchun yozinglar:
      </p>

      <div className="flex flex-col gap-4 text-xl">
        <a className="text-pink-600 hover:text-pink-700 transition-colors" href="tel:+998990260151">📞 +998 99 (95) 026 01 51</a>
        <a className="text-pink-600 hover:text-pink-700 transition-colors" href="https://t.me/halikova_dilfuza">Telegram</a>
      </div>
    </section>
  );
}
