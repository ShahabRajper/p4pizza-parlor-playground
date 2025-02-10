
import { useState, useEffect } from "react";
import { Pizza, Phone, Mail } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <Pizza className="h-8 w-8 text-pizza-600" />
            <span className="text-xl font-semibold">P4Pizza</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#menu" className="hover:text-pizza-600 transition-colors">
              Menu
            </a>
            <a href="#about" className="hover:text-pizza-600 transition-colors">
              About
            </a>
            <a href="#contact" className="hover:text-pizza-600 transition-colors">
              Contact
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+1234567890"
              className="flex items-center space-x-2 text-sm hover:text-pizza-600 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(123) 456-7890</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
