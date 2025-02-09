import Sidebar from "../components/admin/Sidebar";
import { Outlet } from "react-router-dom";
import FotoProfil from "/src/assets/gambar/foto_profil.png";

const AdminLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Konten utama */}
      <div className="flex-1 bg-gray-100 p-6">
        {/* Header */}
        <div className="bg-white p-6 rounded-tl-2xl rounded-tr-2xl shadow-md flex justify-between items-center">
          {/* Teks Sambutan */}
          <div>
            <h1 className="text-2xl font-bold">Halo Refiani!</h1>
            <p className="text-gray-600">Mari lihat informasi tata kelola sistem inventaris secara visual</p>
          </div>

          {/* Profil Admin */}
          <div className="flex items-center gap-3">
            <img
              src={FotoProfil}
              alt="Foto Profil"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h2 className="font-semibold">Refiani Julianti</h2>
              <p className="text-gray-500 text-sm">Admin</p>
            </div>
          </div>
        </div>

        {/* Outlet untuk halaman dalam layout */}
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;