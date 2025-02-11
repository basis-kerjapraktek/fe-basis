// import { useState, useEffect } from "react";
// import { FaSearch, FaEye, FaEdit, FaTrash } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Pengembalian = () => {
//     const [search, setSearch] = useState("");
//     const [filterStatus, setFilterStatus] = useState("");
//     const [data, setData] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch("http://localhost:3000/admin/pengembalian")
//             .then((res) => res.json())
//             .then((data) => {
//                 setData(data);
//                 setLoading(false);
//             })
//             .catch((error) => {
//                 console.error("Error fetching data:", error);
//                 setLoading(false);
//             });
//     }, []);

//     const filteredData = data.filter((item) =>
//         (item.nama.toLowerCase().includes(search.toLowerCase()) ||
//         item.barang.toLowerCase().includes(search.toLowerCase()) ||
//         item.id_pengembalian.toString().includes(search)) &&
//         (filterStatus === "" || item.status === filterStatus)
//     );

//     return (
//         <div className="p-6 bg-gray-100 rounded-lg">
//             <div className="flex items-center space-x-2 mb-4">
//                 {/* Input Pencarian */}
//                 <div className="relative flex-1">
//                     <input
//                         type="text"
//                         className="w-full px-4 py-2 border rounded-lg pl-10 focus:ring-2 focus:ring-purple-400"
//                         placeholder="Cari ID/Nama/Barang..."
//                         value={search}
//                         onChange={(e) => setSearch(e.target.value)}
//                     />
//                     <FaSearch className="absolute left-3 top-3 text-gray-400" />
//                 </div>

//                 {/* Filter Status */}
//                 <select 
//                     className="px-4 py-2 rounded-lg bg-purple-500 text-white focus:ring-2 focus:ring-purple-400"
//                     value={filterStatus} 
//                     onChange={(e) => setFilterStatus(e.target.value)}
//                 >
//                     <option value="">Semua Status</option>
//                     <option value="Dikembalikan">Dikembalikan</option>
//                     <option value="Belum Dikembalikan">Belum Dikembalikan</option>
//                 </select>
//             </div>

//             {/* Tabel Data */}
//             <div className="bg-white shadow-md rounded-lg overflow-hidden">
//                 <table className="w-full text-left border-collapse">
//                     <thead>
//                         <tr className="bg-gray-200">
//                             <th className="px-4 py-2">ID Pengembalian</th>
//                             <th className="px-4 py-2">ID User</th>
//                             <th className="px-4 py-2">Nama</th>
//                             <th className="px-4 py-2">Barang</th>
//                             <th className="px-4 py-2">ID Barang</th>
//                             <th className="px-4 py-2">Tanggal Pinjam</th>
//                             <th className="px-4 py-2">Tanggal Kembali</th>
//                             <th className="px-4 py-2">Status</th>
//                             <th className="px-4 py-2">Aksi</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {loading ? (
//                             <tr>
//                                 <td colSpan="9" className="text-center p-4">Memuat data...</td>
//                             </tr>
//                         ) : filteredData.length === 0 ? (
//                             <tr>
//                                 <td colSpan="9" className="text-center p-4 text-gray-500">Belum ada data pengembalian</td>
//                             </tr>
//                         ) : (
//                             filteredData.map((item) => (
//                                 <tr key={item.id_pengembalian} className="border-t">
//                                     <td className="px-4 py-2">{item.id_pengembalian}</td>
//                                     <td className="px-4 py-2">{item.id_user}</td>
//                                     <td className="px-4 py-2">{item.nama}</td>
//                                     <td className="px-4 py-2">{item.barang}</td>
//                                     <td className="px-4 py-2">{item.id_barang}</td>
//                                     <td className="px-4 py-2">{item.tgl_pinjam}</td>
//                                     <td className="px-4 py-2">{item.tgl_kembali}</td>
//                                     <td className="px-4 py-2">{item.status}</td>
//                                     <td className="px-4 py-2 flex space-x-2">
//                                         <Link to={`/admin/pengembalian/${item.id_pengembalian}`}>
//                                             <button className="bg-blue-500 text-white px-3 py-1 rounded">
//                                                 <FaEye />
//                                             </button>
//                                         </Link>
//                                         <Link to={`/edit-pengembalian/${item.id_pengembalian}`}>
//                                             <button className="bg-purple-500 text-white px-3 py-1 rounded">
//                                                 <FaEdit />
//                                             </button>
//                                         </Link>
//                                         <button
//                                             className="bg-gray-300 px-3 py-1 rounded"
//                                             onClick={() => console.log("Hapus", item.id_pengembalian)}
//                                         >
//                                             <FaTrash />
//                                         </button>
//                                     </td>
//                                 </tr>
//                             ))
//                         )}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default Pengembalian;