import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaFilter } from "react-icons/fa";

const Tanggapan = () => {
  const [tanggapan, setTanggapan] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    fetchTanggapan();
  }, [statusFilter]);

  const fetchTanggapan = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tanggapan");
      let data = response.data;
      if (statusFilter) {
        data = data.filter((item) => item.status === statusFilter);
      }
      setTanggapan(data);
    } catch (error) {
      console.error("Error fetching tanggapan", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      
      {/* Filter dan Pencarian */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative flex items-center bg-white shadow-md rounded-lg px-4 py-2">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Cari..."
            className="outline-none"
          />
        </div>
        <select
          className="border px-4 py-2 rounded-lg bg-purple-200 text-purple-700"
          onChange={(e) => setStatusFilter(e.target.value)}
          value={statusFilter}
        >
          <option value="">Semua Status</option>
          <option value="Belum dibaca">Belum dibaca</option>
          <option value="Diproses">Diproses</option>
          <option value="Selesai">Selesai</option>
        </select>
      </div>
      
      {/* Tabel */}
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Tanggal</th>
              <th className="px-4 py-2">Nama Pengirim</th>
              <th className="px-4 py-2">Kategori</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {tanggapan.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  Belum ada tanggapan
                </td>
              </tr>
            ) : (
              tanggapan.map((item) => (
                <tr key={item.id} className="border-t text-center">
                  <td className="px-4 py-2">{item.tanggal}</td>
                  <td className="px-4 py-2">{item.nama_pengirim}</td>
                  <td className="px-4 py-2">{item.kategori}</td>
                  <td className="px-4 py-2">{item.status}</td>
                  <td className="px-4 py-2 text-purple-600 cursor-pointer">
                    Lihat tanggapan
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tanggapan;