import Inputs from "./Inputs";

export default function PopUpDisplay({
  setIsOpenPopUp,
  setBooks,
  title,
  setTitle,
  author,
  setAuthor,
  category,
  setCategory,
  overview,
  setOverview,
  summary,
  setSummary,
  year,
  setYear,
  books,
  currentIndex,
}) {
  return (
    <div className="popUpDisplay">
      <form
        className="popUpForm"
        onSubmit={(e) => {
          e.preventDefault();

          if (currentIndex !== null) {
            setBooks((prev) =>
              prev.map((ele, idx) => {
                if (idx === currentIndex) {
                  return {
                    title,
                    author,
                    category,
                    overview,
                    summary,
                    year,
                  };
                } else {
                  return ele;
                }
              })
            );
          } else {
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
          }
          setTitle("");
          setCategory("");
          setAuthor("");
          setOverview("");
          setSummary("");
          setYear("");
          setIsOpenPopUp(false);
        }}
      >
        {currentIndex !== null ? (
          <h2>edit your book</h2>
        ) : (
          <h2>add your book</h2>
        )}
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
          {currentIndex !== null ? (
            <h2>edit your book</h2>
          ) : (
            <h2>add your book</h2>
          )}
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
      {currentIndex !== null ? setTitle(books[currentIndex].title) : ""}
      {currentIndex !== null ? setAuthor(books[currentIndex].author) : ""}
      {currentIndex !== null ? setCategory(books[currentIndex].category) : ""}
      {currentIndex !== null ? setSummary(books[currentIndex].summary) : ""}
      {currentIndex !== null ? setOverview(books[currentIndex].overview) : ""}
      {currentIndex !== null ? setYear(books[currentIndex].year) : ""}
    </div>
  );
}
