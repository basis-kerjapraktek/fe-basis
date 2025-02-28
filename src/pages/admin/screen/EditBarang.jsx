import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditBarang = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [barang, setBarang] = useState({
    nama: "",
    kode: "",
    jumlah: "",
    kondisi: "",
    status: "",
    gambar: "",
  });

  useEffect(() => {
    const fetchBarang = async () => {
      try {
        const response = await fetch(`http://localhost:3000/barang/${id}`);
        if (!response.ok) throw new Error("Gagal mengambil data barang");
  
        const data = await response.json();
        console.log("Data Barang dari Backend:", data); // Debugging
  
        setBarang({
          nama: data.name, // "name" dari backend → "nama" di state
          kode: data.code, // "code" dari backend → "kode" di state
          jumlah: data.stock_quantity, // "stock_quantity" dari backend → "jumlah" di state
          kondisi: data.item_condition, // "item_condition" dari backend → "kondisi" di state
          status: data.status, // Sudah sesuai
          gambar: data.picture.startsWith("http")
            ? data.picture
            : `http://localhost:3000/uploads/${data.picture}`, // Menyesuaikan URL gambar
        });
  
        console.log("State Barang setelah di-set:", barang); // Debugging
      } catch (error) {
        console.error("Gagal mengambil data barang:", error);
      }
    };
  
    fetchBarang();
  }, [id]);
  

  const handleChange = (e) => {
    setBarang({ ...barang, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBarang({ 
        ...barang, 
        gambar: URL.createObjectURL(file), 
        gambarFile: file 
      });
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("code", barang.kode);
      formData.append("name", barang.nama);
      formData.append("stock_quantity", barang.jumlah);
      formData.append("item_condition", barang.kondisi);
      formData.append("status", barang.status);
  
      // Jika ada gambar baru, tambahkan ke formData
      if (barang.gambarFile) {
        formData.append("picture", barang.gambarFile);
      }
  
      const response = await fetch(`http://localhost:3000/barang/${id}`, {
        method: "PUT",
        body: formData, // Kirim sebagai FormData
      });
  
      if (!response.ok) throw new Error("Gagal memperbarui barang");
  
      alert("Barang berhasil diperbarui");
      navigate("/admin/kelola-barang"); // Arahkan kembali setelah update
    } catch (error) {
      console.error("Gagal memperbarui barang:", error);
      alert("Gagal memperbarui barang");
    }
  };
  
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Edit Barang</h2>
      <form onSubmit={handleSubmit}>
        <label className="block">Nama Barang</label>
        <input
          type="text"
          name="nama"
          className="w-full px-3 py-2 border rounded-lg mb-2"
          value={barang.nama}
          onChange={handleChange}
          required
        />

        <label className="block">Kode Barang</label>
        <input
          type="text"
          name="kode"
          className="w-full px-3 py-2 border rounded-lg mb-2"
          value={barang.kode}
          onChange={handleChange}
          required
        />

        <label className="block">Jumlah</label>
        <input
          type="number"
          name="jumlah"
          className="w-full px-3 py-2 border rounded-lg mb-2"
          value={barang.jumlah}
          onChange={handleChange}
          required
        />

        <label className="block">Kondisi</label>
        <select
          name="kondisi"
          className="w-full px-3 py-2 border rounded-lg mb-2"
          value={barang.kondisi}
          onChange={handleChange}
          required
        >
          <option value="Baik">Baik</option>
          <option value="Rusak">Rusak</option>
        </select>

        <label className="block">Status</label>
        <select
          name="status"
          className="w-full px-3 py-2 border rounded-lg mb-2"
          value={barang.status}
          onChange={handleChange}
          required
        >
          <option value="Tersedia">Tersedia</option>
          <option value="Kosong">Kosong</option>
        </select>

        {/* Gambar Barang */}
        <label className="block">Gambar Barang</label>
        {barang.gambar && (
          <img
            src={barang.gambar}
            alt="Barang"
            className="w-24 h-24 object-cover mb-2 rounded"
          />
        )}
        <input
          type="file"
          accept="image/*"
          className="w-full px-3 py-2 border rounded-lg mb-2"
          onChange={handleImageUpload}
        />

        <div className="flex space-x-2 mt-4">
          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2 bg-[#5D50BC] text-white rounded-lg shadow-md"
          >
            Simpan
          </button>
          <button
            type="button"
            className="bg-gray-300 px-4 py-2 rounded-lg"
            onClick={() => navigate("/admin/kelola-barang")}
          >
            Batal
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBarang;