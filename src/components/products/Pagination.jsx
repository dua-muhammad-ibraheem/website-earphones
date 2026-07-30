import { SlidersHorizontal } from "lucide-react";

const ProductFilters = () => {
  return (
    <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      {/* Heading */}

      <div className="mb-8 flex items-center gap-3">
        <SlidersHorizontal className="text-emerald-500" size={22} />

        <h2 className="text-2xl font-bold text-slate-900">
          Filters
        </h2>
      </div>

      {/* Categories */}

      <div className="mb-8">
        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Categories
        </h3>

        <div className="space-y-3">

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" />
            <span>Headphones</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" />
            <span>Earbuds</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" />
            <span>Speakers</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
            <input type="checkbox" />
            <span>Accessories</span>
          </label>

        </div>
      </div>

      {/* Price */}

      <div className="mb-8">

        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Price
        </h3>

        <input
          type="range"
          min="0"
          max="1000"
          className="w-full accent-emerald-500"
        />

        <div className="mt-3 flex justify-between text-sm text-slate-500">
          <span>$0</span>
          <span>$1000</span>
        </div>

      </div>

      {/* Brand */}

      <div className="mb-8">

        <h3 className="mb-4 text-lg font-semibold text-slate-900">
          Brand
        </h3>

        <select className="w-full rounded-xl border border-slate-300 p-3 outline-none focus:border-emerald-500">
          <option>All Brands</option>
          <option>Sony</option>
          <option>JBL</option>
          <option>Apple</option>
          <option>Samsung</option>
        </select>

      </div>

      {/* Clear Button */}

      <button className="w-full rounded-xl bg-emerald-500 py-3 font-semibold text-white transition hover:bg-emerald-600 cursor-pointer">
        Clear Filters
      </button>

    </aside>
  );
};

export default ProductFilters;