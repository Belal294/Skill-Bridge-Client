import {
  FiBarChart2,
  FiPackage,
  FiPlusCircle,
  FiStar,
  FiTag,
  FiUsers,
  FiHome,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";

const Sidebar = () => {
  const { user } = useAuthContext();

  const hasRole = (roles) => roles.includes(user?.role);

  const menuItems = [
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/dashboard/shop", icon: FiPackage, label: "Products" },

    ...(hasRole(["seller", "admin"])
      ? [{ to: "/dashboard/products/add", icon: FiPlusCircle, label: "Add Product" }]
      : []),

    { to: "/dashboard/categories", icon: FiTag, label: "Categories" },

    ...(hasRole(["seller", "admin"])
      ? [{ to: "/dashboard/categories/add", icon: FiPlusCircle, label: "Add Category" }]
      : []),

    { to: "/dashboard/reviews", icon: FiStar, label: "Reviews" },
    { to: "/dashboard/profile", icon: FiUsers, label: "Profile" },
  ];

  return (
    <div className="drawer-side z-10 fixed top-0 left-0 h-[100vh]">
      <label htmlFor="drawer-toggle" aria-label="close sidebar" className="drawer-overlay"></label>
      <aside className="menu bg-base-200 w-64 h-full p-4 text-base-content flex flex-col justify-between">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-6 px-2">
            <Link to="/">
              <h1 className="text-xl font-bold">Skill-Bridge</h1>
            </Link>
          </div>

          <ul className="menu menu-md gap-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link to={item.to} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Footer */}
        <div className="space-y-2">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-600 hover:text-blue-500 py-2 px-3 rounded-md hover:bg-gray-100 transition"
          >
            <FiHome className="text-xl" />
            <span>Back to Home</span>
          </Link>
          <p className="text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} SkillBridge. All rights reserved.
          </p>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
