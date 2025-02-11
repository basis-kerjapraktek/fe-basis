// import React, { useState } from "react";
// import { FaBars, FaHome, FaBox, FaClipboardList, FaReply, FaFileAlt, FaBell, FaComments, FaUser, FaSignOutAlt } from "react-icons/fa";
// import MenuItem from "./MenuItem";
// import { useNavigate } from "react-router-dom";

// const Sidebar = () => {
//   const [activeMenu, setActiveMenu] = useState("Beranda");
//   const [isExpanded, setIsExpanded] = useState(true);
//   const navigate = useNavigate();

//   // Fungsi Logout
//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     localStorage.removeItem("role");
//     window.location.href = "/"; // Redirect ke halaman login
//   };  

//   return (
//     <div className={`bg-[#2D1B69] text-white flex flex-col h-screen transition-all duration-300 ${isExpanded ? "w-64" : "w-20"}`}>
//       {/* Header dengan Logo dan Tombol Hamburger */}
//       <div className="flex items-center justify-between p-4">
//         {isExpanded && (
//           <>
//             <img src="/logo_bta.png" alt="Logo" className="w-12 h-12 object-contain" />
//             <span className="text-2xl font-bold">BASIS</span>
//           </>
//         )}
//         <button onClick={() => setIsExpanded(!isExpanded)} className="text-white p-2">
//           <FaBars size={24} />
//         </button>
//       </div>

//       {/* Menu */}
//       <nav className="flex-1">
//         <MenuItem icon={<FaHome />} text="Beranda" path="/admin" activeMenu={activeMenu} setActiveMenu={setActiveMenu} isExpanded={isExpanded} />
//         <MenuItem icon={<FaBox />} text="Kelola Barang" path="/admin/kelola-barang" activeMenu={activeMenu} setActiveMenu={setActiveMenu} isExpanded={isExpanded} />
//         <MenuItem icon={<FaClipboardList />} text="Peminjaman Barang" path="/admin/peminjaman" activeMenu={activeMenu} setActiveMenu={setActiveMenu} isExpanded={isExpanded} />
//         <MenuItem icon={<FaReply />} text="Pengembalian Barang" path="/admin/pengembalian" activeMenu={activeMenu} setActiveMenu={setActiveMenu} isExpanded={isExpanded} />
//         <MenuItem icon={<FaFileAlt />} text="Laporan" path="/admin/laporan" activeMenu={activeMenu} setActiveMenu={setActiveMenu} isExpanded={isExpanded} />
//         <MenuItem icon={<FaBell />} text="Notifikasi" path="/admin/notifikasi" activeMenu={activeMenu} setActiveMenu={setActiveMenu} isExpanded={isExpanded} />
//         <MenuItem icon={<FaComments />} text="Tanggapan" path="/admin/tanggapan" activeMenu={activeMenu} setActiveMenu={setActiveMenu} isExpanded={isExpanded} />
//         <MenuItem icon={<FaUser />} text="Profil" path="/admin/profil" activeMenu={activeMenu} setActiveMenu={setActiveMenu} isExpanded={isExpanded} />
//       </nav>

//       {/* Tombol Keluar */}
//       <div className="p-4">
//         <button 
//           onClick={handleLogout} 
//           className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-[#5D50BC] to-[#9987C1] hover:from-[#4C3FA5] hover:to-[#8676B5] text-white py-2 transition duration-300"
//         >
//           <FaSignOutAlt /> {isExpanded && "Keluar"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;