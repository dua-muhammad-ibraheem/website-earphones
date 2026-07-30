import { useParams } from "react-router-dom";
import dummyProducts from "../data/products";

const ProductDetails = () => {
  const { id } = useParams();

  const product = dummyProducts.find((item) => item.id === Number(id));

  if (!product) {
    return <div className="py-20 text-center">Product not found.</div>;
  }
  return (
    <section className="bg-slate-50 py-16 min-h-screen">
      <div className="mx-auto grid max-w-[1340px] gap-12 px-6 lg:grid-cols-2 lg:px-10">
        {/* Product Image */}

        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="mx-auto h-[420px] object-contain"
          />
        </div>

        {/* Product Info */}

        <div>
          <span className="text-sm font-semibold uppercase tracking-[3px] text-emerald-500">
            Headphones
          </span>

          <h1 className="mt-3 text-5xl font-black text-slate-900">
            {product.name}
          </h1>

          <div className="mt-5 flex items-center gap-4">
          <span className="text-4xl font-bold text-slate-900">
  ${product.price}
</span>

        <span className="text-xl text-slate-400 line-through">
  ${product.oldPrice}
</span>
          </div>

          <p className="mt-8 leading-8 text-slate-600">
            Experience industry-leading noise cancellation, premium sound
            quality and all-day comfort. Perfect for music lovers, professionals
            and travel.
          </p>

          <div className="mt-10 flex gap-4">
            <button className="rounded-xl bg-emerald-500 px-8 py-3 font-semibold text-white hover:bg-emerald-600">
              Add to Cart
            </button>

            <button className="rounded-xl border border-slate-300 px-8 py-3 font-semibold hover:bg-slate-100">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
