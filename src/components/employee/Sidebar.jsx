import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaHome, FaBox, FaReply, FaExchangeAlt } from "react-icons/fa";
import { FiBell, FiClock, FiLogOut } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className={`relative min-h-screen ${
        isOpen ? "w-70" : "w-20"
      } bg-biru-denim text-putih-tulang p-5 transition-all duration-300`}
    >
      {/* Header Sidebar */}
      <div className="flex items-center justify-between">
        {isOpen && (
          <div className="flex items-center gap-4">
            <img src="/logo_bta.png" alt="Logo" className="w-12 h-12 object-contain" />
            <span className="text-2xl font-bold">BASIS</span>
          </div>
        )}
        <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2 focus:outline-none">
          <FaBars size={24} />
        </button>
      </div>

      {/* Menu Sidebar */}
      <nav className="mt-8 space-y-2">
        <SidebarLink to="/employee" icon={<FaHome size={20} />} label="Beranda" isOpen={isOpen} />
        <SidebarLink to="/employee/ItemList" icon={<FaBox size={20} />} label="Daftar Barang" isOpen={isOpen} />
        <SidebarLink to="/employee/RequestLoanStep1" icon={<FaReply size={20} />} label="Ajukan Peminjaman" isOpen={isOpen} />
        <SidebarLink to="/employee/LoanHistory" icon={<FiClock size={20} />} label="Histori Peminjaman" isOpen={isOpen} />
        <SidebarLink to="/employee/ReturnRequestStep1" icon={<FaExchangeAlt size={20} />} label="Ajukan Pengembalian" isOpen={isOpen} />
        <SidebarLink to="/employee/Notification" icon={<FiBell size={20} />} label="Notifikasi" isOpen={isOpen} />
        <SidebarLink to="/employee/Profile" icon={<BsFillPersonFill size={20} />} label="Profil" isOpen={isOpen} />
      </nav>

      {/* Tombol Logout */}
      <div className="absolute bottom-5 left-5 w-[calc(100%-2.5rem)]">
        <button
          onClick={() => navigate("/")}
          className={`flex items-center w-full gap-3 px-3 py-2 rounded-md transition-colors ${
            isOpen ? "bg-gradient-purple text-putih-tulang" : "text-gray-400"
          }`}
        >
          <FiLogOut size={20} />
          {isOpen && <span>Keluar</span>}
        </button>
      </div>
    </div>
  );
};

const SidebarLink = ({ to, icon, label, isOpen }) => (
  <Link
    to={to}
    className="flex items-center gap-3 py-2 px-3 hover:bg-gradient-purple transition-colors"
  >
    {icon}
    {isOpen && <span className="text-sm">{label}</span>}
  </Link>
);

export default Sidebar;
