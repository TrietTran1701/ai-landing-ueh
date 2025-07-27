"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Who can participate in the competition?",
      answer: "The competition is open to individual creators and teams of up to 3 members. Participants must be 18 years or older and can be from anywhere in the world. Both amateur and professional creators are welcome to submit their AI-generated works."
    },
    {
      question: "Do I need to use a specific AI tool or platform?",
      answer: "No, you can use any AI tool or platform of your choice. This includes popular tools like Midjourney, DALL-E, Stable Diffusion, RunwayML, or any other AI-powered creative software. We encourage experimentation and innovation with different tools and techniques."
    },
    {
      question: "Can I submit to both the image and video tracks?",
      answer: "Yes, participants are welcome to submit entries to both the image and video tracks. Each track will be judged separately, giving you multiple opportunities to showcase your creativity and win in different categories."
    },
    {
      question: "How will my work be judged?",
      answer: "Submissions will be evaluated by our expert panel of judges based on criteria including originality, technical execution, artistic vision, creativity, and overall impact. The judging process includes both online evaluation and a final offline judging session."
    },
    {
      question: "Will my creative rights be protected?",
      answer: "Yes, you retain all rights to your original work. By submitting, you grant us permission to display your work for promotional purposes related to the competition. We respect intellectual property and will always credit your work appropriately."
    },
    {
      question: "What are the prizes?",
      answer: "Winners will receive cash prizes, with amounts varying by sponsor category. Additionally, selected works may be executed in real-world applications by sponsors, winners get exposure through our social channels, and there are opportunities for long-term collaboration with sponsor brands."
    },
    {
      question: "Where do I submit my work?",
      answer: "You can submit your work through the submission form on this website. Simply fill out the required information including your project details, upload your work, and provide the necessary links to your project and social media profiles."
    },
    {
      question: "Can I update my submission after submitting?",
      answer: "Submissions are generally final once submitted. However, if you need to make critical updates due to technical issues, please contact our support team as soon as possible. Updates may be allowed on a case-by-case basis before the submission deadline."
    },
    {
      question: "Can I attend the offline final judging session?",
      answer: "Yes, finalists may be invited to attend the offline final judging session. This provides an opportunity to present your work directly to the judges and network with other participants. Details about the final session will be provided to selected finalists."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left Side - Title */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              style={{ 
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.5))',
                lineHeight: '1.2'
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="mb-4">Frequently</div>
              <div className="mb-4">Asked</div>
              <div>Questions</div>
            </motion.h2>
          </motion.div>

          {/* Right Side - FAQ Items */}
          <motion.div 
            className="lg:col-span-3 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <span className="text-white font-medium text-lg pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="flex-shrink-0"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5">
                    <p className="text-[#BFBFBF] text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 