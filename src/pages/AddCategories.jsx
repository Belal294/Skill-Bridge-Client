import { useForm } from "react-hook-form";
import authApiClient from "../services/auth-api-client";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Correct import

const AddCategories = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Correct usage of useNavigate

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await authApiClient.post("/categories/", data);
      alert("Category added successfully!");
      reset();
    } catch (error) {
      console.error("Error adding category:", error.response?.data || error.message);
      alert("Failed to add category.");
    } finally {
      setLoading(false);
      navigate("/dashboard/categories");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Category</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Category Name</label>
          <input
            {...register("name", { required: "Category name is required" })}
            className="input input-bordered w-full"
            placeholder="Category Name"
          />
          {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            className="textarea textarea-bordered w-full"
            placeholder="Category Description"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-xs">{errors.description.message}</p>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-full" disabled={loading}>
          {loading ? "Adding..." : "Add Category"}
        </button>
      </form>
    </div>
  );
};

export default AddCategories;
