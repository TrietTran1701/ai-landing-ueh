"use client";

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
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Left Side - Tagline */}
          <div>
            <p className="text-[#BFBFBF] text-lg md:text-xl font-medium text-center md:text-left">
              Your imagination, our first milestone
            </p>
          </div>

          {/* Right Side - Submit Button */}
          <div>
            <button
              onClick={handleSubmitClick}
              className="px-8 py-3 bg-gradient-to-r from-cyan to-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan/25 transition-all duration-300 hover:scale-105"
            >
              Submit now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
} 