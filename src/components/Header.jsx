import React from "react";
export default function Header({ setIsOpenPopUp }) {
  return (
    <div>
      <h1>Books</h1>

      <div className="btn-container">
        <button
          className="main-btn"
          onClick={() => {
            setIsOpenPopUp(true);
          }}
        >
          Add your Favourite bookCard
        </button>
      </div>
    </div>
  );
}
