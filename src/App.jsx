import { useState } from "react";
import "./App.css";
import BooksList from "./components/BooksList";
import Header from "./components/Header";
function App() {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  return (
    <div className="main-container">
      <h1>Books</h1>

      <Header isOpenPopUp={isOpenPopUp} setIsOpenPopUp={setIsOpenPopUp} />

      <BooksList isOpenPopUp={isOpenPopUp} setIsOpenPopUp={setIsOpenPopUp} />
    </div>
  );
}

export default App;
