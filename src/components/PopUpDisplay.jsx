import React, { useState } from "react";
import Inputs from "./Inputs";

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
        <h2>add your book</h2>
        <Inputs
          type={"text"}
          value={title}
          label={"Title"}
          setValue={setTitle}
        />
        <Inputs
          type={"text"}
          value={author}
          label={"Author"}
          setValue={setAuthor}
        />
        <Inputs
          type={"text"}
          value={category}
          label={"Category"}
          setValue={setCategory}
        />
        <Inputs
          type={"text"}
          value={overview}
          label={"Overview"}
          setValue={setOverview}
        />
        <Inputs
          type={"text"}
          value={summary}
          label={"Summary"}
          setValue={setSummary}
        />
        <Inputs
          type={"number"}
          value={year}
          label={"Year"}
          setValue={setYear}
        />
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
