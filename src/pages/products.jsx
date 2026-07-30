import ProductFilters from "../components/products/ProductFilters";
import SearchBar from "../components/products/SearchBar";
import ProductGrid from "../components/products/ProductGrid";

const Products = () => {
  return (
    <section className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-[1500px] px-4 lg:px-8">

        {/* Heading */}

        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-[3px] text-emerald-500">
            Shop
          </span>

          <h1 className="mt-3 text-4xl font-black text-slate-900 lg:text-5xl">
            Our Products
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Explore our premium collection of headphones, speakers,
            earbuds and accessories.
          </p>
        </div>

        {/* Search */}

        <SearchBar />

        {/* Products Layout */}

        <div className="grid items-start gap-8 lg:grid-cols-[300px_1fr]">

          {/* Sidebar */}

          <ProductFilters />

          {/* Product Grid */}

          <ProductGrid />

        </div>

      </div>
    </section>
  );
};

export default Products;