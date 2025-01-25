import { useState } from "react";

function useQuizState(initialQuestionCount = 0) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  return {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    correctAnswers,
    setCorrectAnswers,
  };
}

export default useQuizState;
