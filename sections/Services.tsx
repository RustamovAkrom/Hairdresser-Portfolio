"use client";

import { motion } from "framer-motion";
import { Scissors, Wand2, Droplet, Paintbrush } from "lucide-react";
import { useEffect, useState } from "react";

type ServiceItem = {
  title: string;
  desc: string;
  icon: string;
};

const iconMap: Record<string, any> = { Scissors, Wand2, Droplet, Paintbrush };

export default function Services() {
  const [servicesData, setServicesData] = useState<ServiceItem[]>([]);

  useEffect(() => {
    fetch("/data/services.json")
      .then((res) => res.json())
      .then((data: ServiceItem[]) => setServicesData(data))
      .catch(console.error);
  }, []);

  if (!servicesData.length) return <p className="text-center mt-20 text-gray-500 dark:text-gray-400">Loading...</p>;

  return (
    <section id="services" className="section-reveal py-24 px-6 sm:px-12 lg:px-24 max-w-6xl mx-auto">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-12 text-center text-neutral-900 dark:text-white transition-colors duration-500"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Hizmatlar
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesData.map((s, idx) => {
          const Icon = iconMap[s.icon];
          return (
            <motion.div
              key={s.title}
              className="flex flex-col items-start p-6 bg-gradient-to-tr from-white/80 to-white/60 dark:from-neutral-800/80 dark:to-neutral-700/70 rounded-3xl shadow-lg border border-neutral-200 dark:border-neutral-700 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <div className="mb-4 p-4 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full inline-flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300">
                <Icon size={32} className="text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white transition-colors duration-500">
                {s.title}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-300 transition-colors duration-500">
                {s.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
