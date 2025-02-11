// import React from "react";
// import { useNavigate } from "react-router-dom";

// const MenuItem = ({ icon, text, path, activeMenu, setActiveMenu, isExpanded }) => {
//   const navigate = useNavigate();

//   return (
//     <div
//       className={`flex items-center p-3 cursor-pointer transition-all duration-300 ${activeMenu === text ? "bg-[#5D50BC]" : "hover:bg-[#3F2E7C]"}`}
//       onClick={() => {
//         setActiveMenu(text);
//         navigate(path);
//       }}
//     >
//       <div className="w-6 h-6">{icon}</div>
//       {isExpanded && <span className="ml-3">{text}</span>}
//     </div>
//   );
// };

// export default MenuItem;