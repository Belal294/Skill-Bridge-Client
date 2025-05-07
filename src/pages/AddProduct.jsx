import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import apiClient from "../services/api-client";
import authApiClient from "../services/auth-api-client";
import { useNavigate } from "react-router-dom"; 

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [categories, setCategories] = useState([]);
  const [productId, setProductId] = useState(null);
  const [previewImages, setPreviewImages] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Fetch Categories
  useEffect(() => {
    apiClient.get("/categories/").then((res) => {
      setCategories(res.data.results);
    });
  }, []);




  // Submit Product Details
  const handleProductAdd = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("price", data.price);
      formData.append("delivery_time", data.delivery_time);
      formData.append("category", data.category);
  
      const productRes = await authApiClient.post("/services/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      setProductId(productRes.data.id);
      alert("Product added successfully! Now you can upload images.");
    } catch (error) {
      console.log("Error adding product", error.response?.data || error.message);
      alert("Failed to add product. Please try again.");
    }
  };
  
  // Handle Image Change
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    setPreviewImages(files.map((file) => URL.createObjectURL(file)));
  };

  // Handle Image Upload
  const handleUpload = async () => {
    if (!images.length) return alert("Please select images.");
    setLoading(true);
    try {
      for (const image of images) {
        const formData = new FormData();
        formData.append("image", image);
        await authApiClient.post(`/services/${productId}/images/`, formData);
      }
      setLoading(false);
      alert("Images uploaded successfully!");
      navigate("/shop");
    } catch (error) {
      console.log("Error uploading image", error);
      alert("Image upload failed.");
      setLoading(false);
    }
  };

  const handleRemoveImage = (index) => {
    const newImages = [...images];
    const newPreviews = [...previewImages];
    newImages.splice(index, 1);
    newPreviews.splice(index, 1);
    setImages(newImages);
    setPreviewImages(newPreviews);
  };
  

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
      {!productId ? (
        <form onSubmit={handleSubmit(handleProductAdd)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Product Name</label>
            <input
              {...register("title", { required: true })}
              className="input input-bordered w-full"
              placeholder="Product Name"
            />
            {errors.title && (
              <p className="text-red-500 text-xs">This field is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              {...register("description", { required: true })}
              className="textarea textarea-bordered w-full"
              placeholder="Description"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-xs">This field is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Price</label>
            <input
              type="text"
              {...register("price", {
                required: "This field is required",
                validate: (value) => {
                  const parsedValue = parseFloat(value);
                  return !isNaN(parsedValue) || "Please enter a valid number!";
                },
              })}
              className="input input-bordered w-full"
              placeholder="Price"
            />
            {errors.price && (
              <p className="text-red-500 text-xs">{errors.price.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Delivery Time</label>
            <input
              type="number"
              {...register("delivery_time", { required: true })}
              className="input input-bordered w-full"
              placeholder="Delivery Time (days)"
            />
            {errors.delivery_time && (
              <p className="text-red-500 text-xs">This field is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium">Category</label>
            <select
              {...register("category", { required: true })}
              className="select select-bordered w-full"
            >
              <option value="">Select a category</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
            {errors.category && (
              <p className="text-red-500 text-xs">This field is required</p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Add Product
          </button>
        </form>
      ) : (
        <div>
          <h3 className="text-lg font-medium mb-2">Upload Product Images</h3>
          <input
            type="file"
            multiple
            accept="image/*"
            className="file-input file-input-bordered w-full"
            onChange={handleImageChange}
          />
          {previewImages.length > 0 && (
            <div className="flex gap-2 mt-2 flex-wrap">
            {previewImages.map((src, idx) => (
              <div key={idx} className="relative w-16 h-16">
                <img
                  src={src}
                  alt="Preview"
                  className="w-full h-full rounded-md object-cover"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveImage(idx)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
          
          )}

          <button
            onClick={handleUpload}
            className="btn btn-primary w-full mt-2"
            disabled={loading}
          >
            {loading ? "Uploading images..." : "Upload Images"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProduct;
