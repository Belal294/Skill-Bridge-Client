// src/components/ui/button.jsx
import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        px-5 py-2 rounded-2xl text-white font-semibold bg-gradient-to-r
        from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500
        transition duration-300 shadow-lg hover:shadow-xl focus:outline-none
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default Button;
