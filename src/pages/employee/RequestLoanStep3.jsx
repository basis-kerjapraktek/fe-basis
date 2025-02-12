import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressRequest from "../../components/employee/ProgressRequest";

const RequestLoanStep3 = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState("Keperluan meeting"); // 🟢 State untuk alasan

  const handleSubmit = () => {
    alert("Permohonan peminjaman berhasil dikirim!");
    navigate("/RequestLoanSummary");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      {/* Progress Bar */}
      <div className="w-[874px] mb-7">
        <ProgressRequest step={3} />
      </div>

      {/* Form Card */}
      <div className="bg-white shadow-lg rounded-lg p-8 w-[874px]">
        {/* Grid Layout: Info Barang (Kiri) & Info Peminjam (Kanan) */}
        <div className="grid grid-cols-2 gap-6">
          {/* Informasi Barang */}
          <div>
            <h3 className="font-bold text-lg mb-3">Informasi Barang</h3>
            <div className="space-y-4">
              {[{ label: "Nama Barang", value: "Laptop Hp" },
                { label: "ID Barang", value: "ITEM-A01" },
                { label: "Tanggal Mulai", value: "12 Februari 2025" },
                { label: "Tanggal Selesai", value: "15 Februari 2025" },
                { label: "Kondisi", value: "Baik" },
              ].map((item, index) => (
                <div key={index}>
                  <label className="block font-medium mb-1">{item.label}</label>
                  <input
                    type="text"
                    value={item.value}
                    className="w-full border-2 border-purple-500 rounded-md p-3 bg-purple-200 text-gray-800"
                    readOnly
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Informasi Peminjam */}
          <div>
            <h3 className="font-bold text-lg mb-3">Informasi Peminjam</h3>
            <div className="space-y-4">
              {[{ label: "Nama", value: "Herlina Putri" },
                { label: "ID Karyawan", value: "2215061028" },
                { label: "Email", value: "linaptr123@gmail.com" },
                { label: "No Telepon", value: "08123456789" },
              ].map((item, index) => (
                <div key={index}>
                  <label className="block font-medium mb-1">{item.label}</label>
                  <input
                    type="text"
                    value={item.value}
                    className="w-full border-2 border-purple-500 rounded-md p-3 bg-purple-200 text-gray-800"
                    readOnly
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Catatan */}
        <div className="mt-4">
          <label className="block text-gray-600 text-sm">Alasan Peminjaman</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border-2 border-purple-500 rounded-md p-2 h-28"
            placeholder="Keperluan meeting"
          />
        </div>
      </div>

      {/* Tombol Navigasi */}
      <div className="w-[874px] flex justify-end space-x-3 mt-6">
        <button
          onClick={() => navigate("/employee/RequestLoanStep2")}
          className="bg-gray-400 text-white px-5 py-2 rounded-md text-lg"
        >
          Kembali
        </button>
        <button
          onClick={() => navigate("/employee/Sending")}
          className="bg-purple-600 text-white px-5 py-2 rounded-md text-lg"
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default RequestLoanStep3;
