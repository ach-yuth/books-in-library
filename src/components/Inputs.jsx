import React from "react";

export default function Inputs({ type, value, label, setValue }) {
  return (
    <div className="inputs-container">
      <label htmlFor={label}>{label}:</label>
      <input
        type={type}
        value={value}
        id={label}
        required
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
    </div>
  );
}
