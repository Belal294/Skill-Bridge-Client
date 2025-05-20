import { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import authApiClient from '../services/auth-api-client';

const PaymentStatus = () => {
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const order_id = searchParams.get('order_id');
  const alert = searchParams.get('alert'); 

  useEffect(() => {
    const confirmPayment = async () => {
      if (alert === 'success' && order_id) {
        try {
          const response = await authApiClient.post('/payment-success/', { order_id }); 

          if (response.status === 200) {
            setMessage('Payment Successful!');
          } else {
            setMessage('Payment completed, but something went wrong while updating the order.');
            console.error('Backend payment success endpoint returned an unexpected response:', response);
          }
        } catch (error) {
          setMessage('An unexpected error occurred while confirming payment.');
          console.error('Error confirming payment:', error);
        }
      } else if (alert === 'cancel') {
        setMessage('Payment canceled.');
      } else {
        setMessage('Payment failed or something went wrong.');
      }

      setLoading(false);
    };

    confirmPayment();
  }, [alert, order_id]);

  const handleGoToOrders = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      {loading ? (
        <p className="text-lg">Processing payment...</p>
      ) : (
        <>
          <h2 className="text-2xl font-semibold mb-4">{message}</h2>
          {alert === 'success' && (
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              onClick={handleGoToOrders}
            >
              Go to My Dashboard!!
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default PaymentStatus;
