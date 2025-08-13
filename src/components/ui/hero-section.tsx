import { Button } from "./button";
import heroImage from "@/assets/hero-chinese.jpg";

const HeroSection = () => {
  const scrollToMaterials = () => {
    document.getElementById('materials')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Belajar Bahasa
            <span className="block text-secondary-foreground animate-float">
              Mandarin
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Mulai perjalanan Anda menguasai bahasa Mandarin dengan metode pembelajaran yang mudah dan menyenangkan
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToMaterials}
              className="bg-background text-primary hover:bg-background/90 shadow-lg hover:shadow-xl transition-all duration-300 text-lg px-8 py-4"
            >
              Mulai Belajar
            </Button>
            
            <Button 
              variant="outline"
              size="lg"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4"
            >
              Lihat Demo
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 text-6xl animate-float" style={{ animationDelay: '0.5s' }}>
          你
        </div>
        <div className="absolute bottom-20 right-10 text-5xl animate-float" style={{ animationDelay: '1s' }}>
          好
        </div>
        <div className="absolute top-1/2 left-20 text-4xl animate-float" style={{ animationDelay: '1.5s' }}>
          学
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;