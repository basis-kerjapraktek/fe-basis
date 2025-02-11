import React from "react";
import { useNavigate } from "react-router-dom";
import ProgressRequest from "../../components/employee/ProgressRequest";

const RequestLoanStep1 = () => {
  const navigate = useNavigate();
  const step = 1; // Step saat ini

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 h-screen justify-start">
      {/* Progress Bar - Naikin lebih dekat ke header */}
      <div className="w-[890px] mt-[7px] mb-7">
        <ProgressRequest step={step} />
      </div>

      {/* Kolom Ungu - Naikin lebih dekat ke progress bar */}
      <div className="w-[890px] bg-purple-500 h-12 rounded-t-md mt-[-5px]"></div>

      {/* Container Utama - Dipadatkan */}
      <div className="bg-white shadow-lg w-[890px] rounded-b-md p-8 flex gap-12">
        {/* Foto Barang */}
        <div className="w-[200px] h-[180px] flex items-center justify-center border-2 border-purple-500 rounded-md">
          <img
            src="/gambar/LaptopHp.jpg"
            alt="Barang"
            className="rounded-md w-full h-full object-cover"
          />
        </div>

        {/* Detail Barang - Jadi satu kolom (vertikal) */}
        <div className="w-full flex flex-col gap-4">
          <div>
            <p className="font-semibold text-black text-sm">Nama Barang</p>
            <p className="bg-purple-500 text-white px-3 py-2 rounded-md text-sm">
              Laptop Hp
            </p>
          </div>
          <div>
            <p className="font-semibold text-black text-sm">ID Barang</p>
            <p className="bg-purple-500 text-white px-3 py-2 rounded-md text-sm">
              ITEM-A01
            </p>
          </div>
          <div>
            <p className="font-semibold text-black text-sm">Kondisi Barang</p>
            <p className="bg-purple-500 text-white px-3 py-2 rounded-md text-sm">
              Baik
            </p>
          </div>
          <div>
            <p className="font-semibold text-black text-sm">Status Barang</p>
            <p className="bg-purple-500 text-white px-3 py-2 rounded-md text-sm">
              Tersedia
            </p>
          </div>
        </div>
      </div>

      {/* Tombol Navigasi */}
      <div className="w-[890px] flex justify-end space-x-4 mt-4">
        <button
          onClick={() => navigate("/employee/LoanHistory")}
          className="bg-gray-400 text-white px-4 py-2 rounded-md"
        >
          Kembali
        </button>
        <button
          onClick={() => navigate("/employee/RequestLoanStep2")}
          className="bg-purple-600 text-white px-4 py-2 rounded-md"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
};

export default RequestLoanStep1;
