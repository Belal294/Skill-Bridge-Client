import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiClient from "../services/api-client";


const ResetPasswordConfirm = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");
    try {
      const response = await apiClient.post("/auth/users/reset_password_confirm/", {
        uid,
        token,
        new_password: data.password,
        re_new_password: data.confirmPassword,
      });

      if (response.status === 204 || response.status === 200) {
        setSuccessMsg("Password has been reset successfully. !!!");
        setTimeout(() => navigate("/login"), 2500);
      }
    } catch (error) {
      console.error("Reset error:", error.response?.data || error.message);
      const detail =
        error.response?.data?.detail || "The link might be invalid or expired.";
      setErrorMsg(`❌ ${detail}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">Set New Password</h2>
          <p className="text-base-content/70">Enter your new password below.</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            <div className="form-control">
              <label className="label" htmlFor="password">
                <span className="label-text">New Password</span>
              </label>
              <input
                id="password"
                type="password"
                placeholder="••••••••"
                className={`input input-bordered w-full ${
                  errors.password ? "input-error" : ""
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 8, message: "Password must be at least 8 characters" },
                })}
              />
              {errors.password && (
                <span className="label-text-alt text-error">
                  {errors.password.message}
                </span>
              )}
            </div>

            <div className="form-control">
              <label className="label" htmlFor="confirmPassword">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                className={`input input-bordered w-full ${
                  errors.confirmPassword ? "input-error" : ""
                }`}
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              {errors.confirmPassword && (
                <span className="label-text-alt text-error">
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={loading}>
              {loading ? "Resetting..." : "Reset Password"}
            </button>
          </form>

          {successMsg && <p className="text-success mt-4">{successMsg}</p>}
          {errorMsg && <p className="text-error mt-4">{errorMsg}</p>}
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordConfirm;
