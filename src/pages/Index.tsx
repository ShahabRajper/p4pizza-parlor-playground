
import Navbar from "@/components/Navbar";
import { Star, Clock, Pizza, Phone, Mail, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
            alt="Delicious Pizza"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-down">
            Welcome to P4Pizza
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 animate-fade-up">
            Crafting Perfect Pizzas with Passion
          </p>
          <a
            href="#menu"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-pizza-600 rounded-full hover:bg-pizza-700 transition-colors animate-fade-up"
          >
            View Our Menu
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Star className="h-8 w-8 text-pizza-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                Only the finest ingredients make it into our pizzas
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Clock className="h-8 w-8 text-pizza-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">
                Hot and fresh pizza delivered to your doorstep
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <Pizza className="h-8 w-8 text-pizza-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Artisan Style</h3>
              <p className="text-gray-600">
                Handcrafted with love by our expert pizzaiolos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Specialties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
                alt="Margherita Pizza"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Classic Margherita</h3>
                <p className="text-gray-600">Fresh basil, mozzarella, and tomatoes</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5"
                alt="Pepperoni Pizza"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Spicy Pepperoni</h3>
                <p className="text-gray-600">Premium pepperoni with melted cheese</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                alt="Supreme Pizza"
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">Supreme Delight</h3>
                <p className="text-gray-600">Loaded with fresh vegetables and meats</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1542834369-f10ebf06d3e0"
                alt="Our Kitchen"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-8">
                Founded in 2024, P4Pizza has been serving the community with authentic Italian pizzas made from traditional recipes. Our commitment to quality and service has made us a favorite among pizza lovers.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-pizza-600 hover:text-pizza-700 transition-colors"
              >
                Learn More
                <ArrowRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Visit Us</h2>
            <p className="text-gray-600 mb-8">
              123 Pizza Street, Foodville, FD 12345
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="tel:+1234567890"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-pizza-600 rounded-full hover:bg-pizza-700 transition-colors"
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </a>
              <a
                href="mailto:info@p4pizza.com"
                className="inline-flex items-center px-6 py-3 text-sm font-medium border border-pizza-600 text-pizza-600 rounded-full hover:bg-pizza-50 transition-colors"
              >
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
