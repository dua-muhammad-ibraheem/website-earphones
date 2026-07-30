import ProductCard from "./ProductCard";

import dummyProducts from "../../data/products";

const ProductGrid = () => {
  return (
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {dummyProducts.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
};

export default ProductGrid;