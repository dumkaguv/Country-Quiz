import React from "react";

import styles from "./Quiz.module.scss";
import QuizHeader from "./QuizHeader";
import Congrats from "@/components/Congrats";
import { useQuestionContext } from "@/contexts/QuestionsContext";
import QuizBody from "./QuizBody";

function Quiz() {
  const { questions, isLoading } = useQuestionContext();
  const nextIndex = questions.findIndex((item) => !item.isAnswered);
  const isLastQuestion = nextIndex === -1 && !isLoading;

  return (
    <div className="container">
      <div className={styles.root}>
        {isLastQuestion ? (
          <Congrats />
        ) : (
          <>
            <QuizHeader />
            <QuizBody />
          </>
        )}
        <div className={styles.questions}></div>
      </div>
    </div>
  );
}

export default Quiz;
