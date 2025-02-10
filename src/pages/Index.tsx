
import Navbar from "@/components/Navbar";
import { Star, Clock, Pizza, Phone, Mail, ArrowRight, MapPin, ChevronRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const orderFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  address: z.string().min(10, "Address must be at least 10 characters"),
  pizzaType: z.string().min(1, "Please select a pizza type"),
  quantity: z.string().min(1, "Please enter quantity"),
  specialInstructions: z.string(),
});

const Index = () => {
  const form = useForm<z.infer<typeof orderFormSchema>>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
      pizzaType: "",
      quantity: "",
      specialInstructions: "",
    },
  });

  const onSubmit = (data: z.infer<typeof orderFormSchema>) => {
    toast.success("Order submitted successfully! We'll contact you shortly.");
    console.log(data);
    form.reset();
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1604382355076-af4b0eb60143"
            alt="Fresh Pizza"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-down">
            Delicious Pizza
            <br />
            <span className="text-pizza-500">Delivered Fast</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-up max-w-2xl mx-auto">
            Experience the authentic taste of Italy, delivered right to your doorstep
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
            <a
              href="#menu"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-pizza-600 rounded-full hover:bg-pizza-700 transition-colors"
            >
              View Menu
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#order"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-pizza-600 bg-white rounded-full hover:bg-gray-100 transition-colors"
            >
              Order Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <Star className="h-12 w-12 text-pizza-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600 text-lg">
                Only the finest ingredients make it into our pizzas
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <Clock className="h-12 w-12 text-pizza-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Fast Delivery</h3>
              <p className="text-gray-600 text-lg">
                Hot and fresh pizza delivered to your doorstep
              </p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow text-center">
              <Pizza className="h-12 w-12 text-pizza-600 mb-6 mx-auto" />
              <h3 className="text-2xl font-semibold mb-4">Artisan Style</h3>
              <p className="text-gray-600 text-lg">
                Handcrafted with love by our expert pizzaiolos
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Special Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
                  alt="Margherita Pizza"
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full font-semibold text-pizza-600">
                  $12.99
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Classic Margherita</h3>
                <p className="text-gray-600 mb-4">Fresh basil, mozzarella, and tomatoes on our signature crust</p>
                <a
                  href="#order"
                  className="inline-flex items-center text-pizza-600 hover:text-pizza-700 transition-colors font-medium"
                >
                  Order Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1528137871618-79d2761e3fd5"
                  alt="Pepperoni Pizza"
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full font-semibold text-pizza-600">
                  $14.99
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Spicy Pepperoni</h3>
                <p className="text-gray-600 mb-4">Premium pepperoni with melted cheese and our special sauce</p>
                <a
                  href="#order"
                  className="inline-flex items-center text-pizza-600 hover:text-pizza-700 transition-colors font-medium"
                >
                  Order Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow bg-white">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
                  alt="Supreme Pizza"
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full font-semibold text-pizza-600">
                  $16.99
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">Supreme Delight</h3>
                <p className="text-gray-600 mb-4">Loaded with fresh vegetables and premium meats</p>
                <a
                  href="#order"
                  className="inline-flex items-center text-pizza-600 hover:text-pizza-700 transition-colors font-medium"
                >
                  Order Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section id="order" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Place Your Order</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" className="text-lg p-6" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="john@example.com" type="email" className="text-lg p-6" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="(123) 456-7890" className="text-lg p-6" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Delivery Address</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Enter your full delivery address"
                          className="text-lg min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="pizzaType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Pizza Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="text-lg p-6">
                              <SelectValue placeholder="Select a pizza" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="margherita">Classic Margherita ($12.99)</SelectItem>
                            <SelectItem value="pepperoni">Spicy Pepperoni ($14.99)</SelectItem>
                            <SelectItem value="supreme">Supreme Delight ($16.99)</SelectItem>
                            <SelectItem value="vegetarian">Vegetarian ($13.99)</SelectItem>
                            <SelectItem value="bbq">BBQ Chicken ($15.99)</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="quantity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-lg">Quantity</FormLabel>
                        <FormControl>
                          <Input 
                            type="number" 
                            min="1" 
                            placeholder="1" 
                            className="text-lg p-6"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="specialInstructions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg">Special Instructions</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Any special instructions for your order? (Optional)"
                          className="text-lg min-h-[100px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full text-lg p-6 bg-pizza-600 hover:bg-pizza-700"
                >
                  Place Order
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1542834369-f10ebf06d3e0"
                alt="Our Kitchen"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-2xl shadow-xl">
                <div className="text-4xl font-bold text-pizza-600">25+</div>
                <div className="text-gray-600">Years of Excellence</div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8">Our Story</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Founded in 1999, P4Pizza has been serving the community with authentic Italian pizzas made from traditional recipes. Our commitment to quality ingredients and exceptional service has made us a favorite among pizza lovers for over two decades.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-pizza-600 mb-2">15k+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-pizza-600 mb-2">20+</div>
                  <div className="text-gray-600">Pizza Varieties</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Visit Us</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-pizza-600" />
                <span className="text-lg">123 Pizza Street, Foodville, FD 12345</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-pizza-600" />
                <a href="tel:+1234567890" className="text-lg hover:text-pizza-600 transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-pizza-600" />
                <a href="mailto:info@p4pizza.com" className="text-lg hover:text-pizza-600 transition-colors">
                  info@p4pizza.com
                </a>
              </div>
            </div>
            <div className="flex justify-center gap-4">
              <Button className="text-lg px-8 py-6 bg-pizza-600 hover:bg-pizza-700">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-pizza-600 text-pizza-600 hover:bg-pizza-50">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
