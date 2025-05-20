import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom"; 
import useAuthContext from "../../hooks/useAuthContext";
import { useEffect, useState } from "react";
import authApiClient from "../../services/auth-api-client"; // JWT-enabled axios
import { IoNotificationsOutline } from "react-icons/io5"; // notification icon

const Navbar = ({ sidebarOpen }) => {
  const { _user, logoutUser } = useAuthContext();
  const navigate = useNavigate();
  const [unreadCount, setUnreadCount] = useState(0);

  const handleLogout = () => {
    logoutUser();
    navigate("/"); 
  };

  useEffect(() => {
    const fetchUnread = async () => {
      try {
        const res = await authApiClient.get("/notifications/");
        const data = Array.isArray(res.data) ? res.data : res.data.results;
        const unread = data.filter(n => !n.is_read).length;
        setUnreadCount(unread);
      } catch (err) {
        console.error("Failed to fetch notifications:", err);
      }
    };
    fetchUnread();
  }, []);
  

  return (
    <div className="navbar bg-base-100 border-b">
      <div className="flex-none lg:hidden">
        <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
          {sidebarOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </label>
      </div>

      <div className="flex-1 flex items-center gap-4">
        <h2 className="text-lg font-semibold">Dashboard</h2>
      </div>

      <div className="flex-none flex gap-3 items-center">
        {/* Notification Icon */}
        <Link to="/dashboard/notifications" className="btn btn-ghost btn-circle relative">
          <IoNotificationsOutline className="h-6 w-6" />
          {unreadCount > 0 && (
            <span className="badge badge-error badge-sm absolute -top-1 -right-1">
              {unreadCount}
            </span>
          )}
        </Link>

        {/* User Dropdown */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="User avatar"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/dashboard/profile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            {/* <li>
              <Link to="/dashboard/settings">Settings</Link>
            </li> */}
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
