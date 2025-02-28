import React, { useEffect, useState } from "react";
import axios from "axios";

const Beranda = () => {
  const [data, setData] = useState({ totalAset: 0, dipinjam: 0, tersedia: 0 });
  const [notifikasi, setNotifikasi] = useState([]);

  useEffect(() => {
    // Ambil data statistik aset
    axios.get("http://localhost:5000/api/statistik")
      .then(response => setData(response.data))
      .catch(error => console.error("Gagal mengambil data statistik", error));

    // Ambil notifikasi terbaru
    axios.get("http://localhost:3000/notifikasi")
      .then(response => setNotifikasi(response.data))
      .catch(error => console.error("Gagal mengambil notifikasi", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Beranda</h1>
      
      {/* Ringkasan Aset */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-green-200 rounded-lg">
          <h2 className="text-lg font-semibold">Total Aset</h2>
          <p className="text-xl font-bold">{data.totalAset}</p>
        </div>
        <div className="p-4 bg-blue-200 rounded-lg">
          <h2 className="text-lg font-semibold">Sedang Dipinjam</h2>
          <p className="text-xl font-bold">{data.dipinjam}</p>
        </div>
        <div className="p-4 bg-yellow-200 rounded-lg">
          <h2 className="text-lg font-semibold">Tersedia</h2>
          <p className="text-xl font-bold">{data.tersedia}</p>
        </div>
      </div>

      {/* Notifikasi Terbaru */}
      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-2">Notifikasi Terbaru</h2>
        {notifikasi.length > 0 ? (
          <ul>
            {notifikasi.map((notif, index) => (
              <li key={index} className="p-2 border-b">{notif.pesan}</li>
            ))}
          </ul>
        ) : (
          <p>Tidak ada notifikasi terbaru.</p>
        )}
      </div>

      {/* Akses Cepat */}
      <div className="grid grid-cols-3 gap-4">
        <button className="p-4 bg-green-500 text-white rounded-lg">Tambah Barang</button>
        <button className="p-4 bg-blue-500 text-white rounded-lg">Kelola Peminjaman</button>
        <button className="p-4 bg-orange-500 text-white rounded-lg">Laporan Peminjaman</button>
      </div>
    </div>
  );
};

export default Beranda;