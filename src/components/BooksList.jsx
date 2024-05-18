import { booksData } from "../data/booksData.js";
import { useState } from "react";
import BookCard from "./BookCard";
import PopUpDisplay from "./PopUpDisplay.jsx";
export default function BooksList({
  isOpenPopUp,
  setIsOpenPopUp,
  currentIndex,
  setCurrentIndex,
}) {
  const [books, setBooks] = useState(booksData);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [overview, setOverview] = useState("");
  const [summary, setSummary] = useState("");
  const [year, setYear] = useState("");
  return (
    <div className="booksList-container">
      {isOpenPopUp && (
        <PopUpDisplay
          setIsOpenPopUp={setIsOpenPopUp}
          setBooks={setBooks}
          title={title}
          setTitle={setTitle}
          author={author}
          setAuthor={setAuthor}
          category={category}
          setCategory={setCategory}
          overview={overview}
          setOverview={setOverview}
          summary={summary}
          setSummary={setSummary}
          year={year}
          setYear={setYear}
          currentIndex={currentIndex}
          books={books}
        />
      )}
      {books.map((book, idx) => {
        return (
          <BookCard
            key={idx}
            book={book}
            setIsOpenPopUp={setIsOpenPopUp}
            setCurrentIndex={setCurrentIndex}
            idx={idx}
          />
        );
      })}
    </div>
  );
}
