import React from "react"; 

const Header = () => {
  return (
    <div className="flex justify-between items-center p-6 bg-gray-100 rounded-lg shadow-md">
      {/* Bagian Kiri: Sambutan */}
      <div>
        <h1 className="text-xl font-bold">Halo Herlina!</h1>
        <p className="text-gray-600">Ajukan permohonan barang yang Anda butuhkan sekarang!</p>
      </div>

      {/* Bagian Kanan: Foto & Nama */}
      <div className="flex items-center gap-3">
      <img 
  src="/gambar/FotoEmployee.jpg" 
  alt="Profil employee"
  className="w-12 h-12 rounded-full object-cover border border-gray-300 shadow-sm"
/>

        <div>
          <p className="text-lg font-semibold">Herlina Putri</p>
          <p className="text-gray-500 text-sm">Karyawan</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
