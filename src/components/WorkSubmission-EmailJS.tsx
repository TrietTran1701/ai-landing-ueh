"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function WorkSubmission() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    socialNetwork: "",
    projectTitle: "",
    projectUrl: "",
    hasCollaborators: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.fullName,
        from_email: formData.email,
        social_network: formData.socialNetwork,
        project_title: formData.projectTitle,
        project_url: formData.projectUrl,
        has_collaborators: formData.hasCollaborators ? 'Yes' : 'No',
        to_email: 'your-email@example.com', // Replace with your email
      };

      // Replace these with your EmailJS credentials
      await emailjs.send(
        'YOUR_SERVICE_ID',    // Replace with your service ID
        'YOUR_TEMPLATE_ID',   // Replace with your template ID
        templateParams,
        'YOUR_PUBLIC_KEY'     // Replace with your public key
      );

      setSubmitMessage("🎉 Your submission has been received! We'll be in touch soon.");
      setFormData({
        fullName: "",
        email: "",
        socialNetwork: "",
        projectTitle: "",
        projectUrl: "",
        hasCollaborators: false
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitMessage("❌ There was an error submitting your form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              {/* Submit Message */}
              {submitMessage && (
                <motion.div 
                  className={`p-4 rounded-xl text-sm ${
                    submitMessage.includes('🎉') 
                      ? 'bg-green-900/30 border border-green-500/50 text-green-300' 
                      : 'bg-red-900/30 border border-red-500/50 text-red-300'
                  }`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {submitMessage}
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
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your first & last name"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan focus:outline-none transition-colors duration-200 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Collaborators Checkbox */}
              <div className="flex items-start sm:items-center space-x-3">
                <input
                  type="checkbox"
                  name="hasCollaborators"
                  checked={formData.hasCollaborators}
                  onChange={handleInputChange}
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
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan focus:outline-none transition-colors duration-200 text-sm sm:text-base"
                  required
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
                  value={formData.socialNetwork}
                  onChange={handleInputChange}
                  placeholder="Enter your social network"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan focus:outline-none transition-colors duration-200 text-sm sm:text-base"
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
                  value={formData.projectTitle}
                  onChange={handleInputChange}
                  placeholder="Enter your project title"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan focus:outline-none transition-colors duration-200 text-sm sm:text-base"
                  required
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
                  value={formData.projectUrl}
                  onChange={handleInputChange}
                  placeholder="Enter your project URL"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-transparent border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:border-cyan focus:outline-none transition-colors duration-200 text-sm sm:text-base"
                  required
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 sm:py-4 bg-gradient-to-r from-cyan to-blue text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base mt-6 sm:mt-8 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Submitting...' : 'Submit your work'}
              </motion.button>
            </form>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
} 