import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch, FaPrint } from "react-icons/fa";
import { useReactToPrint } from "react-to-print";

const Laporan = () => {
  const [laporan, setLaporan] = useState([]);
  const [bulan, setBulan] = useState(new Date());
  const laporanRef = useRef();

  useEffect(() => {
    fetchLaporan();
  }, [bulan]);

  const fetchLaporan = async () => {
    const month = bulan.getMonth() + 1; // Ambil bulan dalam format numerik
    try {
      const response = await axios.get(`http://localhost:3000/laporan?bulan=${month}`);
      setLaporan(response.data);
    } catch (error) {
      console.error("Error fetching laporan", error);
    }
  };

  const handlePrint = useReactToPrint({
    content: () => laporanRef.current,
    documentTitle: "Laporan Bulanan",
  });

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      {/* Header & Filter */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
        </div>
      </div>

      {/* Tombol Cetak */}
      <div className="flex justify-end mb-4">
        <button onClick={handlePrint} className="flex items-center gap-2 px-4 py-2 bg-[#5D50BC] text-white rounded-lg shadow-md">
          <FaPrint /> Cetak
        </button>
      </div>

      <div ref={laporanRef} className="bg-white p-6 rounded-lg shadow-lg">
  <h2 className="text-center text-2xl font-bold mb-4">Laporan Bulanan Basis</h2>

  {/* Informasi Laporan dalam 2 Kolom (Kolom Rata Tengah, Teks Rata Kiri) */}
  <div className="grid grid-cols-2 gap-6 justify-center items-center">
    <div className="text-left">
      <p><strong>Nama Admin:</strong> Refiani Julianti</p>
      <p><strong>ID Admin:</strong> USR-001</p>
      <p><strong>Periode:</strong> Februari 2025</p>
    </div>
    <div className="text-left">
      <p><strong>Total Barang Dipinjam:</strong> 25 Barang</p>
      <p><strong>Total Barang Dikembalikan:</strong> 20 Barang</p>
      <p><strong>Total Pelanggaran:</strong> 5 Pelanggaran</p>
    </div>
  </div>

  {/* Tabel Laporan */}
  <table className="w-full text-left border-collapse mt-6">
    <thead>
      <tr className="bg-gray-200 text-gray-700">
        {["ID Peminjaman", "Tgl Pinjam", "Tgl Kembali", "Kondisi", "Status"].map((header, index) => (
          <th key={index} className="px-4 py-2 text-center border">{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {laporan.length === 0 ? (
        <tr>
          <td colSpan="5" className="text-center p-4 text-gray-500">Belum ada data peminjaman</td>
        </tr>
      ) : (
        laporan.map((item, index) => (
          <tr key={item.id} className="border-t hover:bg-gray-100 text-center">
            <td className="px-4 py-2 border">{item.id_peminjaman}</td>
            <td className="px-4 py-2 border">{item.tgl_pinjam}</td>
            <td className="px-4 py-2 border">{item.tgl_kembali}</td>
            <td className="px-4 py-2 border">{item.kondisi}</td>
            <td className="px-4 py-2 border">{item.status}</td>
          </tr>
        ))
      )}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default Laporan;