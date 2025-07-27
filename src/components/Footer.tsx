"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const handleSubmitClick = () => {
    // Scroll to the WorkSubmission component
    const submitSection = document.querySelector('form');
    if (submitSection) {
      submitSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative">
      {/* Thin Radial Gradient Top Border */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[983px] max-w-[90vw] h-px" 
           style={{ 
             background: 'radial-gradient(ellipse at center, #FF316F 0%, #FF317B 50%, transparent 100%)',
             opacity: 0.8
           }}>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 py-8 flex items-center justify-center">
        <motion.div 
          className="flex flex-col md:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Left Side - Tagline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <p className="text-[#BFBFBF] text-lg md:text-xl font-medium text-center md:text-left">
              Your imagination, our first milestone
            </p>
          </motion.div>

          {/* Right Side - Submit Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={handleSubmitClick}
              className="px-8 py-3 bg-gradient-to-r from-cyan to-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Submit now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
} 