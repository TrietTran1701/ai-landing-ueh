"use client";

import { motion } from "framer-motion";

export default function CompetitionCategories() {
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
            <span className="text-white">Competition </span>
            <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">Categories</span>
          </motion.h2>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image Category */}
            <motion.div 
              className="border border-gray-600 rounded-2xl p-8 flex-1 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-cyan flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white text-lg font-medium">Image</span>
              </div>
              
              <div className="flex-1 flex flex-col">
                <h3 className="text-white text-2xl font-bold mb-4">Conceptual Illustration & Design</h3>
                
                <p className="text-[#BFBFBF] text-base leading-relaxed mb-6">
                  A broad category for visual metaphors, speculative imagery, and abstract interpretations of the future, identity, and technology.
                </p>
                
                <div className="mb-6">
                  <p className="text-white font-semibold mb-3">This includes:</p>
                  <ul className="text-[#BFBFBF] text-sm space-y-1">
                    <li>• Portraits of the Future (human/post-human/synthetic identity)</li>
                    <li>• Futuristic Landscapes & Architecture (urban/ecological/off-world environments)</li>
                    <li>• Fashion & Character Design (avatars, metaverse fashion, narrative characters)</li>
                  </ul>
                </div>
                
                <div className="mb-8">
                  <p className="text-white font-semibold mb-2">Judging Criteria:</p>
                  <p className="text-[#BFBFBF] text-sm">Originality, concept clarity, design vision, style coherence, emotional resonance.</p>
                </div>
                
                <div>
                  <h3 className="text-white text-2xl font-bold mb-4">AI Collage & Mixed Media Art</h3>
                  
                  <p className="text-[#BFBFBF] text-base leading-relaxed mb-6">
                    Works that integrate multiple AI models or hybrid workflows (AI + human post-processing) to create rich, layered visuals. This encourages experimentation and process-driven creativity.
                  </p>
                  
                  <div>
                    <p className="text-white font-semibold mb-2">Judging Criteria:</p>
                    <p className="text-[#BFBFBF] text-sm">Technique, integration, narrative expression, innovation.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Video Category */}
            <motion.div 
              className="border border-gray-600 rounded-2xl p-8 flex-1 flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 rounded-full border-2 border-cyan flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-white text-lg font-medium">Video</span>
              </div>
              
              <div className="flex-1 flex flex-col space-y-8">
                <div>
                  <h3 className="text-white text-2xl font-bold mb-4">Cinematic AI & Narrative Expression</h3>
                  
                  <p className="text-[#BFBFBF] text-base leading-relaxed mb-6">
                    A broad category for visual storytelling in all forms—from short films to educational and music-driven pieces.
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-white font-semibold mb-3">This includes:</p>
                    <ul className="text-[#BFBFBF] text-sm space-y-1">
                      <li>• AI Short Films (narrative with or without dialogue)</li>
                      <li>• AI Music Videos / Sound-Driven Visuals</li>
                      <li>• Educational & Concept Videos (AI, future society, ethics, etc.)</li>
                    </ul>
                  </div>
                  
                  <div className="mb-0">
                    <p className="text-white font-semibold mb-2">Judging Criteria:</p>
                    <p className="text-[#BFBFBF] text-sm">Storytelling, emotional impact, rhythm syncing, clarity of message, visual coherence.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white text-2xl font-bold mb-4">Ad Creatives & Product Visions</h3>
                  
                  <p className="text-[#BFBFBF] text-base leading-relaxed mb-6">
                    AI-generated visual promotions, campaign concepts, or branding videos for real or imagined products. Bold, persuasive, and viral storytelling encouraged.
                  </p>
                  
                  <div className="mb-0">
                    <p className="text-white font-semibold mb-2">Judging Criteria:</p>
                    <p className="text-[#BFBFBF] text-sm">Creativity, message impact, design quality, future-readiness.</p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-white text-2xl font-bold mb-4">AI Animation (2D & 3D)</h3>
                  
                  <p className="text-[#BFBFBF] text-base leading-relaxed mb-6">
                    Original animated shorts or visual experiments using AI-generated or AI-assisted 2D/3D animation workflows.
                  </p>
                  
                  <div>
                    <p className="text-white font-semibold mb-2">Judging Criteria:</p>
                    <p className="text-[#BFBFBF] text-sm">Animation technique, originality, visual innovation, production quality.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 