import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-black via-[#1C54CB]/20 to-[#5242C1]/30">
      <Header />
      <Hero />
    </div>
  );
}
