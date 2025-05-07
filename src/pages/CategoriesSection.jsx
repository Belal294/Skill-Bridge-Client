import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const CategoryCard = ({ index, category }) => {
  const gradients = [
    "from-pink-100 to-blue-100",
    "from-blue-100 to-purple-100",
    "from-purple-100 to-pink-100",
    "from-pink-100 to-blue-100",
  ];

  const gradient = gradients[index % gradients.length];
  const firstLetter = category?.name?.charAt(0)?.toUpperCase() || "C";
  const itemCount = category?.service_count ?? 0;
  const name = category?.name || "Untitled";
  const description = category?.description || "No description available for this category.";

  return (
    <div className={`rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer bg-gradient-to-br ${gradient}`}>
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div className="h-10 w-10 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold text-xl">
            {firstLetter}
          </div>
          <span className="text-sm text-gray-600 bg-white/70 px-2 py-1 rounded-full">
            {itemCount} {itemCount === 1 ? "Item" : "Items"}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
      </div>
    </div>
  );
};

const CategorySection = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true); // Spinner control

  useEffect(() => {
    apiClient
      .get("/categories")
      .then((res) => {
        const fetchedCategories = res.data?.results || [];
        setCategories(fetchedCategories);
      })
      .catch((err) => {
        console.error("Error fetching categories:", err);
      })
      .finally(() => {
        setLoading(false); // Stop spinner after fetch (success or fail)
      });
  }, []);

  return (
    <section className="py-16 bg-gray-50 px-4 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center">All Categories</h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-40">
          <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <CategoryCard key={category.id} index={index} category={category} />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500">No categories found.</p>
          )}
        </div>
      )}
    </section>
  );
};

export default CategorySection;
