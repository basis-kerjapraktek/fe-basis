import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Halo Refiani!</h1>
      <p className="text-gray-600">
        Mari lihat informasi tata kelola sistem inventaris secara visual.
      </p>
      <div className="mt-6">{children}</div> {/* Ini akan berisi konten halaman */}
    </div>
  );
};

export default Layout;
