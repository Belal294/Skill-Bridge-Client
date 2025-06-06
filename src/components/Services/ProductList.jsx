// src/pages/Shop/ProductList.jsx
import ProductItem from "../../Serice-Product/ProductItem";

const ProductList = ({ products, loading, errorMessage }) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-10 min-h-screen">
        <span className="loading loading-spinner loading-xl text-secondary"></span>
      </div>
    );
  }

  if (!loading && products.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        {errorMessage || "No products found."}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
