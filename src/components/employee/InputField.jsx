import React from "react";

const InputField = ({ label, name, value, onChange, textarea, disabled }) => {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className="input-field textarea"
          disabled={disabled}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          className="input-field"
          disabled={disabled}
        />
      )}
    </div>
  );
};

export default InputField;