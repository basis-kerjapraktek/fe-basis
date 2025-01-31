import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Beranda from "./pages/Beranda";
import KelolaBarang from "./pages/KelolaBarang";
import PeminjamanBarang from "./pages/PeminjamanBarang";
import PengembalianBarang from "./pages/PengembalianBarang";
import Laporan from "./pages/Laporan";
import Notifikasi from "./pages/Notifikasi";
import Tanggapan from "./pages/Tanggapan";
import Profil from "./pages/Profil";

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-100">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/kelola-barang" element={<KelolaBarang />} />
            <Route path="/peminjaman-barang" element={<PeminjamanBarang />} />
            <Route path="/pengembalian-barang" element={<PengembalianBarang />} />
            <Route path="/laporan" element={<Laporan />} />
            <Route path="/notifikasi" element={<Notifikasi />} />
            <Route path="/tanggapan" element={<Tanggapan />} />
            <Route path="/profil" element={<Profil />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;