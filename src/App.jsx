import { useState } from "react";
import "./App.css";
import BooksList from "./components/BooksList";
import Header from "./components/Header";
function App() {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  return (
    <div className="main-container">
      <Header setIsOpenPopUp={setIsOpenPopUp} />
      <BooksList isOpenPopUp={isOpenPopUp} setIsOpenPopUp={setIsOpenPopUp} />
    </div>
  );
}

export default App;
