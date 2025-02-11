import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaSearch, FaPlus, FaEye } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const KelolaBarang = () => {
  const [barang, setBarang] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    fetch("http://localhost:3000/barang")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setBarang(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Gagal mengambil data barang:", error);
        setLoading(false);
      });
  }, []);

  const filteredBarang = barang.filter((item) =>
    item.nama_barang.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBarang.slice(indexOfFirstItem, indexOfLastItem);

  const handleDelete = (id) => {
    if (window.confirm("Apakah yakin ingin menghapus barang ini?")) {
      fetch(`http://localhost:3000/barang/${id}`, { method: "DELETE" })
        .then((response) => response.json())
        .then(() => {
          setBarang(barang.filter((item) => item.id !== id));
        })
        .catch((error) => console.error("Gagal menghapus barang:", error));
    }
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg">
      <div className="flex items-center space-x-2 mb-4">
        <div className="relative flex-1">
          <input
            type="text"
            className="w-full px-4 py-2 border rounded-lg pl-10 focus:ring-2 focus:ring-blue-400"
            placeholder="Cari barang..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>

        <Link to="tambah-barang">
          <button className="bg-purple-500 text-white px-4 py-2 rounded-lg flex items-center">
            <FaPlus className="mr-2" /> Tambah Barang
          </button>
        </Link>
      </div>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">Nama Barang</th>
              <th className="px-4 py-2">ID Barang</th>
              <th className="px-4 py-2">Kondisi</th>
              <th className="px-4 py-2">Jumlah</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" className="text-center p-4">Memuat data...</td>
              </tr>
            ) : currentItems.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">Belum ada data barang</td>
              </tr>
            ) : (
              currentItems.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="px-4 py-2 flex items-center">
                    <img src={item.gambar || "/laptop.png"} alt="barang" className="w-8 h-8 mr-2" />
                    {item.nama_barang}
                  </td>
                  <td className="px-4 py-2">{item.id_barang}</td>
                  <td className="px-4 py-2">{item.kondisi}</td>
                  <td className="px-4 py-2">{item.jumlah}</td>
                  <td className="px-4 py-2">{item.status}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <Link to={`/barang/${item.id}`}>
                      <button className="bg-blue-500 text-white px-3 py-1 rounded">
                        <FaEye />
                      </button>
                    </Link>
                    <Link to={`/edit-barang/${item.id}`}>
                      <button className="bg-purple-500 text-white px-3 py-1 rounded">
                        <FaEdit />
                      </button>
                    </Link>
                    <button
                      className="bg-gray-300 px-3 py-1 rounded"
                      onClick={() => handleDelete(item.id)}
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between mt-4">
        <button
          className="bg-gray-300 px-3 py-1 rounded"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Kembali
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: Math.ceil(filteredBarang.length / itemsPerPage) }, (_, index) => (
            <button
              key={index + 1}
              className={`px-3 py-1 rounded ${
                currentPage === index + 1 ? "bg-purple-500 text-white" : "bg-gray-300"
              }`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className="bg-gray-300 px-3 py-1 rounded"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === Math.ceil(filteredBarang.length / itemsPerPage)}
        >
          Lanjut
        </button>
      </div>

      <Outlet />
    </div>
  );
};

export default KelolaBarang;