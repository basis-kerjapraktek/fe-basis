import React from "react";
import { FaBox, FaUndo, FaExclamationTriangle } from "react-icons/fa"; // Import icon

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F5F5FA] p-6">
      {/* Statistik */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {[
          { label: "Barang Dipinjam", count: 1, icon: <FaBox size={24} /> },
          { label: "Pengembalian Terdekat", count: 1, icon: <FaUndo size={24} /> },
          { label: "Pelanggaran", count: 1, icon: <FaExclamationTriangle size={24} /> },
        ].map((item, index) => (
          <div key={index} className="bg-[#6C47FF] text-white p-5 rounded-lg shadow-md flex items-center h-24">
            <div className="mr-3">{item.icon}</div> {/* Icon di kiri */}
            <div className="flex flex-col items-center w-full"> {/* Rata tengah */}
              <span className="text-3xl font-bold">{item.count}</span> {/* Ukuran angka tetap besar */}
              <p className="text-sm">{item.label}</p> {/* Ukuran teks lebih kecil */}
            </div>
          </div>
        ))}
      </div>

      {/* Kartu Pelanggaran */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold">Kartu Pelanggaran</h2>
        <div className="bg-white p-4 rounded-md mt-2 shadow-md border border-gray-300">
          <div className="bg-yellow-400 w-32 h-8  mb-2"></div> {/* Kolom merah lebih panjang */}
          <p className="text-md text-Black-600 mt-1">Status: Pelanggar</p>
          <p className="text-md text-gray-700 mt-1">Anda telah melakukan pelanggaran satu kali.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
