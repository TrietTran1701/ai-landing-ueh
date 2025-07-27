import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="min-h-screen flex justify-center px-6 pt-20">
      <div className="text-center max-w-4xl">
        <div className="">
          <p className="text-white text-lg mb-2 font-bold">DEADLINE: OCTOBER 15, 2025</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          World AI Creativity Award
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