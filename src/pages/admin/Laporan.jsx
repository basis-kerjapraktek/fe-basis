import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch, FaHistory, FaPrint } from "react-icons/fa";

const Laporan = () => {
  const [laporan, setLaporan] = useState([]);
  const [bulan, setBulan] = useState(new Date());

  useEffect(() => {
    fetchLaporan();
  }, [bulan]);

  const fetchLaporan = async () => {
    const month = bulan.getMonth() + 1;
    try {
      const response = await axios.get(`http://localhost:3000/laporan?bulan=${month}`);
      setLaporan(response.data);
    } catch (error) {
      console.error("Error fetching laporan", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      {/* Kotak Informasi */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-[#5D50BC] p-4 rounded-lg text-center shadow-md text-white">
          <h3 className="text-lg font-bold">0</h3>
          <p>Total Peminjaman</p>
        </div>
        <div className="bg-[#5D50BC] p-4 rounded-lg text-center shadow-md text-white">
          <h3 className="text-lg font-bold">0</h3>
          <p>Pengembalian Terdekat</p>
        </div>
        <div className="bg-[#5D50BC] p-4 rounded-lg text-center shadow-md text-white">
          <h3 className="text-lg font-bold">0</h3>
          <p>Pelanggaran Terbaru</p>
        </div>
      </div>
      
      {/* Filter dan Pencarian */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-4">

          <label className="font-medium">Periode:</label>
          <DatePicker
            selected={bulan}
            onChange={(date) => setBulan(date)}
            dateFormat="MM/yyyy"
            showMonthYearPicker
            className="border p-2 rounded bg-purple-100 text-purple-700 focus:ring-2 focus:ring-purple-400"
          />
        </div>
        <div className="relative">
          <input type="text" placeholder="Pencarian" className="border px-4 py-2 rounded-lg" />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>
      </div>
      
      {/* Tabel */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">ID Peminjaman</th>
              <th className="px-4 py-2">Nama</th>
              <th className="px-4 py-2">Barang</th>
              <th className="px-4 py-2">Tgl Pinjam</th>
              <th className="px-4 py-2">Tgl Kembali</th>
              <th className="px-4 py-2">Kondisi</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {laporan.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center p-4 text-gray-500">Belum ada data peminjaman</td>
              </tr>
            ) : (
              laporan.map((item) => (
                <tr key={item.id} className="border-t text-center">
                  <td className="px-4 py-2">{item.id_peminjaman}</td>
                  <td className="px-4 py-2">{item.nama}</td>
                  <td className="px-4 py-2">{item.barang}</td>
                  <td className="px-4 py-2">{item.tgl_pinjam}</td>
                  <td className="px-4 py-2">{item.tgl_kembali}</td>
                  <td className="px-4 py-2">{item.kondisi}</td>
                  <td className="px-4 py-2">{item.status}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {/* Tombol Bawah */}
      <div className="flex justify-center gap-4 mt-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg shadow-md">
          <FaHistory /> Histori Laporan
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#5D50BC] text-white rounded-lg shadow-md">
          <FaPrint /> Cetak Laporan
        </button>
      </div>
    </div>
  );
};

export default Laporan;