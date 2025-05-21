import { useForm } from "react-hook-form";
import { useState } from "react";
import apiClient from "../services/api-client";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailValue = watch("email");

  const onSubmit = async (data) => {
    // Clear previous messages
    setError("");
    setMessage("");
    setLoading(true);

    try {
      console.log("Sending request with email:", data.email);

      const response = await apiClient.post("/auth/users/reset_password/", {
        email: data.email,
      });

      console.log("Response from API:", response);

      setMessage(
        "If this email is registered, a password reset link has been sent."
      );
    } catch (err) {
      console.error("Error caught in catch block:", err);
      console.error("Error response data:", err.response?.data);

      // Handle specific error messages from API
      if (
        err.response?.data?.email &&
        Array.isArray(err.response.data.email) &&
        err.response.data.email.includes("User with this email does not exist.")
      ) {
        setError("Email not found. Please try again.");
      } else if (
        err.response?.data?.detail &&
        err.response.data.detail === "Not found."
      ) {
        setError("Email not found. Please try again.");
      } else {
        setError("Failed to send password reset email. Please try later.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Reset Password</h2>
          <p className="text-base-content/70 mb-4">
            Enter your email to reset your password.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-control">
              <label htmlFor="email" className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className={`input input-bordered w-full ${
                  errors.email ? "input-error" : ""
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
                disabled={loading}
              />
              {errors.email && (
                <span className="label-text-alt text-error">
                  {errors.email.message}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={!emailValue || errors.email || loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Send Reset Link"
              )}
            </button>
          </form>

          {message && (
            <p className="text-success mt-4" role="alert">
              {message}
            </p>
          )}
          {error && (
            <p className="text-error mt-4" role="alert">
              {error}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
