import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";
import ErroAlert from "../components/ErroAlert";
import { useState } from "react";
import authApiClient from "../services/auth-api-client";

const Register = () => {
  const { registerUser, errorMsg } = useAuthContext();
  const [successMsg, setSuccessMsg] = useState("");
  const [registeredEmail, setRegisteredEmail] = useState(""); 
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    delete data.confirm_password;
    setLoading(true);
    try {
      const response = await registerUser(data);
      console.log(response);
      if (response.success) {
        setSuccessMsg(response.message);
        setRegisteredEmail(data.email); 
      }
    } catch (error) {
      console.log("Registration failed", error);
    } finally {
      setLoading(false);
    }
  };


const handleResendActivation = async () => {
  if (!registeredEmail) {
    alert("No registered email found. Please register first.");
    return;
  }

  try {
    const res = await authApiClient.post("/auth/users/resend_activation/", {
      email: registeredEmail,
    });

    if (res.status === 204 || res.status === 200) {
      alert("✅ Activation email resent successfully!");
    } else {
      const result = res.data;
      alert(result?.detail || result?.message || "❌ Failed to resend email.");
    }
  } catch (error) {
    console.error("Resend activation error:", error);
    alert(
      error?.response?.data?.detail ||
        error?.response?.data?.message ||
        "❌ Error resending activation email"
    );
  }
};


  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 bg-base-200">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          {errorMsg && <ErroAlert error={errorMsg} />}

          {/* Success Alert */}
          {successMsg && (
            <>
              <div role="alert" className="alert alert-success">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 shrink-0 stroke-current"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{successMsg}</span>
              </div>

              {/* Resend Activation Section */}
              <div className="mt-4 text-center">
                <p className="text-sm text-base-content/70">
                  Didn’t receive the activation email?
                </p>
                <button
                  onClick={handleResendActivation}
                  className="btn btn-link text-primary p-0"
                >
                  Resend Activation Email
                </button>
              </div>
            </>
          )}

          <h2 className="card-title text-2xl font-bold mt-4">Sign Up</h2>
          <p className="text-base-content/70">
            Create an account to get started
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
            {/* Input Fields */}
            {[...[
              {
                id: "username",
                label: "Username",
                placeholder: "john_doe",
                type: "text",
                validation: { required: "Username is required" },
              },
              {
                id: "first_name",
                label: "First Name",
                placeholder: "John",
                type: "text",
                validation: { required: "First Name is Required" },
              },
              {
                id: "last_name",
                label: "Last Name",
                placeholder: "Doe",
                type: "text",
                validation: { required: "Last Name is Required" },
              },
              {
                id: "email",
                label: "Email",
                placeholder: "name@example.com",
                type: "email",
                validation: { required: "Email is Required" },
              },
              {
                id: "address",
                label: "Address",
                placeholder: "7/A Dhanmondi, Dhaka",
                type: "text",
              },
              {
                id: "phone_number",
                label: "Phone Number",
                placeholder: "0123456789",
                type: "text",
              },
              {
                id: "password",
                label: "Password",
                placeholder: "••••••••",
                type: "password",
                validation: {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                },
              },
              {
                id: "confirm_password",
                label: "Confirm Password",
                placeholder: "••••••••",
                type: "password",
                validation: {
                  required: "Confirm Password is required",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                },
              },
            ]].map(({ id, label, placeholder, type, validation = {} }) => (
              <div className="form-control" key={id}>
                <label className="label" htmlFor={id}>
                  <span className="label-text">{label}</span>
                </label>
                <input
                  id={id}
                  type={type}
                  placeholder={placeholder}
                  className="input input-bordered w-full"
                  disabled={loading}
                  {...register(id, validation)}
                />
                {errors[id] && (
                  <span className="label-text-alt text-error">
                    {errors[id].message}
                  </span>
                )}
              </div>
            ))}

            {/* Role Dropdown */}
            <div className="form-control">
              <label className="label" htmlFor="role">
                <span className="label-text">Role</span>
              </label>
              <select
                id="role"
                className="select select-bordered w-full"
                disabled={loading}
                {...register("role", { required: "Role is required" })}
              >
                <option value="buyer">Buyer</option>
                <option value="seller">Seller</option>
              </select>
              {errors.role && (
                <span className="label-text-alt text-error">
                  {errors.role.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className={`btn btn-primary w-full ${loading ? "btn-disabled" : ""}`}
              disabled={loading}
            >
              {loading && (
                <span className="loading loading-spinner loading-sm mr-2" />
              )}
              {loading ? "Registering..." : "Register"}
            </button>
          </form>

          <div className="text-center mt-4">
            <p className="text-base-content/70">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
