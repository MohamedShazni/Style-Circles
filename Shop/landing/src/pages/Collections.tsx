import { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Star,
  Filter,
  Search,
  ArrowLeft,
} from "lucide-react";
import SC from "../assets/SC.png";
import { useNavigate } from "react-router-dom";

const CollectionsPage = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const [scrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  const allProducts = [
    {
      id: 1,
      name: "Soft Teddy Bear",
      price: 24.99,
      rating: 5,
      image: "🧸",
      color: "from-pink-200 to-pink-300",
      category: "Soft Toys",
      inStock: true,
    },
    {
      id: 2,
      name: "Baby Building Blocks",
      price: 18.99,
      rating: 5,
      image: "🧱",
      color: "from-blue-200 to-blue-300",
      category: "Educational",
      inStock: true,
    },
    {
      id: 3,
      name: "Musical Mobile",
      price: 34.99,
      rating: 4,
      image: "🎵",
      color: "from-purple-200 to-purple-300",
      category: "Musical",
      inStock: true,
    },
    {
      id: 4,
      name: "Plush Elephant",
      price: 29.99,
      rating: 5,
      image: "🐘",
      color: "from-green-200 to-green-300",
      category: "Soft Toys",
      inStock: true,
    },
    {
      id: 5,
      name: "Baby Rattle Set",
      price: 15.99,
      rating: 4,
      image: "🔔",
      color: "from-yellow-200 to-yellow-300",
      category: "Musical",
      inStock: false,
    },
    {
      id: 6,
      name: "Stacking Rings",
      price: 19.99,
      rating: 5,
      image: "🎪",
      color: "from-red-200 to-red-300",
      category: "Educational",
      inStock: true,
    },
    {
      id: 7,
      name: "Cuddly Bunny",
      price: 27.99,
      rating: 5,
      image: "🐰",
      color: "from-pink-300 to-purple-200",
      category: "Soft Toys",
      inStock: true,
    },
    {
      id: 8,
      name: "Shape Sorter",
      price: 21.99,
      rating: 4,
      image: "🔷",
      color: "from-blue-300 to-cyan-200",
      category: "Educational",
      inStock: true,
    },
    {
      id: 9,
      name: "Xylophone",
      price: 32.99,
      rating: 5,
      image: "🎹",
      color: "from-yellow-300 to-orange-200",
      category: "Musical",
      inStock: true,
    },
    {
      id: 10,
      name: "Soft Giraffe",
      price: 26.99,
      rating: 5,
      image: "🦒",
      color: "from-orange-200 to-yellow-300",
      category: "Soft Toys",
      inStock: true,
    },
    {
      id: 11,
      name: "Puzzle Set",
      price: 16.99,
      rating: 4,
      image: "🧩",
      color: "from-green-300 to-teal-200",
      category: "Educational",
      inStock: true,
    },
    {
      id: 12,
      name: "Drum Set",
      price: 29.99,
      rating: 5,
      image: "🥁",
      color: "from-red-300 to-pink-200",
      category: "Musical",
      inStock: true,
    },
    {
      id: 13,
      name: "Bath Ducky",
      price: 12.99,
      rating: 5,
      image: "🦆",
      color: "from-cyan-200 to-blue-300",
      category: "Bath Time",
      inStock: true,
    },
    {
      id: 14,
      name: "Soccer Ball",
      price: 19.99,
      rating: 4,
      image: "⚽",
      color: "from-green-200 to-lime-300",
      category: "Outdoor",
      inStock: true,
    },
    {
      id: 15,
      name: "Crayon Set",
      price: 14.99,
      rating: 5,
      image: "🖍️",
      color: "from-purple-300 to-pink-300",
      category: "Creative",
      inStock: true,
    },
    {
      id: 16,
      name: "Unicorn Plush",
      price: 31.99,
      rating: 5,
      image: "🦄",
      color: "from-pink-400 to-purple-300",
      category: "Soft Toys",
      inStock: true,
    },
    {
      id: 17,
      name: "Alphabet Blocks",
      price: 22.99,
      rating: 5,
      image: "🔤",
      color: "from-blue-400 to-indigo-300",
      category: "Educational",
      inStock: true,
    },
    {
      id: 18,
      name: "Mini Piano",
      price: 39.99,
      rating: 5,
      image: "🎹",
      color: "from-indigo-300 to-purple-400",
      category: "Musical",
      inStock: false,
    },
    {
      id: 19,
      name: "Plush Panda",
      price: 28.99,
      rating: 5,
      image: "🐼",
      color: "from-gray-200 to-gray-300",
      category: "Soft Toys",
      inStock: true,
    },
    {
      id: 20,
      name: "Rainbow Stacker",
      price: 24.99,
      rating: 5,
      image: "🌈",
      color: "from-red-200 via-yellow-200 to-blue-200",
      category: "Educational",
      inStock: true,
    },
  ];

  const categories = [
    {
      name: "Soft Toys",
      icon: "🧸",
      color: "bg-pink-100 hover:bg-pink-200",
      count: 6,
    },
    {
      name: "Educational",
      icon: "📚",
      color: "bg-blue-100 hover:bg-blue-200",
      count: 6,
    },
    {
      name: "Musical",
      icon: "🎵",
      color: "bg-purple-100 hover:bg-purple-200",
      count: 5,
    },
    {
      name: "Outdoor",
      icon: "⚽",
      color: "bg-green-100 hover:bg-green-200",
      count: 1,
    },
    {
      name: "Bath Time",
      icon: "🛁",
      color: "bg-cyan-100 hover:bg-cyan-200",
      count: 1,
    },
    {
      name: "Creative",
      icon: "🎨",
      color: "bg-orange-100 hover:bg-orange-200",
      count: 1,
    },
  ];

  // Filter and sort products
  let filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "rating":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2 cursor-pointer">
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

            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-pink-100 rounded-full transition-all transform hover:scale-110">
                <Heart className="w-6 h-6 text-pink-500" />
              </button>
              <button className="p-2 hover:bg-blue-100 rounded-full transition-all transform hover:scale-110 relative">
                <ShoppingCart className="w-6 h-6 text-blue-500" />
                {/* <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span> */}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Collections Content */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div>
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-red-600 transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-7 h-7 group-hover:-translate-x-1 transition-transform" />
              <span className="font-semibold text-xl">Back to Home</span>
            </button>
          </div>

          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Our Collections
            </h1>
            <p className="text-xl text-gray-600">
              Discover {allProducts.length} magical toys for your little ones
            </p>
          </div>

          {/* Search and Sort Bar */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between bg-white rounded-2xl p-4 shadow-lg">
            <div className="relative flex-1 w-full md:max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search toys..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
              />
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-gray-600 font-medium whitespace-nowrap">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 rounded-full border-2 border-gray-200 focus:border-purple-500 focus:outline-none cursor-pointer font-medium text-gray-700 hover:bg-gray-50 transition-colors"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-4">
              <Filter className="w-5 h-5 text-gray-500" />
              <h3 className="font-bold text-lg text-gray-700">
                Filter by Category
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  selectedCategory === "All"
                    ? "bg-linear-to-r from-pink-500 to-purple-500 text-white shadow-lg transform scale-105"
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
                }`}
              >
                All Items ({allProducts.length})
              </button>
              {categories.map((cat, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(cat.name)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center space-x-2 ${
                    selectedCategory === cat.name
                      ? "bg-linear-to-r from-pink-500 to-purple-500 text-white shadow-lg transform scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
                  }`}
                >
                  <span className="text-xl">{cat.icon}</span>
                  <span>
                    {cat.name} ({cat.count})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Showing{" "}
              <span className="font-bold text-purple-600">
                {sortedProducts.length}
              </span>{" "}
              {sortedProducts.length === 1 ? "product" : "products"}
              {searchQuery && (
                <span>
                  {" "}
                  matching "<span className="font-semibold">{searchQuery}</span>
                  "
                </span>
              )}
            </p>
          </div>

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {sortedProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group relative"
                >
                  {!product.inStock && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                      Out of Stock
                    </div>
                  )}
                  <div
                    className={`bg-linear-to-br ${
                      product.color
                    } h-56 flex items-center justify-center relative overflow-hidden ${
                      !product.inStock ? "opacity-60" : ""
                    }`}
                  >
                    <div className="text-8xl group-hover:scale-125 transition-transform duration-300">
                      {product.image}
                    </div>
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-pink-50">
                      <Heart className="w-4 h-4 text-pink-500" />
                    </button>
                    <div className="absolute bottom-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700">
                      {product.category}
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3 h-3 ${
                            i < product.rating
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                      <span className="text-xs text-gray-500 ml-2">
                        ({product.rating}.0)
                      </span>
                    </div>
                    <h3 className="font-bold text-base mb-3 text-gray-800 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-purple-600">
                        ${product.price}
                      </span>
                      <button
                        disabled={!product.inStock}
                        className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                          product.inStock
                            ? "bg-linear-to-r from-pink-500 to-purple-500 text-white hover:shadow-lg transform hover:scale-105"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        {product.inStock ? "Add to Cart" : "Unavailable"}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-3xl shadow-lg">
              <div className="text-8xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">
                No products found
              </h3>
              <p className="text-gray-500 mb-6">
                {searchQuery
                  ? `No results for "${searchQuery}". Try a different search term.`
                  : "Try selecting a different category"}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
                className="px-6 py-3 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-r from-gray-200 py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
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
          <p className="text-black mb-6 text-xl">
            Making childhood magical, one toy at a time.
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a className="hover:text-pink-400 transition-colors">Privacy</a>
            <a className="hover:text-pink-400 transition-colors">Terms</a>
            <a className="hover:text-pink-400 transition-colors">Contact</a>
          </div>
          <p className="text-gray-700 text-sm mt-6">
            © 2025 Style Circles. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default CollectionsPage;
