const ProgressBar = ({ step }) => {
    const steps = [
      { id: 1, label: "Detail Barang" },
      { id: 2, label: "Isi Formulir" },
      { id: 3, label: "Konfirmasi Peminjaman" },
    ];
  
    return (
      <div className="bg-purple-100 p-4 rounded-md flex justify-between items-center">
        {steps.map((s) => (
          <div
            key={s.id}
            className={`flex items-center gap-2 ${
              s.id === step ? "text-purple-600 font-bold" : "text-gray-400"
            }`}
          >
            <span className="font-bold">{s.id}</span>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default ProgressBar;
  