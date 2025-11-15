"use client";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6 text-neutral-900 dark:text-white transition-colors duration-500">
        Контакты
      </h2>

      <p className="text-lg mb-6 text-neutral-700 dark:text-neutral-300 transition-colors duration-500">
        Для записи и консультации пишите:
      </p>

      <div className="flex flex-col gap-4 text-xl">
        <a className="text-pink-600 hover:text-pink-700 transition-colors" href="tel:+998901112233">📞 +998 90 111 22 33</a>
        <a className="text-pink-600 hover:text-pink-700 transition-colors" href="https://t.me/yourtelegram">Telegram</a>
        <a className="text-pink-600 hover:text-pink-700 transition-colors" href="https://wa.me/998901112233">WhatsApp</a>
        <a className="text-pink-600 hover:text-pink-700 transition-colors" href="#">Instagram</a>
      </div>
    </section>
  );
}
