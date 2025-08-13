import Navigation from "@/components/ui/navigation";
import HeroSection from "@/components/ui/hero-section";
import MaterialsSection from "@/components/ui/materials-section";
import QuizSection from "@/components/ui/quiz-section";
import Footer from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <MaterialsSection />
      <QuizSection />
      <Footer />
    </div>
  );
};

export default Index;
