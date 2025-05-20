import {
  FiBarChart2,
  FiPackage,
  FiPlusCircle,
  FiShoppingCart,
  FiStar,
  FiTag,
  FiUsers,
  FiArrowLeft,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const menuItems = [
    { to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
    { to: "/dashboard/shop", icon: FiPackage, label: "Products" },
    { to: "/dashboard/products/add", icon: FiPlusCircle, label: "Add Product" },
    { to: "/dashboard/categories", icon: FiTag, label: "Categories" },
    { to: "/dashboard/categories/add", icon: FiPlusCircle, label: "Add Category" },
    // { to: "/dashboard/orders", icon: FiShoppingCart, label: "Orders" },
    { to: "/dashboard/reviews", icon: FiStar, label: "Reviews" },
    { to: "/dashboard/profile", icon: FiUsers, label: "Profile" },
  ];

  return (
    <div className="drawer-side z-10">
      <label htmlFor="drawer-toggle" aria-label="close sidebar" className="drawer-overlay"></label>
      <aside className="menu bg-base-200 w-64 min-h-full p-4 text-base-content flex flex-col">
        {/* Sidebar header */}
        <div className="flex items-center gap-2 mb-6 px-2">
          <Link to="/">
            <h1 className="text-xl font-bold">Skill-Bridge</h1>
          </Link>
        </div>

        {/* Sidebar menu */}
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

        {/* Back to Home Button */}
        <div className="mt-auto">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            <FiArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          {/* Sidebar footer */}
          <div className="pt-4 text-xs text-base-content/70 text-center">
            © 2025 Skill-Bridge Admin
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
