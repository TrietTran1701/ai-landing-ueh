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
    <section className="min-h-screen flex justify-center px-6 pt-20">
      <div className="text-center max-w-4xl">
        <div className="">
          <p className="text-white text-lg mb-2 font-bold">DEADLINE: OCTOBER 15, 2025</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight min-h-[1.2em]">
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
            className="inline-block ml-1 w-1 h-12 md:h-16 bg-white"
          />
        </h1>
        
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl mb-1 text-[#BFBFBF] font-bold">
            Visions of the Future:
          </h2>
          <p className="text-2xl md:text-3xl text-[#BFBFBF] font-bold">
            Imagined by <span className="text-cyan">AI</span>, Inspired <span className="text-blue">Humanity</span>
          </p>
        </div>
        
        <p className="text-white text-lg mb-10 max-w-2xl mx-auto">
          How AI Transforms the Way We See, Work, and Live
        </p>
        
        <Button className="px-8 text-lg font-medium">
          Submit now
        </Button>
      </div>
    </section>
  );
}