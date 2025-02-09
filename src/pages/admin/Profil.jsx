import { useState, useEffect } from "react";
import axios from "axios";
import FotoProfil from "/src/assets/gambar/foto_profil.png";

export default function Profile() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    role: "",
    userId: "",
    profilePic: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5000/api/profile/00123456").then((response) => {
      setUser(response.data);
    });
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.put("http://localhost:3000/api/profile/00123456", user).then(() => {
      setIsEditing(false);
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded-lg shadow-md">
      <div className="flex items-center space-x-4 my-4">
        <img
          src={FotoProfil}
          alt="Profile"
          className="w-24 h-24 rounded-full border"
        />
        <button className="bg-purple-600 text-white px-4 py-2 rounded">Ubah foto</button>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label>Nama Depan</label>
          <input
            type="text"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Nama Belakang</label>
          <input
            type="text"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Nomor Telepon</label>
          <input
            type="text"
            name="phone"
            value={user.phone}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>E-mail</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label>Jabatan</label>
          <input
            type="text"
            name="role"
            value={user.role}
            disabled
            className="w-full border p-2 rounded bg-gray-200"
          />
        </div>
        <div>
          <label>ID Pengguna</label>
          <input
            type="text"
            name="userId"
            value={user.userId}
            disabled
            className="w-full border p-2 rounded bg-gray-200"
          />
        </div>
      </div>
      <div className="mt-4 flex space-x-2">
        {isEditing ? (
          <>
            <button onClick={handleSubmit} className="bg-purple-600 text-white px-4 py-2 rounded">
              Simpan
            </button>
            <button onClick={() => setIsEditing(false)} className="bg-gray-400 text-white px-4 py-2 rounded">
              Batal
            </button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)} className="bg-purple-600 text-white px-4 py-2 rounded">
            Edit
          </button>
        )}
      </div>
    </div>
  );
}