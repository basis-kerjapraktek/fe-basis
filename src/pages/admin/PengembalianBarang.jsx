import { useState, useEffect } from "react";
import { FaSearch, FaEye, FaTimes } from "react-icons/fa";
import { format } from "date-fns";
import { id } from 'date-fns/locale';

const Pengembalian = () => {
    const [search, setSearch] = useState("");
    const [filterStatus, setFilterStatus] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // Jumlah data per halaman

    useEffect(() => {
        fetch("http://localhost:3000/pengembalian")
            .then((res) => res.json())
            .then((data) => {
                console.log("Data dari API:", data);
                setData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    const handleApprove = () => {
        setPeminjaman(prevData => prevData.map(item => 
            item.id_peminjaman === selectedItem.id_peminjaman 
                ? { ...item, validasi: 'Disetujui' } 
                : item
        ));
        setSelectedItem(null);
    };

    const handleReject = () => {
        setPeminjaman(prevData => prevData.map(item => 
            item.id_peminjaman === selectedItem.id_peminjaman 
                ? { ...item, validasi: 'Ditolak' } 
                : item
        ));
        setSelectedItem(null);
    };

    const filteredData = data.filter((item) =>
        item.id_peminjaman.toString().includes(search) &&
        (filterStatus === "" || item.status === filterStatus)
    );

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const currentData = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const formatDate = (date) => format(new Date(date), 'dd MMMM yyyy', { locale: id });

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="p-6 bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-3 mb-4">
                <div className="relative flex-1">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg pl-10 focus:ring-2 focus:ring-purple-400"
                        placeholder="Cari ID/Peminjaman/Barang..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>

                <select
                    className="px-4 py-2 rounded-lg bg-purple-500 text-white focus:ring-2 focus:ring-purple-400"
                    value={filterStatus}
                    onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="">Semua Status</option>
                    <option value="Dikembalikan">Dikembalikan</option>
                    <option value="Belum Dikembalikan">Belum Dikembalikan</option>
                </select>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700 text-sm">
                            <th className="px-6 py-3 text-center">ID Peminjaman</th>
                            <th className="px-6 py-3 text-center">ID User</th>
                            <th className="px-6 py-3 text-center">ID Barang</th>
                            <th className="px-6 py-3 text-center">Tgl Pinjam</th>
                            <th className="px-6 py-3 text-center">Tgl Kembali</th>
                            <th className="px-6 py-3 text-center">Status</th>
                            <th className="px-6 py-3 text-center">Validasi</th>
                            <th className="px-6 py-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="8" className="text-center p-4">Memuat data...</td>
                            </tr>
                        ) : currentData.length === 0 ? (
                            <tr>
                                <td colSpan="8" className="text-center p-4 text-gray-500">
                                    Belum ada data pengembalian
                                </td>
                            </tr>
                        ) : (
                            currentData.map((item, index) => (
                                <tr key={`${item.id_peminjaman}-${index}`} className="border-t hover:bg-gray-100 text-center">
                                    <td className="px-6 py-4">{item.id_peminjaman}</td>
                                    <td className="px-6 py-4">{item.id_user}</td>
                                    <td className="px-6 py-4">{item.id_barang}</td>
                                    <td className="px-6 py-4">{formatDate(item.tgl_pinjam)}</td>
                                    <td className="px-6 py-4">{formatDate(item.tgl_kembali)}</td>
                                    <td className={`px-6 py-4 font-semibold ${item.status === "Dikembalikan" ? "text-green-600" : "text-red-600"}`}>
                                        {item.status}
                                    </td>
                                    <td className="px-6 py-4">{item.validasi}</td>
                                    <td className="px-6 py-4">
                                        <button 
                                            className="bg-blue-500 text-white px-3 py-1 rounded flex items-center"
                                            onClick={() => setSelectedItem(item)}
                                        >
                                            <FaEye />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
                {selectedItem && (
                    <PopupDetailPeminjaman 
                    item={selectedItem} 
                    onClose={() => setSelectedItem(null)}
                    onApprove={handleApprove}  
                    onReject={handleReject}  
                    />
                    )}
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
        </div>
    );
};

const PopupDetailPeminjaman = ({ item, onClose }) => {
    if (!item) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-1/2 relative">
                <button className="absolute top-4 right-4" onClick={onClose}>
                    <FaTimes />
                </button>
                <h2 className="text-lg font-bold mb-4">Detail Pengembalian</h2>
                <table className="w-full">
                    <tbody>
                        <tr><td>ID Peminjaman</td><td>: {item.id_peminjaman}</td></tr>
                        <tr><td>ID Barang</td><td>: {item.id_barang}</td></tr>
                        <tr><td>ID User</td><td>: {item.id_user}</td></tr>
                        <tr><td>Tanggal Pengajuan</td><td>: {item.tgl_pinjam}</td></tr>
                        <tr><td>Tanggal Pengembalian</td><td>: {item.tgl_kembali}</td></tr>
                        <tr><td>Jam Pengajuan</td><td>: {item.jam_pengajuan}</td></tr>
                        <tr><td>Alasan</td><td>: {item.alasan}</td></tr>
                        <tr><td>Perpanjangan Waktu</td><td>: <i>{item.perpanjangan_waktu}</i></td></tr>
                    </tbody>
                </table>
                <textarea placeholder="Catatan..." className="w-full mt-4 p-2 border rounded"></textarea>
                <div className="flex justify-end gap-4 mt-4">
                    <button className="px-4 py-2 border rounded text-purple-500" onClick={() => onReject(item)}>Tolak</button>
                    <button className="px-4 py-2 bg-purple-500 text-white rounded" onClick={() => onApprove(item)}>Setuju</button>
                </div>
            </div>
        </div>
    );
};    

export default Pengembalian;