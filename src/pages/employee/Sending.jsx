import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react"; // Import ikon dari Lucide

const Sending = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/employee/LoanHistory");
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white relative">
      {/* Wrapper biar bisa dinaikkan */}
      <div className="flex flex-col items-center gap-2 -mt-24">
        {/* Ikon CheckCircle */}
        <CheckCircle className="w-24 h-24 text-purple-500" />

        {/* Teks utama */}
        <h1 className="text-black text-xl font-semibold">
          Permohonan berhasil dikirim
        </h1>

        {/* Teks tambahan */}
        <p className="text-gray-600 text-sm">
          Tunggu ya! Admin akan segera memproses permohonanmu
        </p>
      </div>
    </div>
  );
};

export default Sending;
