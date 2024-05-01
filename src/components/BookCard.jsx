import React from "react";

export default function BookCard({ book }) {
  return (
    <div className="bookCard-container">
      <h3>{book.title}</h3>
      <h4>
        Author: <span>{book.author}</span>
      </h4>
      <h4>
        Category: <span>{book.category}</span>
      </h4>
      <h4>
        Overview: <span>{book.overview}</span>
      </h4>
      <h4>
        Summary:{" "}
        <span>
          {book.summary.slice(0, 100)} {book.summary.length > 100 ? "..." : ""}
        </span>
      </h4>
      <h4>
        Estd: <span>{book.year}</span>
      </h4>
    </div>
  );
}
