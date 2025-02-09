import React, { useEffect, useState } from 'react';
import { FaSearch, FaPlus, FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Peminjaman = () => {
    const [peminjaman, setPeminjaman] = useState([]);
    const [search, setSearch] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('http://localhost:3000/admin/peminjaman')
            .then(response => {
                setPeminjaman(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const filteredData = peminjaman.filter(item => 
        (item.id_peminjaman.toLowerCase().includes(search.toLowerCase()) || 
        item.nama.toLowerCase().includes(search.toLowerCase()) || 
        item.barang.toLowerCase().includes(search.toLowerCase())) &&
        (filterStatus === '' || item.status === filterStatus)
    );

    return (
        <div className="p-6 bg-gray-100 rounded-lg">
            <div className="flex items-center space-x-2 mb-4">
                {/* Input Pencarian */}
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

                {/* Filter Status */}
                <select 
                    className="px-4 py-2 rounded-lg bg-purple-500 text-white focus:ring-2 focus:ring-purple-400"
                    value={filterStatus} 
                    onChange={(e) => setFilterStatus(e.target.value)}
                >
                    <option value="">Semua Status</option>
                    <option value="Disetujui">Disetujui</option>
                    <option value="Diproses">Diproses</option>
                    <option value="Ditolak">Ditolak</option>
                </select>
            </div>

            {/* Tabel Data */}
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">ID Peminjaman</th>
                            <th className="px-4 py-2">ID User</th>
                            <th className="px-4 py-2">Nama</th>
                            <th className="px-4 py-2">Barang</th>
                            <th className="px-4 py-2">ID Barang</th>
                            <th className="px-4 py-2">Tanggal Pinjam</th>
                            <th className="px-4 py-2">Tanggal Kembali</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan="9" className="text-center p-4">Memuat data...</td>
                            </tr>
                        ) : filteredData.length === 0 ? (
                            <tr>
                                <td colSpan="9" className="text-center p-4 text-gray-500">Belum ada data peminjaman</td>
                            </tr>
                        ) : (
                            filteredData.map((item) => (
                                <tr key={item.id_peminjaman} className="border-t">
                                    <td className="px-4 py-2">{item.id_peminjaman}</td>
                                    <td className="px-4 py-2">{item.id_user}</td>
                                    <td className="px-4 py-2">{item.nama}</td>
                                    <td className="px-4 py-2">{item.barang}</td>
                                    <td className="px-4 py-2">{item.id_barang}</td>
                                    <td className="px-4 py-2">{item.tgl_pinjam}</td>
                                    <td className="px-4 py-2">{item.tgl_kembali}</td>
                                    <td className="px-4 py-2">{item.status}</td>
                                    <td className="px-4 py-2 flex space-x-2">
                                        <Link to={`/admin/peminjaman/${item.id_peminjaman}`}>
                                            <button className="bg-blue-500 text-white px-3 py-1 rounded">
                                                <FaEye />
                                            </button>
                                        </Link>
                                        <Link to={`/edit-peminjaman/${item.id_peminjaman}`}>
                                            <button className="bg-purple-500 text-white px-3 py-1 rounded">
                                                <FaEdit />
                                            </button>
                                        </Link>
                                        <button
                                            className="bg-gray-300 px-3 py-1 rounded"
                                            onClick={() => console.log("Hapus", item.id_peminjaman)}
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
        </div>
    );
};

export default Peminjaman;