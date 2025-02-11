import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProgressRequest from "../../components/employee/ProgressRequest";

const RequestLoanStep2 = () => {
  const navigate = useNavigate();

  // State untuk input tanggal & keterangan
  const [loanDate, setLoanDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [description, setDescription] = useState("");

  // Data karyawan (simulasi dari profile)
  const employeeData = {
    name: "Herlina Putri",
    id: "2215061028",
    department: "ICT",
    phone: "0812-3456-7890",
  };

  const handleNext = () => {
    navigate("/RequestLoanStep3");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Progress Bar */}
      <ProgressRequest step={2} />

      {/* Form */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6 w-[890px] h-[435px]">
        {/* Tanggal Peminjaman & Pengembalian */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-600 text-sm">Tanggal Peminjaman</label>
            <input
              type="date"
              value={loanDate}
              onChange={(e) => setLoanDate(e.target.value)}
              className="w-full border-2 border-purple-500 rounded-md p-2 bg-purple-100"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm">Tanggal Pengembalian</label>
            <input
              type="date"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              className="w-full border-2 border-purple-500 rounded-md p-2 bg-purple-100"
            />
          </div>
        </div>

        {/* Keterangan Peminjaman (Outline Ungu) */}
        <div className="mt-4">
          <label className="block text-gray-600 text-sm">Keterangan</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border-2 border-purple-500 rounded-md p-2 h-28"
            placeholder="Masukkan keterangan peminjaman..."
          />
        </div>

        {/* Data Karyawan (Tidak Bisa Diubah) */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-gray-600 text-sm">Nama Karyawan</label>
            <input
              type="text"
              value={employeeData.name}
              disabled
              className="w-full border-2 border-purple-500 bg-purple-100 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm">ID Karyawan</label>
            <input
              type="text"
              value={employeeData.id}
              disabled
              className="w-full border-2 border-purple-500 bg-purple-100 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm">Departemen/Divisi</label>
            <input
              type="text"
              value={employeeData.department}
              disabled
              className="w-full border-2 border-purple-500 bg-purple-100 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm">Nomor Telepon</label>
            <input
              type="text"
              value={employeeData.phone}
              disabled
              className="w-full border-2 border-purple-500 bg-purple-100 rounded-md p-2"
            />
          </div>
        </div>

        {/* Tombol Navigasi */}
        <div className="flex justify-end mt-14 space-x-3">
          <button
            onClick={() => navigate("/employee/RequestLoanStep1")}
            className="bg-gray-400 text-white px-4 py-2 rounded-md"
          >
            Kembali
          </button>
          <button
            onClick={() => navigate("/employee/RequestLoanStep3")}
            className="bg-purple-600 text-white px-4 py-2 rounded-md"
          >
            Lanjut
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestLoanStep2;
