import React, { useState } from "react";
import Title from "./inputs/Title";
import Author from "./inputs/Author";
import Category from "./inputs/Category";
import Overview from "./inputs/Overview";
import Summary from "./inputs/Summary";
import Year from "./inputs/Year";

export default function PopUpDisplay({ setIsOpenPopUp, setBooks }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");
  const [overview, setOverview] = useState("");
  const [summary, setSummary] = useState("");
  const [year, setYear] = useState("");
  return (
    <div className="popUpDisplay">
      <form
        className="popUpForm"
        onSubmit={(e) => {
          e.preventDefault();
          setBooks((prev) => [
            ...prev,
            {
              title,
              author,
              category,
              overview,
              summary,
              year,
            },
          ]);
          setTitle("");
          setCategory("");
          setOverview("");
          setSummary("");
          setYear("");
          setIsOpenPopUp(false);
        }}
      >
        <Title title={title} setTitle={setTitle} />
        <Author author={author} setAuthor={setAuthor} />
        <Category category={category} setCategory={setCategory} />
        <Overview overview={overview} setOverview={setOverview} />
        <Summary summary={summary} setSummary={setSummary} />
        <Year year={year} setYear={setYear} />
        <button type="submit" className="add-btn">
          {" "}
          add your book
        </button>
        <button
          className="popUpButton"
          onClick={(e) => {
            e.preventDefault();
            setIsOpenPopUp(false);
          }}
        >
          X
        </button>
      </form>
    </div>
  );
}
