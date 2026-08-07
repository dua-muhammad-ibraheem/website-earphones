import { useState } from "react";
import ProductFilters from "../components/products/ProductFilters";
import SearchBar from "../components/products/SearchBar";
import ProductGrid from "../components/products/ProductGrid";


const Products = () => {
  // Search State
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [searchTerm, setSearchTerm] = useState("");
const [maxPrice, setMaxPrice] = useState(500);
  const [sortOption, setSortOption] = useState("Newest");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleClearFilters = () => {
  setSearchTerm("");
  setSortOption("Newest");
  setMaxPrice(500);
  setSelectedCategories([]);
  setSelectedRating("All Ratings");
};
  return (
    <section className="relative overflow-hidden min-h-screen bg-slate-50 py-16 sm:py-20 lg:py-24">
      {/* Decorative background accent — matches Hero & Categories for a consistent brand feel */}
      <div className="pointer-events-none absolute -top-20 left-1/2 h-[360px] w-[360px] -translate-x-1/2 rounded-full bg-emerald-100/60 blur-[100px]" />

      <div className="relative mx-auto max-w-[1500px] px-4 lg:px-8">
        {/* Heading */}
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-[2px] text-emerald-600">
            Shop
          </span>

          {/* Badge aur heading ke beech breathing room diya (mt-4 -> mt-6) */}
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900">
            Our <span className="text-emerald-500">Products</span>
          </h1>

          {/* Divider ab heading ke zyada qareeb hai (mt-5 -> mt-3) */}
          <div className="mt-3 h-1 w-16 rounded-full bg-emerald-500" />

          <p className="mx-auto mt-5 max-w-xl text-base sm:text-lg leading-7 sm:leading-8 text-slate-500">
            Explore our premium collection of headphones, speakers, earbuds
            and accessories.
          </p>
        </div>

     <SearchBar
  searchTerm={searchTerm}
  setSearchTerm={setSearchTerm}
  sortOption={sortOption}
  setSortOption={setSortOption}
/>

        {/* Products Layout */}
        <div className="grid items-start gap-8 lg:grid-cols-[300px_1fr] mt-8">
          {/* Sidebar */}
      <ProductFilters
  maxPrice={maxPrice}
  setMaxPrice={setMaxPrice}
  selectedCategories={selectedCategories}
  setSelectedCategories={setSelectedCategories}
  selectedRating={selectedRating}
  setSelectedRating={setSelectedRating}
  handleClearFilters={handleClearFilters}
/>
<ProductGrid
  searchTerm={searchTerm}
  sortOption={sortOption}
  maxPrice={maxPrice}
  selectedCategories={selectedCategories}
  selectedRating={selectedRating}
/>
        </div>
      </div>
    </section>
  );
};

export default Products;