import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TambahBarang = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [stock_quantity, setStockQuantity] = useState("");
  const [item_condition, setItemCondition] = useState("Baik");
  const [status, setStatus] = useState("Tersedia");
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!code || !name || !stock_quantity || !image) {
      alert("Harap isi semua kolom!");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("code", code);
      formData.append("name", name);
      formData.append("stock_quantity", stock_quantity);
      formData.append("item_condition", item_condition);
      formData.append("status", status);
      formData.append("image", image);

      console.log("Data yang dikirim:", Object.fromEntries(formData.entries())); // Debugging

      const response = await fetch("http://localhost:3000/barang", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      console.log("Response dari server:", result);

      if (!response.ok) {
        throw new Error(result.message || "Gagal menyimpan data");
      }

      alert("Barang berhasil ditambahkan!");
      navigate("/kelola-barang"); // Redirect ke halaman tabel barang
    } catch (error) {
      console.error("Gagal menambah barang:", error);
      alert("Terjadi kesalahan, coba lagi nanti.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tambah Barang</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>ID Barang</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <label>Nama Barang</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <label>Jumlah</label>
        <input
          type="number"
          value={stock_quantity}
          onChange={(e) => setStockQuantity(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        <label>Kondisi</label>
        <select
          value={item_condition}
          onChange={(e) => setItemCondition(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Baik">Baik</option>
          <option value="Rusak">Rusak</option>
        </select>

        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="Tersedia">Tersedia</option>
          <option value="Kosong">Kosong</option>
        </select>

        <label>Gambar</label>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className="w-full p-2 border rounded"
          required
        />

        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={() => navigate("/kelola-barang")}
          >
            Batal
          </button>
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahBarang;
