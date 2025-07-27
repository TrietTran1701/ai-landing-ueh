"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useForm, ValidationError } from '@formspree/react';

export default function WorkSubmission() {
  const [state, handleSubmit] = useForm("xwpqbepz");

  // Show success message after successful submission
  if (state.succeeded) {
    return (
      <section className="px-4 sm:px-6 py-16 sm:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#141414] backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-6xl mb-6">🎉</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Submission Received!
              </h2>
              <p className="text-lg text-[#BFBFBF] mb-8">
                Thank you for your submission! We'll be in touch soon with updates about the competition.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-3 bg-gradient-to-r from-cyan to-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:scale-[1.02]"
              >
                Submit Another Project
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#141414] backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 rounded-2xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Side - Logo and Title */}
          <motion.div 
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Be the first AI Creativity Award winner
            </motion.h2>
            
            <motion.p 
              className="text-base sm:text-lg text-[#BFBFBF] italic mb-8 sm:mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              By submitting your vision
            </motion.p>

            {/* AI Logo */}
            <motion.div 
              className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Image
                src="/logo.png"
                alt="AI Logo"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Show submission errors if any */}
              {state.errors && Object.keys(state.errors).length > 0 && (
                <motion.div 
                  className="p-4 rounded-xl text-sm bg-red-900/30 border border-red-500/50 text-red-300"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  There were some errors with your submission. Please check the fields below.
                </motion.div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-white text-xs sm:text-sm font-medium mb-2">
                  YOUR FULL NAME:
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your first & last name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan focus:outline-none transition-colors duration-200 text-sm sm:text-base"
                  required
                />
                <ValidationError 
                  prefix="Full Name" 
                  field="fullName"
                  errors={state.errors}
                  className="text-red-400 text-xs mt-1"
                />
              </div>

              {/* Collaborators Checkbox */}
              <div className="flex items-start sm:items-center space-x-3">
                <input
                  type="checkbox"
                  name="hasCollaborators"
                  className="w-4 h-4 mt-0.5 sm:mt-0 rounded border-gray-600 bg-transparent text-cyan focus:ring-cyan focus:ring-2 flex-shrink-0"
                />
                <label className="text-white text-xs sm:text-sm leading-relaxed">
                  Did you collaborate with anyone on this project?
                </label>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-white text-xs sm:text-sm font-medium mb-2">
                  YOUR EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan focus:outline-none transition-colors duration-200 text-sm sm:text-base"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="text-red-400 text-xs mt-1"
                />
              </div>

              {/* Social Network */}
              <div>
                <label className="block text-white text-xs sm:text-sm font-medium mb-2">
                  YOUR SOCIAL NETWORK
                </label>
                <input
                  type="url"
                  name="socialNetwork"
                  placeholder="Enter your social network"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan focus:outline-none transition-colors duration-200 text-sm sm:text-base"
                />
                <ValidationError 
                  prefix="Social Network" 
                  field="socialNetwork"
                  errors={state.errors}
                  className="text-red-400 text-xs mt-1"
                />
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  Share a link to your Social network. This helps us credit and tag your work publicly if you win
                </p>
              </div>

              {/* Project Title */}
              <div>
                <label className="block text-white text-xs sm:text-sm font-medium mb-2">
                  PROJECT TITLE
                </label>
                <input
                  type="text"
                  name="projectTitle"
                  placeholder="Enter your project title"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan focus:outline-none transition-colors duration-200 text-sm sm:text-base"
                  required
                />
                <ValidationError 
                  prefix="Project Title" 
                  field="projectTitle"
                  errors={state.errors}
                  className="text-red-400 text-xs mt-1"
                />
              </div>

              {/* Project URL */}
              <div>
                <label className="block text-white text-xs sm:text-sm font-medium mb-2">
                  THE URL TO YOUR PROJECT
                </label>
                <input
                  type="url"
                  name="projectUrl"
                  placeholder="Enter your project URL"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan focus:outline-none transition-colors duration-200 text-sm sm:text-base"
                  required
                />
                <ValidationError 
                  prefix="Project URL" 
                  field="projectUrl"
                  errors={state.errors}
                  className="text-red-400 text-xs mt-1"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={state.submitting}
                className={`w-full py-3 sm:py-4 bg-gradient-to-r from-cyan to-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base mt-6 sm:mt-8 ${
                  state.submitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={!state.submitting ? { scale: 1.02 } : {}}
                whileTap={!state.submitting ? { scale: 0.98 } : {}}
              >
                {state.submitting ? 'Submitting...' : 'Submit your work'}
              </motion.button>
            </form>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 