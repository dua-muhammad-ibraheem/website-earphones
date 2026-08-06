import ProductCard from "./ProductCard";

import dummyProducts from "../../data/products";

const ProductGrid = ({
  searchTerm = "",
  sortOption,
  maxPrice,
}) => {
  // Filter Products
const filteredProducts = dummyProducts.filter((product) => {
  const matchesSearch = product.name
    .toLowerCase()
    .includes((searchTerm || "").toLowerCase());

  const matchesPrice = product.price <= maxPrice;

  return matchesSearch && matchesPrice;
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