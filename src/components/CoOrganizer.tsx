"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CoOrganizer() {
  const sponsors = [
    {
      id: 1,
      name: "EVERON",
      logo: "/everon.png",
      width: 300,
      height: 120
    },
    {
      id: 2,
      name: "UEH UNIVERSITY",
      logo: "/ueh.png", 
      width: 300,
      height: 120
    }
  ];

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Co-organizer & Sponsors
          </motion.h2>
        </motion.div>

        {/* Sponsors Grid */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {sponsors.map((sponsor, index) => (
            <motion.div 
              key={sponsor.id}
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={sponsor.width}
                  height={sponsor.height}
                  className="object-contain filter brightness-100 hover:brightness-110 transition-all duration-300"
                  priority
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 