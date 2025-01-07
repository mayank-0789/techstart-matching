import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { RecommendationSection } from "@/components/RecommendationSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <RecommendationSection />
      </main>
    </div>
  );
};

export default Index;