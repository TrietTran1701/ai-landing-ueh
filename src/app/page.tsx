import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" style={{
      background: `radial-gradient(ellipse 60% 60% at 50% 20%, 
        #032886 20%, 
        #13161A 60%, 
        #070B16 70%, 
        #000000 100%)`
    }}>
      <Header />
      <Hero />
    </div>
  );
}
