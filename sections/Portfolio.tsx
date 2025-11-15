"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type PortfolioItem = {
  title: string;
  image: string;
  description: string;
};

export default function Portfolio() {
  const [portfolioData, setPortfolioData] = useState<PortfolioItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch("/data/portfolio.json")
      .then((res) => res.json())
      .then((data: PortfolioItem[]) => setPortfolioData(data))
      .catch(console.error);
  }, []);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);

  const showPrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + portfolioData.length) % portfolioData.length);
    }
  };

  const showNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % portfolioData.length);
    }
  };

  const showMore = () => setVisibleCount((prev) => Math.min(prev + 6, portfolioData.length));

  if (!portfolioData.length) {
    return <p className="text-center mt-20 text-gray-500 dark:text-gray-400">Loading...</p>;
  }

  return (
    <section id="portfolio" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 dark:text-white">
        Mening ishlarim
      </h2>

      {/* Сетка карточек */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {portfolioData.slice(0, visibleCount).map((item, i) => (
          <motion.div
            key={i}
            className="rounded-xl shadow-lg overflow-hidden cursor-pointer bg-white dark:bg-neutral-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl transform hover:scale-105 transition"
            onClick={() => openLightbox(i)}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src={item.image}
              alt={item.title}
              className="object-cover w-full h-64"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Кнопка Show More */}
      {visibleCount < portfolioData.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={showMore}
            className="px-6 py-3 rounded-full bg-pink-600 text-white dark:bg-pink-500 dark:text-gray-900 font-semibold shadow hover:bg-pink-700 dark:hover:bg-pink-600 transition"
          >
            Yana yuklash...
          </button>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="lightbox"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative max-w-3xl w-full mx-4">
              {/* Закрыть */}
              <button
                onClick={closeLightbox}
                className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-gray-300"
              >
                &times;
              </button>

              {/* Изображение */}
              <motion.img
                src={portfolioData[selectedIndex].image}
                alt={portfolioData[selectedIndex].title}
                className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Навигация */}
              <div
                className="absolute top-1/2 -translate-y-1/2 left-2 text-white text-3xl cursor-pointer select-none p-2 hover:bg-black/30 rounded-full"
                onClick={showPrev}
              >
                &#10094;
              </div>
              <div
                className="absolute top-1/2 -translate-y-1/2 right-2 text-white text-3xl cursor-pointer select-none p-2 hover:bg-black/30 rounded-full"
                onClick={showNext}
              >
                &#10095;
              </div>

              {/* Подпись */}
              <div className="mt-2 text-center text-white">
                <h3 className="font-semibold text-lg">{portfolioData[selectedIndex].title}</h3>
                <p className="text-sm">{portfolioData[selectedIndex].description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
