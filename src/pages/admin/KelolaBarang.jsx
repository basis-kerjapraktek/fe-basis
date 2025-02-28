import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaEdit, FaTrash, FaSearch, FaPlus } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const KelolaBarang = () => {
  const location = useLocation();
  const [barang, setBarang] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchBarang = async () => {
      try {
        const response = await fetch("http://localhost:3000/barang");
        if (!response.ok) throw new Error("Gagal mengambil data barang");

        const data = await response.json();
        setBarang(
          data.map((item) => ({
            id: item.id,
            kode: item.code,
            nama: item.name,
            jumlah: item.stock_quantity,
            kondisi: item.item_condition,
            status: item.status,
            gambar: item.picture.startsWith("http")
              ? item.picture
              : `http://localhost:3000/uploads/${item.picture}`,
          }))
        );
      } catch (error) {
        console.error("Gagal mengambil data barang:", error);
        setBarang([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBarang();
    setCurrentPage(1);
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Apakah yakin ingin menghapus barang ini?")) {
      try {
        const response = await fetch(`http://localhost:3000/barang/${id}`, {
          method: "DELETE",
        });

        if (!response.ok) throw new Error("Gagal menghapus barang");

        alert("Barang berhasil dihapus");
        setBarang((prevBarang) => prevBarang.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Gagal menghapus barang:", error);
        alert("Gagal menghapus barang");
      }
    }
  };

  const filteredBarang = barang.filter((item) =>
    item.nama?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBarang.length / itemsPerPage);
  const currentItems = filteredBarang.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
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
              {["Nama Barang", "ID Barang", "Kondisi", "Jumlah", "Status", "Aksi"].map((header) => (
                <th key={header} className="px-4 py-2">{header}</th>
              ))}
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
                    <img src={item.gambar} alt="barang" className="w-8 h-8 mr-2" />
                    {item.nama}
                  </td>
                  <td className="px-4 py-2">{item.kode}</td>
                  <td className="px-4 py-2">{item.kondisi}</td>
                  <td className="px-4 py-2">{item.jumlah}</td>
                  <td className="px-4 py-2">{item.status}</td>
                  <td className="px-4 py-2 flex space-x-2">
                    <Link to={`/admin/kelola-barang/editbarang/${item.id}`}>
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

      {/* Pagination */}
      <div className="flex justify-center items-center mt-6 gap-2">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg bg-white text-purple-700 disabled:opacity-50"
        >
          Kembali
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`px-4 py-2 border rounded-lg ${currentPage === index + 1 ? 'bg-[#5D50BC] text-white' : 'bg-white text-purple-700'}`}
          >
            {index + 1}
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
      <Outlet />
    </div>
  );
};

export default KelolaBarang;