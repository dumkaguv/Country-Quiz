import Quiz from "../components/Quiz";
import { useState, createContext } from "react";

const QuestionContext = createContext();

function App() {
  


  return (
    <>
      <Quiz />
    </>
  );
}

export default App;
