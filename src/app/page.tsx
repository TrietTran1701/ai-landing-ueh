import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import CompetitionCategories from "@/components/CompetitionCategories";
import BrandedAdvertising from "@/components/BrandedAdvertising";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-radial-gradient">
      <Header />
      <Hero />
      <Info />
      <CompetitionCategories />
      <BrandedAdvertising />
    </div>
  );
}
