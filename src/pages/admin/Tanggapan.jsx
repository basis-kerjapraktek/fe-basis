import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Tanggapan = () => {
  const [tanggapan, setTanggapan] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTanggapan, setSelectedTanggapan] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetchTanggapan();
  }, [statusFilter, searchTerm]);

  const fetchTanggapan = async () => {
    try {
      const response = await axios.get("http://localhost:3000/tanggapan");
      let data = response.data;
      if (statusFilter) {
        data = data.filter((item) => item.status === statusFilter);
      }
      if (searchTerm) {
        data = data.filter(
          (item) =>
            item.user_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.kategori.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
      setTanggapan(data);
    } catch (error) {
      console.error("Error fetching tanggapan", error);
    }
  };

  const totalPages = Math.ceil(tanggapan.length / itemsPerPage);
  const paginatedTanggapan = tanggapan.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const generatePagination = () => {
    const pages = [];
    const maxVisiblePages = 3;

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);
      if (currentPage > maxVisiblePages + 1) pages.push("...");

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (currentPage < totalPages - maxVisiblePages) pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-wrap items-center gap-4 mb-4">
        <div className="relative flex items-center bg-gray-100 shadow-sm rounded-lg px-4 py-2 w-64">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Cari User ID / Kategori..."
            className="outline-none bg-transparent w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 rounded-lg bg-purple-500 text-white focus:ring-2 focus:ring-purple-400"
          onChange={(e) => setStatusFilter(e.target.value)}
          value={statusFilter}
        >
          <option value="">Semua Status</option>
          <option value="Belum dibaca">Belum dibaca</option>
          <option value="Diproses">Diproses</option>
          <option value="Selesai">Selesai</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-200 text-gray-700 uppercase text-sm">
              <th className="px-6 py-3 text-center">User ID</th>
              <th className="px-6 py-3 text-center">Kategori</th>
              <th className="px-6 py-3 text-center">Status</th>
              <th className="px-6 py-3 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {paginatedTanggapan.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center p-6 text-gray-500">
                  Belum ada tanggapan
                </td>
              </tr>
            ) : (
              paginatedTanggapan.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-gray-300 text-center hover:bg-gray-100"
                >
                  <td className="px-6 py-4">{item.user_id}</td>
                  <td className="px-6 py-4">{item.kategori}</td>
                  <td className="px-6 py-4">{item.status}</td>
                  <td
                    className="px-6 py-4 text-purple-600 font-semibold cursor-pointer hover:underline"
                    onClick={() => setSelectedTanggapan(item)}
                  >
                    Lihat tanggapan
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-center items-center mt-6 gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg bg-white text-purple-700 disabled:opacity-50"
        >
          Kembali
        </button>

        {generatePagination().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === "number" && goToPage(page)}
            className={`px-4 py-2 border rounded-lg ${
              currentPage === page ? "bg-[#5D50BC] text-white" : "bg-white text-purple-700"
            } ${page === "..." ? "cursor-default" : ""}`}
            disabled={page === "..."}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-lg bg-white text-purple-700 disabled:opacity-50"
        >
          Lanjut
        </button>
      </div>

      {selectedTanggapan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px] relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={() => setSelectedTanggapan(null)}
            >
              <IoClose size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">Detail Tanggapan</h2>
            <div className="space-y-2 text-sm text-gray-700">
              <p><strong>Nama Pengirim:</strong> {selectedTanggapan.user_id}</p>
              <p><strong>Kategori:</strong> {selectedTanggapan.kategori}</p>
              <p><strong>Tanggal:</strong> {selectedTanggapan.tanggal}</p>
              <p><strong>Isi Tanggapan:</strong> {selectedTanggapan.isi}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tanggapan;