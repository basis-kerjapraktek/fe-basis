import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { X, CloudUpload } from "lucide-react";
import ProgressBar from "../../components/employee/ProgressBar";

const ReturnRequestStep2 = () => {
  const [image, setImage] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && file.size <= 2 * 1024 * 1024) {
      setImage(URL.createObjectURL(file));
      setError("");
    } else {
      setError("File harus kurang dari 2MB.");
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-4 h-screen justify-start">
      {/* Progress Bar */}
      <div className="w-[890px] mt-[7px] mb-7">
        <ProgressBar step={2} />
      </div>

      {/* Header Ungu */}
      <div className="w-[890px] bg-purple-600 h-12 rounded-t-md mt-[-5px]"></div>

      {/* Container Utama */}
      <div className="bg-white shadow-lg w-[890px] h-[300px] rounded-b-md p-6 flex flex-col justify-between">
        <div className="flex gap-12">
          {/* Upload Foto */}
          <div className="relative border-2 border-purple-600 rounded-lg flex flex-col items-center justify-center w-[189px] h-[218px]">
            {!image ? (
              <>
                <label htmlFor="upload-image" className="cursor-pointer flex flex-col items-center">
                  <CloudUpload size={48} className="text-purple-600" />
                  <span className="text-xs text-gray-500 mt-1">Maksimal 2MB</span>
                </label>
                <input
                  id="upload-image"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </>
            ) : (
              <>
                <img src={image} alt="Uploaded" className="w-full h-full object-cover rounded-md" />
                <button
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-md"
                >
                  <X size={18} className="text-red-500" />
                </button>
              </>
            )}
          </div>

          {/* Kolom Keterangan */}
          <div className="border-2 border-purple-600 rounded-lg p-4 w-[555px] h-[218px]">
            <textarea
              className="w-full h-full border-none p-2 resize-none focus:outline-none"
              placeholder="Tuliskan detail kerusakan barang atau 'tidak ada kerusakan'"
            />
          </div>
        </div>

        {error && <p className="text-red-500 text-sm mt-4 text-center">{error}</p>}
      </div>

      {/* Tombol Navigasi (Sejajar di Bawah Container) */}
      <div className="w-[890px] flex justify-end space-x-4 mt-6">
        <button
          className="bg-gray-400 text-white px-6 py-2 rounded-md"
          onClick={() => navigate("/employee/ReturnRequestStep1")}
        >
          Kembali
        </button>
        <button
          className="bg-purple-600 text-white px-6 py-2 rounded-md"
          onClick={() => navigate("/employee/ReturnRequestStep3")}
        >
          Lanjut
        </button>
      </div>
    </div>
  );
};

export default ReturnRequestStep2;
