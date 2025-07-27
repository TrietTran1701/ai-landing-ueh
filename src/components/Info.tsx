"use client";

import { motion } from "framer-motion";

export default function Info() {
  return (
    <section className="px-6 pb-20">
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
            className="text-xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
              The 1st World AI-Powered Image
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent">
              & Visual Awards
            </span>
          </motion.h2>
          <motion.p
            className="text-[#BFBFBF] text-xl font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Visions of the Future: Imagined by AI, Inspired by Humanity
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20">
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              className="text-white text-base leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              What does the future of cities, nature, human connection, or
              identity look like through the lens of AI? How will AI redefine
              industries like education, medicine, fashion, or architecture? How
              will it change the way we live, feel, create—and dream?
            </motion.p>

            <motion.p
              className="text-white text-base leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              We invite creators to explore how artificial intelligence is
              reshaping the core functions of human life: from how we see and
              interpret reality, to how we create, collaborate, and communicate,
              and ultimately, how we live and find meaning.
            </motion.p>

            <motion.p
              className="text-white text-base leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              How do AI-generated visuals challenge our understanding of beauty,
              truth, or originality? What new forms of labor, emotion,
              connection, and creativity emerge when AI becomes part of our
              daily tools, workplaces, and personal spaces?
            </motion.p>

            <motion.p
              className="text-white text-base leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              This is a space to show how AI transforms the familiar into
              something unseen yet intuitively human. Whether you explore
              automated futures, augmented senses, hybrid identities, or
              machine-enabled dreams.
            </motion.p>
          </motion.div>

          {/* Right Column - Aligned Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.p
              className="text-white text-base leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              This award is not only a celebration of technological creativity
              but also a call to the emerging generation of AI artists and
              storytellers to co-author the visual language of the future.
            </motion.p>

            <motion.p
              className="text-white text-base leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Whether your submission is poetic or practical, surreal or
              data-driven, we encourage you to push the boundaries of what's
              possible with generative tools. Show us the future world as
              imagined by you—and your AI.
            </motion.p>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.h3
                className="bg-gradient-to-r from-cyan to-blue bg-clip-text text-transparent text-4xl md:text-3xl lg:text-3xl font-bold leading-tight mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                AI is not just a tool—it's a new lens through which we perceive
                the world
              </motion.h3>

              <motion.p
                className="text-[#BFBFBF] text-xl font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                From how we see and interpret reality, to how we create,
                collaborate, and communicate, and ultimately, how we live and
                find meaning.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
