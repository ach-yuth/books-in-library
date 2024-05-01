import { booksData } from "../data/booksData.js";
import { useState } from "react";
import BookCard from "./BookCard";
import PopUpDisplay from "./PopUpDisplay.jsx";
export default function BooksList({ isOpenPopUp, setIsOpenPopUp }) {
  const [books, setBooks] = useState(booksData);
  return (
    <div className="booksList-container">
      {isOpenPopUp && (
        <PopUpDisplay setIsOpenPopUp={setIsOpenPopUp} setBooks={setBooks} />
      )}
      {books.map((book, idx) => {
        return (
          <div key={idx}>
            <BookCard book={book} />
          </div>
        );
      })}
    </div>
  );
}
