import React, { useState } from "react";
import Page from "../../components/employee/Page";

const LoanHistory = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Set jumlah item per halaman

  const loans = [
    { id: "ITEM-A01", item: "Laptop Hp", borrowDate: "12/02/2025", returnDate: "15/02/2025", status: "Disetujui" },
    { id: "ITEM-D01", item: "Monitor Dell", borrowDate: "07/02/2025", returnDate: "12/02/2025", status: "Disetujui" },
    { id: "ITEM-R02", item: "Keyboard Rexus", borrowDate: "09/01/2025", returnDate: "20/01/2025", status: "Ditolak" },
    { id: "ITEM-M04", item: "Mouse Roboto", borrowDate: "15/12/2024", returnDate: "20/12/2024", status: "Disetujui" },
    { id: "ITEM-T03", item: "Monitor Tuf", borrowDate: "09/12/2024", returnDate: "13/12/2024", status: "Disetujui" },
  ];

  // Filter data berdasarkan search query
  const filteredLoans = loans.filter((loan) =>
    loan.item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Hitung total halaman berdasarkan hasil filter
  const totalPages = Math.ceil(filteredLoans.length / itemsPerPage);

  // Ambil data sesuai halaman saat ini
  const displayedLoans = filteredLoans.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md relative">
      {/* Search Bar & Pagination */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Pencarian..."
          className="border border-purple-500 px-3 py-1 rounded-md w-40 text-sm"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset ke halaman pertama saat mencari
          }}
        />
        {totalPages > 1 && (
          <Page currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
        )}
      </div>

      {/* Table Data */}
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 p-2">Barang</th>
            <th className="border border-gray-200 p-2">ID Barang</th>
            <th className="border border-gray-200 p-2">Tgl Pinjam</th>
            <th className="border border-gray-200 p-2">Tgl Kembali</th>
            <th className="border border-gray-200 p-2">Status</th>
            <th className="border border-gray-200 p-2">Aksi</th>
            <th className="border border-gray-200 p-2">Riwayat</th>
          </tr>
        </thead>
        <tbody>
          {displayedLoans.map((loan) => (
            <tr key={loan.id} className="text-center border border-gray-200">
              <td className="border border-gray-200 p-2">{loan.item}</td>
              <td className="border border-gray-200 p-2">{loan.id}</td>
              <td className="border border-gray-200 p-2">{loan.borrowDate}</td>
              <td className="border border-gray-200 p-2">{loan.returnDate}</td>
              <td className="border border-gray-200 p-2">{loan.status}</td>
              <td className="border border-gray-200 p-2 text-blue-500 hover:underline cursor-pointer">
                <a href={`/employee/Detail`}>Lihat detail</a>
              </td>
              <td
                className="border border-gray-200 p-2 text-blue-500 hover:underline cursor-pointer"
                onClick={() => setSelectedLoan(loan)}
              >
                Lihat riwayat
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pop-up Modal */}
      {selectedLoan && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white border-2 border-purple-500 rounded-lg shadow-lg w-[500px] p-6">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Riwayat Perpanjangan</h2>
              <button onClick={() => setSelectedLoan(null)} className="text-2xl font-bold text-gray-600">
                ✕
              </button>
            </div>

            {/* Isi Data */}
            <div className="mt-4 space-y-3 text-gray-800">
              {[{ label: "Nama Barang", value: selectedLoan.item },
                { label: "ID Barang", value: selectedLoan.id },
                { label: "Tanggal Pengajuan", value: selectedLoan.borrowDate },
                { label: "Tanggal Kembali Baru", value: selectedLoan.returnDate },
                { label: "Status", value: selectedLoan.status },
              ].map((item, index) => (
                <div key={index}>
                  <span className="font-semibold">{item.label} :</span> {item.value || "-"}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoanHistory;
