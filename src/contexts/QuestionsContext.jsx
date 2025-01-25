import { createContext, useContext } from "react";

import useQuestions from "@/hooks/useQuestions";
import useQuizState from "@/hooks/useQuizState";
import getQuestions from "@/api/getQuestions";

const QuestionContext = createContext();

export const QUESTION_COUNT = 10;
export const ANSWERS_PER_QUESTION = 4;

function QuestionsProvider({ children }) {
  const { questions, setQuestions, isLoading } = useQuestions(
    getQuestions,
    QUESTION_COUNT,
    ANSWERS_PER_QUESTION
  );
  const {
    currentQuestionIndex,
    setCurrentQuestionIndex,
    correctAnswers,
    setCorrectAnswers,
  } = useQuizState(questions.length);

  return (
    <QuestionContext.Provider
      value={{
        questions,
        setQuestions,
        QUESTION_COUNT,
        ANSWERS_PER_QUESTION,
        isLoading,
        currentQuestionIndex,
        setCurrentQuestionIndex,
        correctAnswers,
        setCorrectAnswers,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
}

export function useQuestionContext() {
  const context = useContext(QuestionContext);

  if (!context) {
    throw new Error("useQuestionContext must be used within a QuestionsProvider");
  }

  return context;
}

export default QuestionsProvider;
