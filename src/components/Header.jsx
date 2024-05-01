import React from "react";
export default function Header({ setIsOpenPopUp }) {
  return (
    <div>
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
