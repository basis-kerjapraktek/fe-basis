import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TambahBarang = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Mengambil ID dari URL jika sedang dalam mode edit
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [stock_quantity, setStockQuantity] = useState("");
  const [item_condition, setItemCondition] = useState("Baik");
  const [status, setStatus] = useState("Tersedia");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    if (id) {
      // Jika ID ada, ambil data barang untuk mengisi form
      const fetchBarang = async () => {
        try {
          const response = await fetch(`http://localhost:3000/barang/${id}`);
          if (!response.ok) throw new Error("Gagal mengambil data barang");

          const data = await response.json();
          setCode(data.code);
          setName(data.name);
          setStockQuantity(data.stock_quantity);
          setItemCondition(data.item_condition);
          setStatus(data.status);
          setPreviewImage(
            data.picture.startsWith("http")
              ? data.picture
              : `http://localhost:3000/uploads/${data.picture}`
          );
        } catch (error) {
          console.error("Gagal mengambil data barang:", error);
        }
      };

      fetchBarang();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!code || !name || !stock_quantity) {
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
      if (image) formData.append("picture", image);

      const url = id ? `http://localhost:3000/barang/${id}` : "http://localhost:3000/barang";
      const method = id ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        body: formData,
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Gagal menyimpan data");

      alert(id ? "Barang berhasil diperbarui!" : "Barang berhasil ditambahkan!");
      navigate("/admin/kelola-barang", { replace: true });
    } catch (error) {
      console.error("Gagal menyimpan barang:", error);
      alert("Terjadi kesalahan, coba lagi nanti.");
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{id ? "Edit Barang" : "Tambah Barang"}</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <label>ID Barang</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full p-2 border rounded"
          required
          disabled={!!id} // ID tidak bisa diedit saat mode edit
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
        {previewImage && (
          <img src={previewImage} alt="Preview" className="w-32 h-32 object-cover mb-2" />
        )}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            setImage(e.target.files[0]);
            setPreviewImage(URL.createObjectURL(e.target.files[0]));
          }}
          className="w-full p-2 border rounded"
        />

        <div className="flex justify-between mt-4">
          <button
            type="button"
            className="bg-gray-300 px-4 py-2 rounded"
            onClick={() => navigate("/admin/kelola-barang")}
          >
            Batal
          </button>
          <button
            type="submit"
            className="bg-purple-500 text-white px-4 py-2 rounded"
          >
            {id ? "Perbarui" : "Simpan"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahBarang;