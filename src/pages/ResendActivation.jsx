import { useState } from "react";
import axios from "axios";

const ResendActivation = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleResend = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const _response = await axios.post(
        "https://skill-bridge-one.vercel.app/api/v1/auth/users/resend_activation/",
        { email }
      );
      setMessage("Activation email sent successfully!");
    } catch {
      setError("Failed to send activation email. Please check the email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Resend Activation Email</h2>
        <form onSubmit={handleResend} className="space-y-4">
          <div className="form-control">
            <label htmlFor="email" className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={loading}
          >
            {loading ? "Sending..." : "Resend Activation"}
          </button>
        </form>

        {message && <p className="text-success mt-4">{message}</p>}
        {error && <p className="text-error mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default ResendActivation;
