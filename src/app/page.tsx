import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-radial-gradient">
      <Header />
      <Hero />
      <Info />
    </div>
  );
}
