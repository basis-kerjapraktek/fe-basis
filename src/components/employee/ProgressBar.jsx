import React from "react";

const ProgressBar = ({ step }) => {
  const steps = [
    { number: 1, label: "Detail Barang" },
    { number: 2, label: "Unggah Foto" },
    { number: 3, label: "Konfirmasi Pengembalian" },
  ];

  return (
    <div className="bg-white shadow-md rounded-md p-6 w-[890px] mx-auto">
      <div className="flex justify-between items-center w-full relative">
        {steps.map((item, index) => (
          <div key={index} className="flex flex-col items-center w-1/3 relative">
            
            {/* Angka & Nama Step sejajar */}
            <div className="absolute top-[-15px] flex items-center">
              <span className="text-sm font-semibold text-purple-600">
                {item.number}
              </span>
              <span
                className={`text-sm font-medium ml-2 ${
                  index + 1 <= step ? "text-purple-700" : "text-gray-500"
                }`}
              >
                {item.label}
              </span>
            </div>

            {/* Bulatan progress */}
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full border-2 text-white text-xs font-bold mt-2 ${
                index + 1 <= step
                  ? "bg-purple-500 border-purple-500"
                  : "border-purple-500 bg-white text-purple-500"
              }`}
            >
              {index + 1 <= step ? "✔" : ""}
            </div>

            {/* Garis penghubung tetap seperti kode awal */}
            {index < steps.length - 1 && (
              <div
                className={`absolute top-[53%] left-[54%] w-full h-[6px] ${
                  index + 1 < step ? "bg-purple-500" : "bg-gray-300"
                }`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
