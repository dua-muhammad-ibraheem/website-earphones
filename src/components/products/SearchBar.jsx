import { Search } from "lucide-react";

const SearchBar = ({
  searchTerm,
  setSearchTerm,
  sortOption,
  setSortOption,
}) => {
  console.log(searchTerm);
console.log(setSearchTerm);
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">

      {/* Search */}

      <div className="relative w-full md:max-w-md">

        <Search
          size={20}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
        />

    <input
  type="text"
  value={searchTerm}
  onChange={(e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  }}
  placeholder="Search products..."
  className="w-full rounded-xl border border-slate-300 py-3 pl-12 pr-4 outline-none transition focus:border-emerald-500"
/>

      </div>

      {/* Sort */}<select
  value={sortOption}
  onChange={(e) => setSortOption(e.target.value)}
  className="rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-emerald-500"
>
<option value="Newest">Newest</option>

<option value="Price: Low to High">
  Price: Low to High
</option>

<option value="Price: High to Low">
  Price: High to Low
</option>

<option value="Top Rated">
  Top Rated
</option>

      </select>

    </div>
  );
};

export default SearchBar;