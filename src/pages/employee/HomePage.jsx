import React from "react";

const HomePage = () => {
  // Contoh data, bisa diganti dengan data dari backend nanti
  const borrowedItems = [
    { id: 1, name: "Laptop", dueDate: "2025-02-05" },
    { id: 2, name: "Projector", dueDate: "2025-02-10" },
  ];

  const violations = 2; // Bisa diganti dari database nanti
  let violationStatus = "bg-green-500";
  let violationText = "Taat Aturan";

  if (violations > 0 && violations < 3) {
    violationStatus = "bg-yellow-500";
    violationText = "Pelanggaran Ringan";
  } else if (violations >= 3) {
    violationStatus = "bg-red-500";
    violationText = "Pelanggaran Berat";
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Halo, Herlina!</h2>
      <p className="mb-4">Ajukan permohonan barang yang Anda butuhkan sekarang!</p>

      {/* Kartu Informasi */}
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-purple-200 rounded-lg shadow-md">
          <h3 className="font-semibold">Barang Dipinjam</h3>
          <p className="text-xl font-bold">{borrowedItems.length}</p>
        </div>

        <div className="p-4 bg-purple-300 rounded-lg shadow-md">
          <h3 className="font-semibold">Pengembalian Terdekat</h3>
          <p className="text-xl font-bold">{borrowedItems[0]?.dueDate}</p>
        </div>

        <div className={`p-4 rounded-lg shadow-md text-white ${violationStatus}`}>
          <h3 className="font-semibold">Pelanggaran</h3>
          <p className="text-xl font-bold">{violations}</p>
          <p className="text-sm">{violationText}</p>
        </div>
      </div>

      {/* Daftar Barang yang Dipinjam */}
      <h3 className="mt-6 text-lg font-semibold">Daftar Barang yang Dipinjam</h3>
      <ul className="mt-2 border rounded-lg p-4 bg-gray-100">
        {borrowedItems.map((item) => (
          <li key={item.id} className="flex justify-between py-2 border-b last:border-none">
            <span>{item.name}</span>
            <span className="text-gray-600 text-sm">Due: {item.dueDate}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;