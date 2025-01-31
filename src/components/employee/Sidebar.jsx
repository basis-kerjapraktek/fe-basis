// import { FaBars, FaHome, FaBox, FaClipboardList, FaHistory, FaSignOutAlt } from "react-icons/fa";

// export default function Sidebar({ isOpen, setIsOpen }) {
//   return (
//     <div className={`bg-[#272264] h-screen transition-all ${isOpen ? 'w-64' : 'w-20'} p-4 flex flex-col`}> 
//       <button onClick={() => setIsOpen(!isOpen)} className="text-white mb-4">
//         <FaBars size={24} />
//       </button>
//       <nav className="flex flex-col space-y-4 text-white">
//         <a href="#" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gradient-to-r from-[#5D50BC] to-[#9987C1]">
//           <FaHome size={24} /> {isOpen && <span>Beranda</span>}
//         </a>
//         <a href="#" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gradient-to-r from-[#5D50BC] to-[#9987C1]">
//           <FaBox size={24} /> {isOpen && <span>Daftar Barang</span>}
//         </a>
//         <a href="#" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gradient-to-r from-[#5D50BC] to-[#9987C1]">
//           <FaClipboardList size={24} /> {isOpen && <span>Ajukan Peminjaman</span>}
//         </a>
//         <a href="#" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gradient-to-r from-[#5D50BC] to-[#9987C1]">
//           <FaHistory size={24} /> {isOpen && <span>Histori Peminjaman</span>}
//         </a>
//         <a href="#" className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gradient-to-r from-[#5D50BC] to-[#9987C1]">
//           <FaSignOutAlt size={24} /> {isOpen && <span>Keluar</span>}
//         </a>
//       </nav>
//     </div>
//   );
// }
