import React from "react";

export default function Category({ category, setCategory }) {
  return (
    <div className="category">
      <label htmlFor="category">Category</label>
      <input
        type="text"
        id="category"
        value={category}
        required
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      ></input>
    </div>
  );
}
