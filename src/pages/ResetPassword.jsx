import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const ResetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      const _response = await axios.post("https://skill-bridge-one.vercel.app/api/v1/auth/users/reset_password/", {
        email: data.email,
      });
      setMessage(" Password reset email sent. Please check your inbox.");
      setError("");
    } catch (err) {
      console.error(err);
      setError("Failed to send password reset email. ❌");
      setMessage("");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Reset Password</h2>
          <p className="text-base-content/70">Enter your email to reset your password.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div className="form-control">
              <label className="label" htmlFor="email">
                <span className="label-text">Email</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                className={`input input-bordered w-full ${errors.email ? "input-error" : ""}`}
                {...register("email", { required: "Email is required" })}
              />
              {errors.email && (
                <span className="label-text-alt text-error">
                  {errors.email.message}
                </span>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-full">
              Send Reset Link
            </button>
          </form>

          {message && <p className="text-success mt-2">{message}</p>}
          {error && <p className="text-error mt-2">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
