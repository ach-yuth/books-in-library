import React from "react";

export default function Author({ author, setAuthor }) {
  return (
    <div className="author">
      <label htmlFor="author">Author:</label>
      <input
        type="text"
        id="author"
        value={author}
        required
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
      ></input>
    </div>
  );
}
