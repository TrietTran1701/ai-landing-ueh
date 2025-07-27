import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Info from "@/components/Info";
import CompetitionCategories from "@/components/CompetitionCategories";
import BrandedAdvertising from "@/components/BrandedAdvertising";
import JudgingPanel from "@/components/JudgingPanel";
import CoOrganizer from "@/components/CoOrganizer";
import ExploreSubmissions from "@/components/ExploreSubmissions";
import WorkSubmission from "@/components/WorkSubmission";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-radial-gradient">
      <Header />
      <Hero />
      <Info />
      <CompetitionCategories />
      <BrandedAdvertising />
      <JudgingPanel />
      <CoOrganizer />
      <ExploreSubmissions />
      <WorkSubmission />
      <FAQ />
      <Footer />
    </div>
  );
}
