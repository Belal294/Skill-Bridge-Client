import { Link, useNavigate } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";
import useAuthContext from "../../hooks/useAuthContext";
import authApiClient from "../../services/auth-api-client";
import { useEffect, useState } from "react";

const NavbarSection = () => {
  const { user, logoutUser } = useAuthContext();
  const navigate = useNavigate();
  const [unreadCount, setUnreadCount] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false); // NEW

  useEffect(() => {
    const fetchUnread = async () => {
      try {
        const res = await authApiClient.get("/notifications/");
        const data = Array.isArray(res.data) ? res.data : res.data.results;
        const unread = data.filter((n) => !n.is_read).length;
        setUnreadCount(unread);
      } catch (err) {
        console.error("Failed to fetch notifications:", err);
      }
    };
    if (user) fetchUnread();
  }, [user]);

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="container mx-auto px-4 mt-5 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <svg
          className="w-8 h-8 text-indigo-600"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
        <Link to="/" className="text-xl font-bold">Skill-Bridge</Link>
      </div>

      {/* Nav Links */}
      <nav className="hidden md:flex items-center gap-6">
        <Link to="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
        <Link to="shop" className="text-gray-700 hover:text-indigo-600">Services</Link>
        <Link to="/about" className="text-gray-700 hover:text-indigo-600">About Us</Link>
        <Link to="/contact" className="text-gray-700 hover:text-indigo-600">Contact Us</Link>
      </nav>

      {/* User Section */}
      <div className="flex items-center gap-4 relative">
        {user ? (
          <>
            <Link to="/dashboard/notifications" className="relative text-gray-700 hover:text-indigo-600">
              <IoNotificationsOutline className="h-6 w-6" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                  {unreadCount}
                </span>
              )}
            </Link>

            <div className="relative">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="User Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={toggleDropdown}
              />
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg p-2 z-50">
                  <Link
                    to="/dashboard/profile"
                    className="block px-2 py-1 hover:bg-gray-100"
                    onClick={closeDropdown}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      closeDropdown();
                    }}
                    className="block w-full text-left px-2 py-1 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-700 hover:text-indigo-600">Log in</Link>
            <Link
              to="/register"
              className="bg-white text-indigo-600 px-4 py-2 rounded-full border border-indigo-600 hover:bg-indigo-50"
            >
              Sign Up
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default NavbarSection;
