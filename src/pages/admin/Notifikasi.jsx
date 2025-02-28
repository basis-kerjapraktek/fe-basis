import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/id"; // Menggunakan format lokal Indonesia
import { Bell, AlertTriangle, Clock, CheckCircle, MessageSquare, FileText } from "lucide-react";

const Notifikasi = () => {
    const [notifikasi, setNotifikasi] = useState([]);
    const idUser = 2; // Ganti dengan ID sesuai

    useEffect(() => {
        fetchNotifikasi();
    }, []);

    const fetchNotifikasi = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/notifikasi/${idUser}`);
            setNotifikasi(response.data);
        } catch (error) {
            console.error("Gagal mengambil notifikasi", error);
        }
    };

    const getIcon = (tipe) => {
        switch (tipe.toLowerCase()) {
            case "permohonan peminjaman":
                return { icon: <Bell className="text-red-500" size={24} />, color: "bg-red-500" };
            case "barang terlambat dikembalikan":
                return { icon: <AlertTriangle className="text-yellow-500" size={24} />, color: "bg-yellow-500" };
            case "batas waktu peminjaman":
                return { icon: <Clock className="text-orange-500" size={24} />, color: "bg-orange-500" };
            case "permohonan pengembalian":
                return { icon: <CheckCircle className="text-purple-500" size={24} />, color: "bg-purple-500" };
            case "permohonan perpanjangan waktu":
                return { icon: <CheckCircle className="text-green-500" size={24} />, color: "bg-green-500" };
            case "tanggapan tersedia":
                return { icon: <MessageSquare className="text-gray-500" size={24} />, color: "bg-gray-500" };
            default:
                return { icon: <FileText size={24} />, color: "bg-gray-500" };
        }
    };

    const formatWaktu = (timestamp) => {
        const now = moment();
        const waktuNotifikasi = moment(timestamp);
        return waktuNotifikasi.isSame(now, "day")
            ? waktuNotifikasi.format("HH:mm") // Jika hari ini, tampilkan jam:menit
            : waktuNotifikasi.format("DD/MM/YYYY"); // Jika bukan hari ini, tampilkan tanggal
    };

    return (
        <div className="p-6">
            {/* Filter Notifikasi */}
            <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold">Notifikasi</h2>
                <button className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow-md">
                    🔎 Filter Terbaru
                </button>
            </div>

            {/* List Notifikasi */}
            {notifikasi.length === 0 ? (
                <p className="text-gray-500 text-center">Tidak ada notifikasi</p>
            ) : (
                <div className="space-y-4">
                    {notifikasi.map((notif) => {
                        const { icon, color } = getIcon(notif.tipe);
                        return (
                            <div key={notif.id} className="flex items-center p-4 border rounded-lg shadow-sm bg-white">
                                {/* Kotak Warna & Ikon */}
                                <div className={`w-2 rounded-l-lg ${color}`} />
                                <div className="p-3 flex items-center">{icon}</div>

                                {/* Konten Notifikasi */}
                                <div className="flex-1">
                                    <h3 className="font-semibold text-lg">{notif.tipe}</h3>
                                    <p className="text-gray-600 text-sm">{notif.pesan}</p>
                                </div>

                                {/* Waktu/Tanggal */}
                                <div className="text-gray-500 text-sm">{formatWaktu(notif.waktu)}</div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Notifikasi;