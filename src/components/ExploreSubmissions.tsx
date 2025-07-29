"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ExploreSubmissions() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const submissions = [
    {
      id: 1,
      src: "/submissions/pic1.jpg",
      alt: "AI Art Submission 1",
      className: "row-span-2"
    },
    {
      id: 2,
      src: "/submissions/pic2.jpg",
      alt: "AI Art Submission 2",
      className: "row-span-1"
    },
    {
      id: 3,
      src: "/submissions/pic3.jpg",
      alt: "AI Art Submission 3",
      className: "row-span-1"
    },
    {
      id: 4,
      src: "/submissions/pic4.jpg",
      alt: "AI Art Submission 4",
      className: "row-span-1"
    },
    {
      id: 5,
      src: "/submissions/pic5.jpg",
      alt: "AI Art Submission 5",
      className: "row-span-1"
    },
    {
      id: 6,
      src: "/submissions/pic7.jpg",
      alt: "AI Art Submission 7",
      className: "row-span-2"
    },
    {
      id: 7,
      src: "/submissions/pic8.jpg",
      alt: "AI Art Submission 8",
      className: "row-span-1"
    }
  ];

  return (
    <section id="explore" className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div 
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">Explore </span>
            <span className="text-white">Submissions</span>
          </motion.h2>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[180px] sm:auto-rows-[200px]">
          {submissions.map((submission, index) => (
            <motion.div 
              key={submission.id}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${submission.className}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedImage(submission.src)}
            >
              <Image
                src={submission.src}
                alt={submission.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              
              {/* Hover Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div 
          className="flex justify-center mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <button className="px-6 sm:px-8 py-2 sm:py-3 bg-gradient-to-r from-cyan to-blue text-white font-semibold rounded-full hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:scale-105 text-sm sm:text-base">
            View All Submissions
          </button>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-2 sm:p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div 
            className="relative max-w-4xl max-h-[90vh] w-full h-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Full size submission"
              fill
              className="object-contain rounded-xl sm:rounded-2xl"
              sizes="(max-width: 640px) 95vw, 90vw"
            />
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 sm:p-2 transition-all duration-200"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
} 