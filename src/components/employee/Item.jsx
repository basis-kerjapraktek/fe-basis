import React from "react";

const Item = ({ item }) => {
  return (
    <div className="border border-purple-500 p-4 rounded-lg text-center">
      <img src={item.image} alt={item.name} className="w-32 h-32 mx-auto" />
      <h3 className="font-bold mt-2">{item.name}</h3>
      <p className="text-sm">Kondisi: {item.condition}</p>
      <p className={item.status === "Kosong" ? "text-red-500" : "text-green-500"}>{item.status}</p>
      <div className="flex justify-center items-center mt-2">
        <label className="mr-2 text-sm">Jumlah:</label>
        <input type="number" min="1" max={item.stock} disabled={item.status === "Kosong"} className="border w-12 text-center" />
      </div>
      <button
        className={`mt-2 px-4 py-2 rounded-md w-full ${
          item.status === "Kosong" ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-purple-500 text-white"
        }`}
        disabled={item.status === "Kosong"}
        onClick={() => {
          if (item.status === "Tersedia") {
            window.location.href = "/request-loan";
          }
        }}
      >
        Pinjam
      </button>
    </div>
  );
};

export default Item;
