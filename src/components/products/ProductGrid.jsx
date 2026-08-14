import ProductCard from "./ProductCard";

import dummyProducts from "../../data/products";
const ProductGrid = ({
  searchTerm = "",
  sortOption,
  maxPrice,
  selectedCategories = [],
  selectedRating = "All Ratings",
}) => {
  // Filter Products

const filteredProducts = dummyProducts.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes((searchTerm || "").toLowerCase());

  const matchesPrice = product.price <= maxPrice;

  const matchesCategory =
    selectedCategories.length === 0 ||
    selectedCategories.includes(product.category);

    const matchesRating =
  selectedRating === "All Ratings" ||
  (selectedRating === "4★ & Above" && product.rating >= 4) ||
  (selectedRating === "3★ & Above" && product.rating >= 3);
return (
  matchesSearch &&
  matchesPrice &&
  matchesCategory &&
  matchesRating
);
  
});

// Copy Array for Sorting
const sortedProducts = [...filteredProducts];

// Sorting Logic
if (sortOption === "Price: Low to High") {
  sortedProducts.sort((a, b) => a.price - b.price);
}

if (sortOption === "Price: High to Low") {
  sortedProducts.sort((a, b) => b.price - a.price);
}

if (sortOption === "Top Rated") {
  sortedProducts.sort((a, b) => b.rating - a.rating);
}

if (sortedProducts.length === 0) {
  return (
    <div className="flex h-80 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-slate-800">
          No Products Found
        </h2>

        <p className="mt-2 text-slate-500">
          Try changing your search or filters.
        </p>
      </div>
    </div>
  );
}
  return (
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
   {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;