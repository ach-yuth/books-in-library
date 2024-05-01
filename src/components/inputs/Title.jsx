import React from "react";

export default function Title({ title, setTitle }) {
  return (
    <div className="title">
      <label htmlFor="text">Title:</label>
      <input
        type="text"
        id="text"
        value={title}
        required
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      ></input>
    </div>
  );
}
