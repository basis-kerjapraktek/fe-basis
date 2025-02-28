import React from "react";

const PopupDetail = ({ notif, onClose }) => {
  if (!notif) return null;

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[450px] relative transform transition-all scale-100 animate-fadeIn">
        {/* Tombol Close */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ❌
        </button>

        {/* Icon & Judul */}
        <div className="flex flex-col items-start text-left">
          <span className="text-4xl mb-2">{notif.icon}</span>
          <h2 className="text-lg font-bold">{notif.type}</h2>

          {/* Kotak Informasi */}
          <div className="bg-gray-100 w-full p-3 mt-3 rounded-md text-sm text-gray-700 font-medium">
            <p>{notif.message}</p>
          </div>

          {/* Detail Barang (3 item) */}
          <div className="mt-4 w-full">
            <h3 className="font-semibold text-gray-700 mb-2">Detail Barang</h3>
            <div className="space-y-2">
              {notif.items.map((item, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-md text-sm">
                  <p><strong>Nama:</strong> {item.name}</p>
                  <p><strong>Kategori:</strong> {item.category}</p>
                  <p><strong>Kondisi:</strong> {item.condition}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tanggal & Waktu */}
          <p className="text-xs text-gray-500 mt-3">Diterima pada {notif.time}</p>

          {/* Tombol Aksi */}
          <a
            href={notif.link}
            className="block w-full mt-4 px-4 py-2 text-sm font-semibold bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition text-center"
          >
            Lihat Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default PopupDetail;
