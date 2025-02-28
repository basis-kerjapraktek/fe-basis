import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaSearch, FaHistory, FaPrint } from "react-icons/fa";

const Laporan = () => {
  const [laporan, setLaporan] = useState([]);
  const [bulan, setBulan] = useState(new Date());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const navigate = useNavigate();

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

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = laporan.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(laporan.length / itemsPerPage);
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {["Total Peminjaman", "Pengembalian Terdekat", "Pelanggaran Terbaru"].map((title, index) => (
          <div key={index} className="bg-[#5D50BC] p-4 rounded-lg text-center shadow-md text-white">
            <h3 className="text-lg font-bold">35</h3>
            <p>{title}</p>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
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
        <div className="relative w-full md:w-auto">
          <input 
            type="text" 
            placeholder="Pencarian" 
            className="w-full border px-4 py-2 rounded-lg pl-10 focus:ring-2 focus:ring-purple-400"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
      </div>
      
      <div className="bg-white shadow-md rounded-lg overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              {["ID Peminjaman", "Tgl Pinjam", "Tgl Kembali", "Kondisi", "Status"].map((header, index) => (
                <th key={index} className="px-4 py-2 text-center">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentItems.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">Belum ada data peminjaman</td>
              </tr>
            ) : (
              currentItems.map((item, index) => (
                <tr key={item.id} className="border-t hover:bg-gray-100 text-center">
                  <td className="px-4 py-2">{item.id_peminjaman}</td>
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

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 gap-2">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-lg bg-white text-purple-700 disabled:opacity-50"
          >
            Kembali
          </button>

          {totalPages > 5 ? (
            <>
              {currentPage > 2 && <span>...</span>}
              {[...Array(totalPages)].slice(
                Math.max(0, currentPage - 2),
                Math.min(totalPages, currentPage + 1)
              ).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index + 1)}
                  className={`px-4 py-2 border rounded-lg ${currentPage === index + 1 ? 'bg-[#5D50BC] text-white' : 'bg-white text-purple-700'}`}
                >
                  {index + 1}
                </button>
              ))}
              {currentPage < totalPages - 1 && <span>...</span>}
            </>
          ) : (
            [...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`px-4 py-2 border rounded-lg ${currentPage === index + 1 ? 'bg-[#5D50BC] text-white' : 'bg-white text-purple-700'}`}
              >
                {index + 1}
              </button>
            ))
          )}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-lg bg-white text-purple-700 disabled:opacity-50"
          >
            Lanjut
          </button>
        </div>
      )}

      <div className="flex justify-center gap-4 mt-6">
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg shadow-md">
          <FaHistory /> Histori Laporan
        </button>
        <button 
          onClick={() => navigate("/admin/laporan/cetaklaporan", { state: { laporan } })} 
          className="flex items-center gap-2 px-4 py-2 bg-[#5D50BC] text-white rounded-lg shadow-md"
        >
          <FaPrint /> Cetak Laporan
        </button>
      </div>
    </div>
  );
};

export default Laporan;