import React, { useEffect, useState } from 'react';
import { FaSearch, FaEye, FaTimes } from 'react-icons/fa';
import axios from 'axios';

const Peminjaman = () => {
    const [peminjaman, setPeminjaman] = useState([]);
    const [search, setSearch] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [loading, setLoading] = useState(true);
    const [selectedItem, setSelectedItem] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;

    useEffect(() => {
        axios.get('http://localhost:3000/peminjaman')
            .then(response => {
                setPeminjaman(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const handleApprove = () => {
        setPeminjaman(prevData => prevData.map(item => 
            item.id_peminjaman === selectedItem.id_peminjaman 
                ? { ...item, status: 'Disetujui' } 
                : item
        ));
        setSelectedItem(null);
    };

    const handleReject = () => {
        setPeminjaman(prevData => prevData.map(item => 
            item.id_peminjaman === selectedItem.id_peminjaman 
                ? { ...item, status: 'Ditolak' } 
                : item
        ));
        setSelectedItem(null);
    };

    const filteredPeminjaman = peminjaman.filter(item => 
        (search === '' || 
            item.id_peminjaman.toString().includes(search) ||
            item.nama.toLowerCase().includes(search.toLowerCase()) ||
            item.barang.toLowerCase().includes(search.toLowerCase())) &&
        (statusFilter === '' || item.status === statusFilter)
    );

    const totalPages = Math.ceil(filteredPeminjaman.length / itemsPerPage);
    const displayedData = filteredPeminjaman.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const goToPage = (page) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };



    return (
        <div className="p-6 bg-gray-100 rounded-lg">
            <div className="flex mb-4 gap-4">
                <div className="relative flex-1">
                    <input
                        type="text"
                        className="w-full px-4 py-2 border rounded-lg pl-10 focus:ring-2 focus:ring-purple-400"
                        placeholder="Cari ID/Nama/Barang..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
                <select 
                    className="px-4 py-2 rounded-lg bg-purple-500 text-white focus:ring-2 focus:ring-purple-400"
                    value={statusFilter} 
                    onChange={(e) => setStatusFilter(e.target.value)}
                >
                    <option value="">Semua Status</option>
                    <option value="Diproses">Diproses</option>
                    <option value="Disetujui">Disetujui</option>
                    <option value="Ditolak">Ditolak</option>
                </select>
            </div>

            <div className="bg-white shadow-md rounded-lg overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-200 text-gray-700 text-sm">
                            <th className="px-6 py-3 text-center">ID Peminjaman</th>
                            <th className="px-6 py-3 text-center">Nama</th>
                            <th className="px-6 py-3 text-center">Barang</th>
                            <th className="px-6 py-3 text-center">Status</th>
                            <th className="px-6 py-3 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr><td colSpan="5" className="text-center p-4">Memuat data...</td></tr>
                        ) : (
                            displayedData.map(item => (
                                <tr key={item.id_peminjaman} className="border-t hover:bg-gray-100 text-center">
                                    <td className="px-6 py-4">{item.id_peminjaman}</td>
                                    <td className="px-6 py-4">{item.nama}</td>
                                    <td className="px-6 py-4">{item.barang}</td>
                                    <td className="px-6 py-4">{item.status}</td>
                                    <td className="px-6 py-4 flex justify-center">
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

const PopupDetailPeminjaman = ({ item, onClose, onApprove, onReject }) => {
    if (!item) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-1/2 relative">
                <button className="absolute top-4 right-4" onClick={onClose}>
                    <FaTimes />
                </button>
                <h2 className="text-lg font-bold mb-4">Detail Peminjaman</h2>
                <table className="w-full">
                    <tbody>
                        <tr><td>Nama Barang</td><td>: {item.barang}</td></tr>
                        <tr><td>ID Barang</td><td>: {item.id_barang}</td></tr>
                        <tr><td>Nama Peminjam</td><td>: {item.nama}</td></tr>
                        <tr><td>Tanggal Pengajuan</td><td>: {item.tgl_pinjam}</td></tr>
                        <tr><td>Jam Pengajuan</td><td>: {item.jam_pengajuan}</td></tr>
                        <tr><td>Alasan</td><td>: {item.alasan}</td></tr>
                        <tr><td>Perpanjangan Waktu</td><td>: <i>{item.perpanjangan_waktu}</i></td></tr>
                    </tbody>
                </table>
                <textarea placeholder="Catatan..." className="w-full mt-4 p-2 border rounded"></textarea>
                <div className="flex justify-end gap-4 mt-4">
                    <button 
                        className="px-4 py-2 border rounded text-purple-500" 
                        onClick={() => onReject(item)} // Panggil fungsi onReject
                    >
                        Tolak
                    </button>
                    <button 
                        className="px-4 py-2 bg-purple-500 text-white rounded"
                        onClick={() => onApprove(item)} // Panggil fungsi onApprove
                    >
                        Setuju
                    </button>
                </div>
            </div>
        </div>
    );
};    

export default Peminjaman;