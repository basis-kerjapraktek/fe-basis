import { useState } from "react";

const ProfilePage = () => {
  const initialProfile = {
    firstName: "Herlina",
    lastName: "Putri",
    phone: "08123456789",
    email: "herlina@email.com",
    position: "Karyawan",
    userId: "2215061028",
    photo: "/gambar/FotoEmployee.jpg",// Panggil hasil import
  };

  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile((prev) => ({ ...prev, photo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  const handleCancel = () => {
    setProfile(initialProfile); // Kembalikan ke data awal jika batal
    setIsEditing(false);
  };

  const inputFields = [
    { label: "Nama Depan", key: "firstName" },
    { label: "Nama Belakang", key: "lastName" },
    { label: "Nomor Telepon", key: "phone" },
    { label: "Email", key: "email" },
  ];

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-8">
        {/* Foto Profil */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img src={profile.photo} alt="Profile" className="w-24 h-24 rounded-full border" />
            {isEditing && (
              <div className="absolute bottom-0 left-0 w-full text-center bg-black bg-opacity-50 text-white text-xs p-1 rounded-b-lg cursor-pointer">
                <label className="cursor-pointer">
                  Ubah Foto
                  <input type="file" className="hidden" onChange={handlePhotoChange} />
                </label>
              </div>
            )}
          </div>
          <div>
            <h2 className="text-xl font-semibold">{profile.firstName} {profile.lastName}</h2>
            <p className="text-gray-600">{profile.position}</p>
            <p className="text-gray-500">{profile.userId}</p>
          </div>
        </div>

        {/* Tombol Edit / Simpan */}
        <div className="space-x-2">
          {isEditing && (
            <button className="px-4 py-2 bg-gray-300 rounded-lg" onClick={handleCancel}>
              Batal
            </button>
          )}
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg" onClick={handleEdit}>
            {isEditing ? "Simpan" : "Edit"}
          </button>
        </div>
      </div>

      {/* Form Input */}
      <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-6">
        {inputFields.map(({ label, key }) => (
          <div key={key}>
            <label className="block text-gray-700 mb-1">{label}</label>
            <input
              type="text"
              name={key}
              value={profile[key]}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full p-3 border rounded-lg ${isEditing ? "bg-white border-gray-400" : "bg-gray-100 border-gray-300"}`}
            />
          </div>
        ))}

        <div>
          <label className="block text-gray-700 mb-1">Jabatan/Divisi</label>
          <input type="text" value={profile.position} disabled className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100" />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">ID Pengguna</label>
          <input type="text" value={profile.userId} disabled className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100" />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
