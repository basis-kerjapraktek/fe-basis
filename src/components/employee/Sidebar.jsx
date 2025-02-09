import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome, FaBox, FaReply, FaExchangeAlt } from "react-icons/fa";
import { FiBell, FiClock, FiLogOut } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`relative h-screen ${
        isOpen ? "w-90" : "w-23"
      } bg-biru-denim text-putih-tulang p-5 transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        {isOpen && (
          <div className="flex items-center gap-7">
            <img
              src="/logo_bta.png"
              alt="Logo"
              className="w-12 h-12 object-contain"
            />
            <span className="text-2xl font-bold">BASIS</span>
          </div>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white p-2 focus:outline-none"
        >
          <FaBars size={18} />
        </button>
      </div>

      <nav className="mt-8">
        <SidebarLink
          to="/employee"
          icon={<FaHome size={16} />}
          label="Beranda"
          isOpen={isOpen}
        />
        <SidebarLink
          to="/employee/ItemList"
          icon={<FaBox size={16} />}
          label="Daftar Barang"
          isOpen={isOpen}
        />
        <SidebarLink
          to="/employee/RequestLoan"
          icon={<FaReply size={16} />}
          label="Ajukan Peminjaman"
          isOpen={isOpen}
        />
        <SidebarLink
          to="/employee/LoanHistory"
          icon={<FiClock size={16} />}
          label="Histori Peminjaman"
          isOpen={isOpen}
        />
        <SidebarLink
          to="/employee/ReturnRequest"
          icon={<FaExchangeAlt size={16} />}
          label="Ajukan Pengembalian"
          isOpen={isOpen}
        />
        <SidebarLink
          to="/employee/Notification"
          icon={<FiBell size={16} />}
          label="Notifikasi"
          isOpen={isOpen}
        />
        <SidebarLink
          to="/employee/Profile"
          icon={<BsFillPersonFill size={16} />}
          label="Profil"
          isOpen={isOpen}
        />
      </nav>

      <div className="absolute bottom-5 left-6 w-[calc(100%-3rem)]">
        <button className="flex items-center w-full gap-2 px-3 py-2 text-putih-tulang bg-gradient-purple transition-colors">
          <FiLogOut size={16} /> 
          {isOpen && <span>Keluar</span>}
        </button>
      </div>
    </div>
  );
};

const SidebarLink = ({ to, icon, label, isOpen }) => (
  <Link
    to={to}
    className="flex items-center gap-2 py-2 px-3 hover:bg-gradient-purple transition-colors"
  >
    {icon}
    {isOpen && <span>{label}</span>}
  </Link>
);

export default Sidebar;
