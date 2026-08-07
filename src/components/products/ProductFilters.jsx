import { SlidersHorizontal } from "lucide-react";

const ProductFilters = (props) => {
  console.log(props);

  const {
    maxPrice,
    setMaxPrice,
    selectedCategories,
    setSelectedCategories,
    selectedRating,
    setSelectedRating,
  handleClearFilters,

  } = props;
  const handleCategoryChange = (category) => {
  if (selectedCategories.includes(category)) {
    setSelectedCategories(
      selectedCategories.filter((item) => item !== category)
    );
  } else {
    setSelectedCategories([
      ...selectedCategories,
      category,
    ]);
  }
};
  return (
    <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm h-fit sticky top-28">

      {/* Heading */}
      <div className="mb-6 flex items-center gap-2">
        <SlidersHorizontal size={20} className="text-emerald-500" />

        <h3 className="text-xl font-bold text-slate-900">
          Filters
        </h3>
      </div>

      {/* Category */}
      <div className="mb-8">
        <h4 className="mb-4 font-semibold text-slate-800">
          Category
        </h4>

        <div className="space-y-3">
          <label className="flex items-center gap-3 cursor-pointer">
           <input
  type="checkbox"
  checked={selectedCategories.includes("Headphones")}
  onChange={() => handleCategoryChange("Headphones")}
  className="h-4 w-4 accent-emerald-500"
/>
            <span className="text-slate-700">Headphones</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
           <input
  type="checkbox"
  checked={selectedCategories.includes("Earbuds")}
  onChange={() => handleCategoryChange("Earbuds")}
  className="h-4 w-4 accent-emerald-500"
/>
            <span className="text-slate-700">Earbuds</span>
          </label>

          <label className="flex items-center gap-3 cursor-pointer">
           <input
  type="checkbox"
  checked={selectedCategories.includes("Speaker")}
  onChange={() => handleCategoryChange("Speaker")}
  className="h-4 w-4 accent-emerald-500"
/>
            <span className="text-slate-700">Speakers</span>
          </label>
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="font-semibold text-slate-800">
            Price
          </h4>

          <span className="text-sm font-medium text-emerald-500">
  Max ${maxPrice}
</span>
        </div>
<input
  type="range"
  min="50"
  max="500"
  value={maxPrice}
  onChange={(e) => setMaxPrice(Number(e.target.value))}
  className="w-full accent-emerald-500"
/>
        <div className="mt-2 flex justify-between text-sm text-slate-500">
          <span>$50</span>
          <span>$500</span>
        </div>
      </div>

      {/* Rating */}
      <div className="mb-8">
        <h4 className="mb-3 font-semibold text-slate-800">
          Rating
        </h4>

        <select
  value={selectedRating}
  onChange={(e) => setSelectedRating(e.target.value)}
  className="w-full rounded-lg border border-slate-300 p-2 outline-none focus:border-emerald-500"
>
  <option>All Ratings</option>
  <option>4★ & Above</option>
  <option>3★ & Above</option>
</select>
      </div>

      {/* Clear Button */}
    <button
  onClick={handleClearFilters}
  className="w-full rounded-xl border border-emerald-500 py-2.5 font-medium text-emerald-500 transition hover:bg-emerald-500 hover:text-white"
>
  Clear Filters
</button>

    </aside>
  );
};

export default ProductFilters;