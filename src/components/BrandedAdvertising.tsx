"use client";

import { motion } from "framer-motion";

export default function BrandedAdvertising() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <motion.div 
          className="mb-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">Branded Advertising </span>
            <span className="text-white">Competition</span>
          </motion.h2>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Briefing by Sponsors */}
          <motion.div 
            className="border border-gray-600 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-cyan flex items-center justify-center mr-4">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
            </div>
            
            <h3 className="text-white text-2xl font-bold mb-4">Briefing by Sponsors</h3>
            
            <p className="text-[#BFBFBF] text-base leading-relaxed mb-6">
              Each participating sponsor provides a clear creative brief outlining the desired message, product positioning, visual tone, and any key themes.
            </p>
            
            <div>
              <h4 className="text-white text-xl font-bold mb-4">Eligibility</h4>
              <p className="text-[#BFBFBF] text-base mb-3">Open to:</p>
              <ul className="text-[#BFBFBF] text-sm space-y-1">
                <li>• Individual creators</li>
                <li>• Teams (up to 3 members)</li>
              </ul>
            </div>
          </motion.div>

          {/* Card 2 - Submission Format */}
          <motion.div 
            className="border border-gray-600 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-cyan flex items-center justify-center mr-4">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
            </div>
            
            <h3 className="text-white text-2xl font-bold mb-6">Submission Format</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-white font-semibold mb-3">Image Track:</h4>
                <ul className="text-[#BFBFBF] text-sm space-y-1">
                  <li>• Poster, print ad, or digital banner concept</li>
                  <li>• Submit 1–2 visuals</li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-white font-semibold mb-3">Video Track:</h4>
                <ul className="text-[#BFBFBF] text-sm space-y-1">
                  <li>• 15–60 second short-form advertisement</li>
                </ul>
              </div>
              
              <div className="mt-6 py-4">
                <p className="text-white font-semibold text-sm">
                  Each participant may enter one or both categories.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Incentives & Recognition */}
          <motion.div 
            className="border border-gray-600 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 rounded-full border-2 border-cyan flex items-center justify-center mr-4">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
            </div>
            
            <h3 className="text-white text-2xl font-bold mb-6">Incentives & Recognition</h3>
            
            <ul className="text-[#BFBFBF] text-base space-y-4">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <div>
                  <span className="text-white font-semibold">Cash Prizes</span> awarded to winners per sponsor category
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan mr-2">•</span>
                <div>
                  <span className="text-white font-semibold">Real-world execution</span> of selected works by the sponsor
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan mr-2">•</span>
                <div>
                  Exposure via sponsor & award social channels
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-cyan mr-2">•</span>
                <div>
                  Potential long-term collaboration with sponsor brands
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 