"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "World AI Creativity Award";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex justify-center px-4 sm:px-6 pt-16 sm:pt-20">
      <div className="text-center max-w-4xl w-full">
        <div className="mb-4 sm:mb-6">
          <p className="text-white text-sm sm:text-base md:text-lg mb-2 font-bold">DEADLINE: SEPTEMBER 18, 2025</p>
        </div>
        
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight min-h-[1.2em] mb-6 sm:mb-8">
          {displayText.split(" ").map((word, index) => (
            <span key={index}>
              {word === "AI" ? (
                <span>
                  {word}
                </span>
              ) : (
                word
              )}
              {index < displayText.split(" ").length - 1 && " "}
            </span>
          ))}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            className="inline-block ml-1 w-0.5 sm:w-1 h-8 sm:h-12 md:h-14 lg:h-16 bg-white"
          />
        </h1>
        
        <div className="mb-8 sm:mb-10">
          <h2 className="text-lg sm:text-2xl md:text-3xl mb-1 sm:mb-2 text-[#BFBFBF] font-bold">
            Visions of the Future:
          </h2>
          <p className="text-lg sm:text-2xl md:text-3xl text-[#BFBFBF] font-bold">
            Imagined by <span className="text-cyan">AI</span>, Inspired by <span className="text-blue">Humanity</span>
          </p>
        </div>
        
        <p className="text-white text-base sm:text-lg mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-2">
          How AI Transforms the Way We See, Work, and Live
        </p>
        
        <Button 
          asChild
          className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-medium"
        >
          <a href="#submit">
            Submit now
          </a>
        </Button>
      </div>
    </section>
  );
}