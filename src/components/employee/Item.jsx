import React from "react";

const Item = ({ item }) => {
  return (
    <div className="border border-purple-500 p-4 rounded-lg flex flex-col justify-between">
      <div>
        <img src={item.image} alt={item.name} className="w-32 h-32 mx-auto mb-4" />

        <h3 className="font-bold text-left">{item.name}</h3>
        <p className="text-sm text-left whitespace-pre-line">- Deskripsi: {item.description}</p>
        <p className="text-sm text-left">- Kondisi: {item.condition}</p>
      </div>

      <button
        className={`mt-3 px-4 py-2 rounded-md w-full h-[40px] ${
          item.status === "Kosong" ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-purple-500 text-white"
        }`}
        disabled={item.status === "Kosong"}
        onClick={() => {
          if (item.status === "Tersedia") {
            window.location.href = "RequestLoanStep1";
          }
        }}
      >
        Pinjam
      </button>
    </div>
  );
};

export default Item;
