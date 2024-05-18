import React from "react";
export default function Header({ setIsOpenPopUp, setCurrentIndex }) {
  return (
    <div>
      <h1>Books</h1>

      <div className="btn-container">
        <button
          className="main-btn"
          onClick={() => {
            setIsOpenPopUp(true);
            setCurrentIndex(null);
          }}
        >
          Add your Favourite bookCard
        </button>
      </div>
    </div>
  );
}
