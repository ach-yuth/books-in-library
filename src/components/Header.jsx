import React from "react";
import PopUpDisplay from "./PopUpDisplay";
export default function Header({ isOpenPopUp, setIsOpenPopUp }) {
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
