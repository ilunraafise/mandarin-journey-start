const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              中文学习
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Platform pembelajaran bahasa Mandarin terbaik untuk pemula. 
              Mulai perjalanan Anda menguasai bahasa Mandarin hari ini.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Link Cepat</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#materials" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Materi Pembelajaran
                </a>
              </li>
              <li>
                <a href="#quiz" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Quiz
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div id="contact">
            <h4 className="text-lg font-semibold text-foreground mb-4">Kontak</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Email: info@chineselearning.com</p>
              <p>Telepon: +62 21 1234 5678</p>
              <p>WhatsApp: +62 812 3456 7890</p>
              <div className="pt-4">
                <p className="text-sm">
                  Senin - Jumat: 09:00 - 17:00 WIB<br />
                  Sabtu: 09:00 - 15:00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Chinese Learning Platform. Hak Cipta Dilindungi.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
              Kebijakan Privasi
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;