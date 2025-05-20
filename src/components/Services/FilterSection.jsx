import { FiSearch, FiX } from "react-icons/fi";

const FilterSection = ({
  categories,
  selectedCategory,
  handleCategoryChange,
  searchQuery,
  handleSearchQuery,
  sortOrder,
  handleSorting,
}) => {
  return (
    <div className="mb-10 space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearchQuery(e.target.value)}
          placeholder="Search for products or services..."
          className="w-full pl-12 pr-12 py-4 text-lg border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          <FiSearch size={20} />
        </span>
        {searchQuery && (
          <button
            onClick={() => handleSearchQuery("")}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-red-500"
            aria-label="Clear search"
          >
            <FiX size={20} />
          </button>
        )}
      </div>

      {/* Category Tags (Clickable) */}
      <div>
        <h2 className="text-md font-semibold text-gray-700 mb-2">Categories</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          <button
            onClick={() => handleCategoryChange("")}
            className={`px-3 py-1 rounded-full border ${
              selectedCategory === "" ? "bg-blue-100 border-blue-400 text-blue-700" : "bg-gray-100 border-gray-300"
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-3 py-1 rounded-full border transition ${
                selectedCategory === category.id
                  ? "bg-blue-100 border-blue-400 text-blue-700"
                  : "bg-gray-100 border-gray-300 hover:bg-blue-50"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Sorting Buttons */}
      <div className="flex justify-end items-center">
        <span className="mr-4 text-sm text-gray-700 font-medium">Sort by Price:</span>
        <div className="flex gap-2">
          <button
            onClick={() => handleSorting("price")}
            className={`px-3 py-1 text-xs rounded-md border ${
              sortOrder === "price"
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white border-gray-300 hover:bg-blue-100"
            }`}
          >
            Low
          </button>
          <button
            onClick={() => handleSorting("-price")}
            className={`px-3 py-1 text-xs rounded-md border ${
              sortOrder === "-price"
                ? "bg-blue-500 text-white border-blue-500"
                : "bg-white border-gray-300 hover:bg-blue-100"
            }`}
          >
            High
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
