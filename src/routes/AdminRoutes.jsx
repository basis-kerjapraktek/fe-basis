import { Routes, Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayouts";
import Beranda from "../pages/admin/Beranda";
import KelolaBarang from "../pages/admin/KelolaBarang";
import Laporan from "../pages/admin/Laporan";
import Notifikasi from "../pages/admin/Notifikasi";
import PeminjamanBarang from "../pages/admin/PeminjamanBarang";
import PengembalianBarang from "../pages/admin/PengembalianBarang";
import Profil from "../pages/admin/Profil";
import Tanggapan from "../pages/admin/Tanggapan";
import TambahBarang from "../pages/admin//screen/TambahBarang";

const AdminRoutes = () => {
  return (
    <Routes>
  <Route path="/" element={<AdminLayout />}>
    <Route index element={<Beranda />} />
    <Route path="kelola-barang" element={<KelolaBarang />} />
    <Route path="kelola-barang/tambah-barang" element={<TambahBarang />} />
    <Route path="laporan" element={<Laporan />} />
    <Route path="notifikasi" element={<Notifikasi />} />
    <Route path="peminjaman" element={<PeminjamanBarang />} />
    <Route path="pengembalian" element={<PengembalianBarang />} />
    <Route path="profil" element={<Profil />} />
    <Route path="tanggapan" element={<Tanggapan />} />
  </Route>
</Routes>

  );
};

export default AdminRoutes;
