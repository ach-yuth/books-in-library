import React from "react";

export default function Year({ year, setYear }) {
  return (
    <div className="year">
      <label htmlFor="year">Year:</label>
      <input
        type="number"
        id="year"
        value={year}
        required
        onChange={(e) => {
          setYear(e.target.value);
        }}
      ></input>
    </div>
  );
}
