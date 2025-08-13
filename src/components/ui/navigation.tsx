import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-background/95 backdrop-blur-md fixed w-full top-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              中文学习
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors duration-200">
                Beranda
              </a>
              <a href="#materials" className="text-foreground hover:text-primary transition-colors duration-200">
                Materi
              </a>
              <a href="#quiz" className="text-foreground hover:text-primary transition-colors duration-200">
                Quiz
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors duration-200">
                Kontak
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleMenu}
              className="text-foreground hover:text-primary"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a
                href="#home"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Beranda
              </a>
              <a
                href="#materials"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Materi
              </a>
              <a
                href="#quiz"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Quiz
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors duration-200"
                onClick={toggleMenu}
              >
                Kontak
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;