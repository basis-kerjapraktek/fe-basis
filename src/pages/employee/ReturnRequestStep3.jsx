import React from "react";
import ProgressBar from "../../components/employee/ProgressBar";
import { useNavigate } from "react-router-dom";

const ReturnRequestStep3 = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 h-screen justify-start">
      {/* Progress Bar dengan gap yang sesuai */}
      <div className="w-[890px] mt-[7px] mb-7">
        <ProgressBar step={3} /> {/* Semua buletan diceklis */}
      </div>

      {/* Header Ungu */}
      <div className="w-[890px] bg-purple-600 h-12 rounded-t-md"></div>

      {/* Form Container */}
      <div className="bg-white shadow-lg w-[890px] h-[460px] rounded-b-md p-6">
       

        <div className="p-1 flex">
          {/* Left Section - Product Info */}
          <div className="w-1/3 flex flex-col items-center border p-4 rounded-md">
            <div className="border border-purple-500 rounded-md p-2">
            <img
            src="/gambar/LaptopHp.jpg"
            alt="Barang"
            className="rounded-md w-full h-full object-cover"
          />
            </div>
            <p className="mt-3 font-medium text-black">Laptop Hp</p>
            <p className="text-gray-600 text-sm">ID: ITEM-A01</p>
          </div>

          {/* Right Section - Status & Note */}
          <div className="w-2/3 pl-6">
            {/* Status */}
            <div className="mb-6">
              <p className="text-black font-medium">Alasan Peminjaman</p>
              <div className="bg-purple-600 text-white py-3 px-3 rounded-md mt-1 text-sm">
                Keperluan ngoding website
              </div>
            </div>

            {/* Note */}
            <div className="mb-6">
              <p className="text-black font-medium">Kondisi Barang</p>
              <div className="bg-purple-600 text-white py-3 px-3 rounded-md mt-1 text-sm">
                Tidak terdapat kerusakan
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Button Section - Diletakkan di luar form */}
      <div className="w-[890px] flex justify-end mt-6 space-x-4">
        <button
          className="bg-gray-400 text-white px-6 py-2 rounded-md"
          onClick={() => navigate("/employee/ReturnRequestStep2")}
        >
          Kembali
        </button>
        <button
          className="bg-purple-600 text-white px-6 py-2 rounded-md"
          onClick={() => navigate("/employee/Sending")}
        >
          Kirim
        </button>
      </div>
    </div>
  );
};

export default ReturnRequestStep3;
