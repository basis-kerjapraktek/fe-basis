import React, { useState } from "react";

const notifications = [
  {
    id: 3,
    type: "Pengembalian Barang",
    message: "Permohonan pengembalian Monitor Dell telah diajukan. Silakan tunggu respon dari admin.",
    time: "09:20",
    date: "12 Feb 2025",
    color: "bg-purple-500",
    icon: "📦",
    link: "/employee/LoanHistory",
  },
  {
    id: 2,
    type: "Perpanjangan Waktu",
    message: "Permohonan perpanjangan waktu untuk Laptop Hp telah diajukan. Silakan tunggu respon dari admin.",
    time: "09:15",
    date: "12 Feb 2025",
    color: "bg-green-500",
    icon: "⏳",
    link: "/employee/Detail",
  },
  {
    id: 1,
    type: "Permintaan Disetujui",
    message: "Permintaan peminjaman Laptop Hp telah disetujui. Silakan ambil barang di lokasi penyimpanan.",
    time: "09:05",
    date: "12 Feb 2025",
    color: "bg-blue-500",
    icon: "✅",
    link: "/employee/LoanHistory",
  },
  {
    id: 4,
    type: "Barang Terlambat Dikembalikan",
    message: "Mouse Roboto telah melewati batas peminjaman. Segera ajukan pengembalian.",
    time: "13:20",
    date: "21 Des 2024",
    color: "bg-purple-500",
    icon: "⚠️",
    link: "/employee/LoanHistory",
  },
];

const Notification = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("latest");

  const sortedNotifications = [...notifications].sort((a, b) =>
    sortOrder === "latest" ? b.id - a.id : a.id - b.id
  );

  return (
    <div className="p-6 flex flex-col items-center">
      {/* Header (Filter) dengan lebar sama */}
      <div className="h-16 bg-white shadow flex items-center justify-end px-6 mb-4 w-[980px]">
        {/* Filter dipindahkan ke kiri */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 text-purple-600 font-semibold"
            onClick={() => setFilterOpen(!filterOpen)}
          >
            <span>🔍</span>
            <span>Filter</span>
          </button>
          {filterOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  setSortOrder("latest");
                  setFilterOpen(false);
                }}
              >
                Urutkan berdasarkan terlama
              </button>
              <button
                className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                onClick={() => {
                  setSortOrder("oldest");
                  setFilterOpen(false);
                }}
              >
                Urutkan berdasarkan terbaru
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Notifications */}
      <div className="space-y-4 w-[980px]">
        {sortedNotifications.map((notif) => (
          <div key={notif.id} className="flex items-center bg-white border rounded-lg shadow-sm">
            <div className={`w-2 ${notif.color} rounded-l-lg`}></div>
            <div className="p-4 flex items-center w-full">
              <span className="text-2xl mr-4">{notif.icon}</span>
              <div className="flex-1">
                <p className="font-semibold">{notif.type}</p>
                <p className="text-sm text-gray-600">{notif.message}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-xs text-gray-500">{notif.date}</p> {/* Tanggal di kiri bawah */}
                  <p className="text-xs text-gray-500">{notif.time}</p> {/* Jam di kanan bawah */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Notification;
