import React from "react";
import { useNavigate } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center items-start min-h-screen pt-10 relative">
      {/* Container */}
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl flex space-x-10 relative">
        
        {/* Tombol X (Kembali) */}
        <button
          onClick={() => navigate("/employee/LoanHistory")}
          className="absolute top-2 right-4 text-gray-600 hover:text-gray-800 text-lg"
        >
          ❌
        </button>

        {/* Foto Barang */}
        <div className="flex-shrink-0 border-4 border-purple-500 rounded-lg p-2 w-40 h-40 flex items-center justify-center mt-3">
          <img
            src="/gambar/LaptopHp.jpg"
            alt="Barang"
            className="rounded-md w-full h-full object-cover"
          />
        </div>

        {/* Informasi Barang */}
        <div className="flex-grow space-y-6">
          <div className="grid grid-cols-2 gap-x-10 gap-y-5">
            {[
              { label: "Nama Barang", value: "Laptop Hp" },
              { label: "ID Barang", value: "ITEM-0A1" },
              { label: "Tanggal Mulai", value: "12-02-2025" },
              { label: "Tanggal Selesai", value: "15-02-2025" },
              { label: "Perpanjangan", value: "Tidak Ada" },
              { label: "Status", value: "Disetujui" },
            ].map((item, index) => (
              <div key={index}>
                <p className="font-medium text-black">{item.label}</p>
                <p className="text-white bg-purple-500 px-3 py-2 rounded-md">{item.value}</p>
              </div>
            ))}

            {/* Pesan dari Admin */}
            <div className="col-span-2">
              <p className="font-medium text-black">Pesan dari Admin</p>
              <p className="bg-white border-2 border-purple-500 text-black px-4 py-4 rounded-md min-h-[80px]">
                Silakan ambil barang sesuai jadwal.
              </p>
            </div>
          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-end space-x-4 mt-8">
            <button
              onClick={() => navigate("/employee/RequestLoanStep1")}
              className="px-4 py-2 text-sm bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Perpanjangan
            </button>
            <button
              onClick={() => navigate("/employee/ReturnRequestStep1")}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Kembalikan Barang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
