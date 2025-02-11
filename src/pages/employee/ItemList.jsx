import { useState, useEffect } from "react";
import Item from "../../components/employee/Item";
import Page from "../../components/employee/Page";
import DummyItems from "../../components/employee/DummyItems"; // Import dummy data

const ItemList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  // Filter berdasarkan pencarian
  const filteredItems = DummyItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Reset halaman jika totalPages berubah
  useEffect(() => {
    if (currentPage > Math.ceil(filteredItems.length / itemsPerPage)) {
      setCurrentPage(1);
    }
  }, [filteredItems.length, currentPage]);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const displayedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-4">
      {/* Search Bar & Pagination */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Pencarian..."
          className="border border-purple-500 px-3 py-1 rounded-md w-60 text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {totalPages > 1 && (
          <Page currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        )}
      </div>

      {/* Product Grid */}
      {displayedItems.length > 0 ? (
        <div className="grid grid-cols-3 gap-4">
          {displayedItems.map((item) => (
            <Item key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 mt-4">Tidak ada barang yang ditemukan.</p>
      )}
    </div>
  );
};

export default ItemList;
