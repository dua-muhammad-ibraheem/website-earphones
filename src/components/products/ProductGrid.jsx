import ProductCard from "./ProductCard";

import dummyProducts from "../../data/products";

const ProductGrid = ({ searchTerm = "" }) => {
  // Filter Products
const filteredProducts = dummyProducts.filter((product) =>
  product.name
    .toLowerCase()
    .includes((searchTerm || "").toLowerCase())
);
  return (
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {filteredProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;