import React from "react";
import { useNavigate } from "react-router-dom";

const MenuItem = ({ icon, text, path, activeMenu, setActiveMenu, isExpanded }) => {
  const navigate = useNavigate();

  return (
    <div
      className={`flex items-center px-6 py-3 cursor-pointer transition-all ${
        activeMenu === text
          ? "bg-gradient-to-r from-[#5D50BC] to-[#9987C1]"
          : "hover:bg-gradient-to-r hover:from-[#5D50BC] hover:to-[#9987C1]"
      }`}
      onClick={() => {
        setActiveMenu(text);
        navigate(path);
      }}
    >
      <div className="text-xl">{icon}</div>
      {isExpanded && <span className="ml-3 whitespace-nowrap text-sm">{text}</span>}
    </div>
  );
};

export default MenuItem;