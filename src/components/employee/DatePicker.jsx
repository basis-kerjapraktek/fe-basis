import React from "react";

const DatePicker = ({ label, name, value, onChange }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input
        type="date"
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        className="input-field"
      />
    </div>
  );
};

export default DatePicker;
