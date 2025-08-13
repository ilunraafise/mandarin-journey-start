import { Button } from "./button";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { useNavigate } from "react-router-dom";
import pinyinImage from "@/assets/pinyin-lesson.jpg";
import greetingsImage from "@/assets/greetings-lesson.jpg";
import numbersImage from "@/assets/numbers-lesson.jpg";

const MaterialsSection = () => {
  const navigate = useNavigate();

  const materials = [
    {
      id: 1,
      title: "Pengenalan Huruf Pinyin",
      description: "Pelajari sistem romanisasi untuk membantu pengucapan bahasa Mandarin",
      image: pinyinImage,
      route: "/materi/pinyin",
      difficulty: "Pemula"
    },
    {
      id: 2,
      title: "Salam dalam Mandarin",
      description: "Kuasai berbagai cara menyapa dan berkenalan dalam bahasa Mandarin",
      image: greetingsImage,
      route: "/materi/salam",
      difficulty: "Pemula"
    },
    {
      id: 3,
      title: "Angka 1-10",
      description: "Belajar menghitung dan menggunakan angka dalam kehidupan sehari-hari",
      image: numbersImage,
      route: "/materi/angka",
      difficulty: "Pemula"
    }
  ];

  return (
    <section id="materials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Materi Pembelajaran
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pilih materi yang ingin Anda pelajari dan mulai perjalanan belajar bahasa Mandarin
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {materials.map((material, index) => (
            <Card 
              key={material.id}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-primary/20 overflow-hidden animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={material.image} 
                  alt={material.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {material.difficulty}
                  </span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                  {material.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {material.description}
                </p>
                
                <Button 
                  onClick={() => navigate(material.route)}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Baca Materi
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsSection;