// FormField.js
import React from "react";

const FormField = ({ label, value }) => {
  return (
    <div>
      <label className="block text-gray-600 font-semibold mb-1">{label}</label>
      <input
        type="text"
        value={value}
        readOnly
        className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
      />
    </div>
  );
};

export default FormField;
