import React from "react";

export default function Summary({ summary, setSummary }) {
  return (
    <div className="summary">
      <label htmlFor="summary">Summary:</label>
      <input
        type="text"
        id="summary"
        value={summary}
        required
        onChange={(e) => {
          setSummary(e.target.value);
        }}
      ></input>
    </div>
  );
}
