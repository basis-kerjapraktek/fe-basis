const ItemCard = ({ item }) => {
    return (
      <div className="bg-purple-700 p-4 rounded-md mt-4">
        <div className="flex gap-4 items-center">
          <img
            src={item.image || "https://via.placeholder.com/100"}
            alt="Barang"
            className="w-32 h-24 object-cover rounded-md"
          />
          <div className="text-white">
            <h2 className="text-lg font-bold">{item.name || "Nama Barang"}</h2>
            <p>ID: {item.id || "ITEM-XXX"}</p>
            <p>Kondisi: {item.condition || "Baik"}</p>
            <p>Status: {item.status || "Tersedia"}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemCard;
  