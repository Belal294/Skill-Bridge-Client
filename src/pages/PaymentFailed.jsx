import { AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PaymentFailed = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-50">
      <div className="bg-white p-8 rounded-lg shadow-md text-center max-w-md">
        <AlertTriangle className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-yellow-600 mb-2">Payment Failed</h2>
        <p className="text-gray-600 mb-6">
          Unfortunately, your payment could not be processed. Please try again later.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default PaymentFailed;
