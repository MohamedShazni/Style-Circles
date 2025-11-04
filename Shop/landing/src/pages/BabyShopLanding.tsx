import { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Star,
  Truck,
  Shield,
  Clock,
  Phone,
  Mail,
} from "lucide-react";
import SC from "../assets/SC.png";

const BabyShopLanding = () => {
  const [scrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("home");

  const scrollToSection = (sectionId: string): void => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
  };

  const products = [
    {
      id: 1,
      name: "Soft Teddy Bear",
      price: 24.99,
      rating: 5,
      image: "🧸",
      color: "from-pink-200 to-pink-300",
    },
    {
      id: 2,
      name: "Baby Building Blocks",
      price: 18.99,
      rating: 5,
      image: "🧱",
      color: "from-blue-200 to-blue-300",
    },
    {
      id: 3,
      name: "Musical Mobile",
      price: 34.99,
      rating: 4,
      image: "🎵",
      color: "from-purple-200 to-purple-300",
    },
    {
      id: 4,
      name: "Plush Elephant",
      price: 29.99,
      rating: 5,
      image: "🐘",
      color: "from-green-200 to-green-300",
    },
    {
      id: 5,
      name: "Baby Rattle Set",
      price: 15.99,
      rating: 4,
      image: "🔔",
      color: "from-yellow-200 to-yellow-300",
    },
    {
      id: 6,
      name: "Stacking Rings",
      price: 19.99,
      rating: 5,
      image: "🎪",
      color: "from-red-200 to-red-300",
    },
  ];

  const categories = [
    { name: "Soft Toys", icon: "🧸", color: "bg-pink-100 hover:bg-pink-200" },
    { name: "Educational", icon: "📚", color: "bg-blue-100 hover:bg-blue-200" },
    { name: "Musical", icon: "🎵", color: "bg-purple-100 hover:bg-purple-200" },
    { name: "Outdoor", icon: "⚽", color: "bg-green-100 hover:bg-green-200" },
    { name: "Bath Time", icon: "🛁", color: "bg-cyan-100 hover:bg-cyan-200" },
    {
      name: "Creative",
      icon: "🎨",
      color: "bg-orange-100 hover:bg-orange-200",
    },
  ];

  return (
    <div className="min-h-screen bg-linear-to-r from-pink-50 via-purple-50 to-blue-50 overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <div>
                <img
                  src={SC}
                  alt="Style Circle"
                  className="w-14 h-14 cursor-pointer"
                />
              </div>
              <span className="text-2xl font-bold bg-linear-to-r from-red-500 to-red-900 bg-clip-text text-transparent">
                Style Circles
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["home", "categories", "featured", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-all duration-300 hover:text-red-600 cursor-pointer ${
                    activeSection === item ? "text-red-600" : "text-gray-800"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-pink-100 rounded-full transition-all transform hover:scale-110">
                <Heart className="w-6 h-6 text-pink-500 cursor-pointer" />
              </button>
              <button className="p-2 hover:bg-blue-100 rounded-full transition-all transform hover:scale-110 relative">
                <ShoppingCart className="w-6 h-6 text-blue-500 cursor-pointer" />
                {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span> */}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-pink-100 rounded-full text-pink-600 font-semibold text-sm">
                ✨ New Collection 2025
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="bg-linear-to-r from-red-500 to-red-900 bg-clip-text text-transparent">
                  Magical Toys
                </span>
                <br />
                <span className="text-gray-800 text-6xl">for Little Ones</span>
              </h1>
              <p className="text-2xl text-gray-600">
                Explore The Largest Collection of Toys For Your Little Ones.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-4 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer">
                  Shop Now
                </button>
                <button className="px-8 py-4 bg-white text-gray-800 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 border-2 border-gray-200 cursor-pointer">
                  View Collections
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-pink-300 to-blue-300 rounded-full opacity-20 blur-3xl animate-pulse"></div>
              <div className="relative grid grid-cols-2 gap-4">
                {["🧸", "🎨", "🚂", "🎪"].map((emoji, id) => (
                  <div
                    key={id}
                    className="bg-white rounded-3xl p-8 shadow-xl transform hover:scale-110 transition-all duration-300 hover:rotate-6 cursor-pointer"
                    style={{ animationDelay: `${id * 0.1}s` }}
                  >
                    <div className="text-7xl text-center">{emoji}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-white/50 backdrop-blur-sm mb-1.5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Truck className="w-8 h-8" />,
              title: "Free Shipping",
              desc: "On orders over $50",
              color: "text-blue-500",
            },
            {
              icon: <Shield className="w-8 h-8" />,
              title: "Safe & Tested",
              desc: "All products certified",
              color: "text-green-500",
            },
            {
              icon: <Clock className="w-8 h-8" />,
              title: "Fast Delivery",
              desc: "2-3 business days",
              color: "text-purple-500",
            },
          ].map((feature, id) => (
            <div
              key={id}
              className="flex items-start space-x-4 p-6 rounded-2xl hover:bg-white transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            >
              <div className={`${feature.color} mt-1`}>{feature.icon}</div>
              <div>
                <h3 className="font-bold text-lg mb-1">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, id) => (
              <div
                key={id}
                className={`${cat.color} rounded-2xl p-6 text-center cursor-pointer transform hover:scale-110 transition-all duration-300 hover:shadow-xl`}
              >
                <div className="text-5xl mb-3">{cat.icon}</div>
                <div className="font-semibold text-gray-700">{cat.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section
        id="featured"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-purple-50 to-pink-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800">Featured Toys</h2>
            <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
              View All →
            </button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <div
                  className={`bg-linear-to-br ${product.color} h-64 flex items-center justify-center relative overflow-hidden`}
                >
                  <div className="text-9xl group-hover:scale-125 transition-transform duration-300">
                    {product.image}
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="w-5 h-5 text-pink-500" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">
                    {product.name}
                  </h3>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-600">
                      ${product.price}
                    </span>
                    <button className="px-4 py-2 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-semibold hover:shadow-lg transform hover:scale-105 transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="py-20 px-4 bg-linear-to-r from-pink-50 via-purple-50 to-blue-50"
      >
        <div className="max-w-4xl mx-auto text-center text-gray-800">
          <h2 className="text-4xl font-bold mb-4">
            Join Our{" "}
            <span className="bg-linear-to-br from-red-500 to-red-900 text-transparent bg-clip-text">
              Style Circles
            </span>{" "}
            Family!
          </h2>
          <p className="text-xl mb-20 opacity-90">
            Get exclusive offers, new arrivals, and parenting tips delivered to
            your inbox.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12 cursor-pointer">
            <div className="bg-linear-to-br from-cyan-500/10 to-blue-500/10 p-8 rounded-2xl border border-cyan-500/20 text-center group hover:scale-105 transition-transform duration-300">
              <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-black">074 018 6358</p>
            </div>

            <div className="bg-linear-to-br from-purple-500/10 to-pink-500/10 p-8 rounded-2xl border border-purple-500/20 text-center group hover:scale-105 transition-transform duration-300">
              <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-black">risaheel@53gmail.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-r from-gray-200 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4 gap-2">
            <div>
              <img
                src={SC}
                alt="Style Circle"
                className="w-14 h-14 cursor-pointer"
              />
            </div>
            <span className="bg-linear-to-br from-red-500 to-red-900 text-transparent bg-clip-text font-bold text-2xl">
              Style Circles
            </span>
          </div>
          <p className="text-black-400 mb-6 text-xl">
            Making childhood magical, one toy at a time.
          </p>
          <div className="flex justify-center space-x-6 text-gray-500">
            <a href="#" className="hover:text-pink-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-pink-400 transition-colors">
              Contact
            </a>
          </div>
          <p className="text-gray-700 text-xl mt-6">
            © 2025 Style Circles. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BabyShopLanding;
