import React from "react";

const Searching = ({ searchQuery, setSearchQuery }) => {
  return (
    <input
      type="text"
      placeholder="Pencarian"
      className="border border-purple-500 px-3 py-1 rounded-md w-60 text-sm"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default Searching;
