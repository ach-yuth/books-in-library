import { useState } from "react";
import "./App.css";
import BooksList from "./components/BooksList";
import Header from "./components/Header";
function App() {
  const [isOpenPopUp, setIsOpenPopUp] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  return (
    <div className="main-container">
      <Header
        setIsOpenPopUp={setIsOpenPopUp}
        setCurrentIndex={setCurrentIndex}
      />
      <BooksList
        isOpenPopUp={isOpenPopUp}
        setIsOpenPopUp={setIsOpenPopUp}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  );
}

export default App;
