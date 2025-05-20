import React, { useEffect, useState } from 'react';
import authApiClient from '../../services/auth-api-client';
import { XIcon } from '../../pages/DashboardComponents/Icons'; 

const NotificationList = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deletingId, setDeletingId] = useState(null);

  const fetchNotifications = async () => {
    try {
      const res = await authApiClient.get("/notifications/");
      const data = res.data?.results || [];

      // Optional: Filter only completed if needed
      // const completedOnly = data.filter(n =>
      //   n.message?.toLowerCase().includes("completed")
      // );

      setNotifications(data);
    } catch (err) {
      console.error("Failed to load notifications:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteNotification = async (id) => {
    setDeletingId(id);
    try {
      await authApiClient.delete(`/notifications/${id}/`);
      setNotifications(prev => prev.filter(n => n.id !== id));
    } catch (err) {
      console.error("Failed to delete notification:", err);
    } finally {
      setDeletingId(null);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>

      {loading ? (
        <div className="flex justify-center items-center h-24">
          <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : notifications.length === 0 ? (
        <p>You don't have any notifications.</p>
      ) : (
        <ul className="space-y-2">
          {notifications.map((n) => (
            <li
              key={n.id}
              className="p-3 border rounded bg-blue-50 flex justify-between items-start"
            >
              <div>
                <div className="text-gray-800">{n.message}</div>
                <div className="text-sm text-gray-500">
                  {n.created_at ? new Date(n.created_at).toLocaleString() : "Time not available"}
                </div>
                {n.order_status && (
                  <div className="text-xs mt-1 text-blue-600 font-medium">
                    Status: {n.order_status}
                  </div>
                )}
              </div>
              <button
                onClick={() => deleteNotification(n.id)}
                className={`text-red-500 hover:text-red-700 text-sm flex items-center gap-1 ${
                  deletingId === n.id ? 'cursor-wait' : 'cursor-pointer'
                }`}
                disabled={deletingId === n.id}
              >
                {deletingId === n.id ? (
                  <div className="w-4 h-4 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  <>
                    <span className="cursor-pointer"><XIcon /></span>
                  </>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NotificationList;
