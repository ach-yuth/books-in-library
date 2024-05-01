import React from "react";

export default function Overview({ overview, setOverview }) {
  return (
    <div className="overview">
      <label htmlFor="overview">Overview:</label>
      <input
        type="text"
        id="overview"
        value={overview}
        required
        onChange={(e) => {
          setOverview(e.target.value);
        }}
      ></input>
    </div>
  );
}
