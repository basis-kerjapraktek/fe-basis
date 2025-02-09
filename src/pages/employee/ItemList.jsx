// // import { useState } from "react";
// // import Searching from "../../components/employee/Searching";
// // import Item from "../../components/employee/Item";
// // import Page from "../../components/employee/Page";

// // const dummyItems = [
// //   { id: 1, name: "Laptop", description: "Laptop Core i7", image: "https://via.placeholder.com/150" },
// //   { id: 2, name: "Mouse", description: "Mouse Wireless", image: "https://via.placeholder.com/150" },
// //   { id: 3, name: "Keyboard", description: "Mechanical Keyboard", image: "https://via.placeholder.com/150" },
// //   { id: 4, name: "Monitor", description: "Monitor 24 inch", image: "https://via.placeholder.com/150" },
// //   { id: 5, name: "Printer", description: "Printer Laser", image: "https://via.placeholder.com/150" },
// //   { id: 6, name: "Flashdisk", description: "32GB USB 3.0", image: "https://via.placeholder.com/150" },
// //   { id: 7, name: "Webcam", description: "HD Webcam", image: "https://via.placeholder.com/150" },
// // ];

// // const ItemList = () => {
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 3; // Biar keliatan paginationnya

// //   // Filter berdasarkan pencarian
// //   const filteredItems = dummyItems.filter((item) =>
// //     item.name.toLowerCase().includes(searchQuery.toLowerCase())
// //   );

// //   // Pagination logic
// //   const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
// //   const displayedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

// //   // return (
// //   //   <div>
// //   //     <Searching onSearch={setSearchQuery} />
// //   //     <Item items={displayedItems} />
// //   //     <Page currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
// //   //   </div>
// //   // );

  
// import { useState } from "react";
// import Searching from "../../components/employee/Searching";
// import Item from "../../components/employee/Item";
// import Page from "../../components/employee/Page";

// const dummyItems = [
//   { id: 1, name: "Laptop", description: "Laptop Core i7", image: "https://via.placeholder.com/150", condition: "Baru", status: "Tersedia", stock: 5 },
//   { id: 2, name: "Mouse", description: "Mouse Wireless", image: "https://via.placeholder.com/150", condition: "Bekas", status: "Kosong", stock: 0 },
//   { id: 3, name: "Keyboard", description: "Mechanical Keyboard", image: "https://via.placeholder.com/150", condition: "Baru", status: "Tersedia", stock: 3 },
//   { id: 4, name: "Monitor", description: "Monitor 24 inch", image: "https://via.placeholder.com/150", condition: "Bekas", status: "Tersedia", stock: 2 },
//   { id: 5, name: "Printer", description: "Printer Laser", image: "https://via.placeholder.com/150", condition: "Bekas", status: "Kosong", stock: 0 },
//   { id: 6, name: "Flashdisk", description: "32GB USB 3.0", image: "https://via.placeholder.com/150", condition: "Baru", status: "Tersedia", stock: 10 },
// ];

// const ItemList = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 3; // Biar keliatan paginationnya

//   // Filter berdasarkan pencarian
//   const filteredItems = dummyItems.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   // Pagination logic
//   const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
//   const displayedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

//   return (
//     <div className="p-4">
//       {/* Search Bar */}
//       <div className="flex justify-between items-center mb-4">
//         <input
//           type="text"
//           placeholder="Pencarian"
//           className="border border-purple-500 px-3 py-1 rounded-md w-60 text-sm"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button
//           className="bg-purple-500 text-white px-4 py-2 rounded-md"
//           onClick={() => setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))}
//         >
//           Next Page
//         </button>
//       </div>

//       {/* Product Grid */}
//       <div className="grid grid-cols-3 gap-4">
//         {displayedItems.map((item) => (
//           <div key={item.id} className="border border-purple-500 p-4 rounded-lg text-center">
//             <img src={item.image} alt={item.name} className="w-32 h-32 mx-auto" />
//             <h3 className="font-bold mt-2">{item.name}</h3>
//             <p className="text-sm">Kondisi: {item.condition}</p>
//             <p className={item.status === "Kosong" ? "text-red-500" : "text-green-500"}>{item.status}</p>
//             <div className="flex justify-center items-center mt-2">
//               <label className="mr-2 text-sm">Jumlah:</label>
//               <input type="number" min="1" max={item.stock} disabled={item.status === "Kosong"} className="border w-12 text-center" />
//             </div>
//             <button
//               className={`mt-2 px-4 py-2 rounded-md w-full ${
//                 item.status === "Kosong" ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-purple-500 text-white"
//               }`}
//               disabled={item.status === "Kosong"}
//               onClick={() => {
//                 if (item.status === "Tersedia") {
//                   window.location.href = "/request-loan";
//                 }
//               }}
//             >
//               Pinjam
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ItemList;

import { useState } from "react";
import Searching from "../../components/employee/Searching";
import Item from "../../components/employee/Item";
import Page from "../../components/employee/Page";

const dummyItems = [
  { id: 1, name: "Laptop", description: "Laptop Core i7", image: "https://via.placeholder.com/150", condition: "Baru", status: "Tersedia", stock: 5 },
  { id: 2, name: "Mouse", description: "Mouse Wireless", image: "https://via.placeholder.com/150", condition: "Bekas", status: "Kosong", stock: 0 },
  { id: 3, name: "Keyboard", description: "Mechanical Keyboard", image: "https://via.placeholder.com/150", condition: "Baru", status: "Tersedia", stock: 3 },
  { id: 4, name: "Monitor", description: "Monitor 24 inch", image: "https://via.placeholder.com/150", condition: "Bekas", status: "Tersedia", stock: 2 },
  { id: 5, name: "Printer", description: "Printer Laser", image: "https://via.placeholder.com/150", condition: "Bekas", status: "Kosong", stock: 0 },
  { id: 6, name: "Flashdisk", description: "32GB USB 3.0", image: "https://via.placeholder.com/150", condition: "Baru", status: "Tersedia", stock: 10 },
];

const ItemList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Biar keliatan paginationnya

  // Filter berdasarkan pencarian
  const filteredItems = dummyItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const displayedItems = filteredItems.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="p-4">
      {/* Search Bar & Pagination */}
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Pencarian"
          className="border border-purple-500 px-3 py-1 rounded-md w-60 text-sm"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <Page currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-3 gap-4">
        {displayedItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
