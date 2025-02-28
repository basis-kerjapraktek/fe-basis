import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [user_id, setUserId] = useState(""); // Ubah ke user_id
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // State untuk menangani error
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validasi input kosong
    if (!user_id || !password) {
      setError("User ID dan password wajib diisi!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id, password }), // Ubah ke user_id
      });

      const data = await response.json();

      if (response.ok) {
        // Simpan token & role di localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        alert("Login berhasil!");

        // Redirect berdasarkan role
        if (data.role === "Admin") {
          navigate("/admin");
        } else if (data.role === "Atasan") {
          navigate("/atasan");
        } else {
          navigate("/employee");
        }
      } else {
        setError(data.message || "Login gagal, periksa kembali data Anda.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Terjadi kesalahan, coba lagi.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-blue-500">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-96 border border-blue-300">
        <h2 className="text-center text-2xl font-bold text-gray-800">BASIS</h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          (Baturaja Asset Information System)
        </p>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600">
              User ID
            </label>
            <input
              type="text"
              value={user_id} // Sesuaikan dengan state
              onChange={(e) => setUserId(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Masukkan User ID"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              placeholder="Masukkan password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-lg transition duration-300"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}