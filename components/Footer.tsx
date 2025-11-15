export default function Footer() {
  return (
    <footer className="py-8 mt-20 bg-neutral-100 dark:bg-neutral-900">
      <div className="max-w-6xl mx-auto px-5 text-center">
        
        <h3 className="text-xl font-semibold dark:text-white mb-4">HairStyler</h3>
        
        <p className="text-neutral-600 dark:text-neutral-400">
          © {new Date().getFullYear()} Все права защищены.  
          Портфолио парикмахера-стилиста.
        </p>

        <div className="flex justify-center gap-5 mt-4">
          <a href="https://t.me/your_mom" className="text-pink-500 hover:text-pink-400">Telegram</a>
          <a href="https://instagram.com/your_mom" className="text-pink-500 hover:text-pink-400">Instagram</a>
          <a href="#contact" className="text-pink-500 hover:text-pink-400">Контакты</a>
        </div>
      </div>
    </footer>
  );
}
