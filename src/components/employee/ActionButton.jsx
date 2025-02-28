import { useNavigate } from "react-router-dom";

const ActionButtons = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-end gap-2 mt-4">
      <button
        className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
        onClick={() => navigate("/ItemList")}
      >
        Batal
      </button>
      <button
        className="bg-purple-500 text-white px-4 py-2 rounded-md"
        onClick={() => navigate("/request-loan-step2", { state: { item } })}
      >
        Lanjut
      </button>
    </div>
  );
};

export default ActionButtons;
