import { useState } from "react";

import styles from "./QuestionList.module.scss";
import { useQuestionContext } from "@/contexts/QuestionsContext";
import iconIncorrectAnswer from "@/assets/icons/close_round_fill.svg";
import iconCorrectAnswer from "@/assets/icons/check_round_fill.svg";

function QuestionList() {
  const {
    questions,
    setQuestions,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    setCorrectAnswers,
  } = useQuestionContext();
  const [isImageFlagLoading, setIsImageFlagLoading] = useState(true);

  const { flagImage, alt, selectedAnswerIndex, correctAnswer, isAnswered } =
    questions[currentQuestionIndex];

  function onAnswerClick(answer, selectedIndex) {
    if (correctAnswer === answer) {
      setCorrectAnswers((prev) => prev + 1);
    }

    setQuestions((prevQuestions) => {
      const updatedQuestions = prevQuestions.map((question, index) =>
        index === currentQuestionIndex
          ? { ...question, isAnswered: true, selectedAnswerIndex: selectedIndex }
          : question
      );

      setTimeout(() => {
        const nextIndex = updatedQuestions.findIndex((item) => !item.isAnswered);
        setCurrentQuestionIndex(
          nextIndex !== -1 ? nextIndex : updatedQuestions.length
        );
      }, 1500);

      return updatedQuestions;
    });
  }

  return (
    <div className={styles.root}>
      <div className={styles.questionTitle}>
        Which country does this flag
        <img
          className={isImageFlagLoading ? styles.skeleton : styles.flag}
          onLoad={() => setIsImageFlagLoading(false)}
          src={flagImage}
          width={32}
          height={32}
          alt={alt}
        />
        belong to?
      </div>
      <ul className={styles.questionList}>
        {questions[currentQuestionIndex].options.map((option, index) => {
          const isCorrectAnswer = option === correctAnswer;
          const answers = {
            correct: "Correct Answer",
            incorrect: "Wrong Answer",
          };
          const stateClasses = {
            isAnswered: isAnswered && styles.answered,
            correctAnswer: isAnswered && isCorrectAnswer && styles.correctAnswer,
            selectedByUser:
              selectedAnswerIndex === index && isAnswered && styles.selected,
          };

          return (
            <li key={`${index}-${option}`} className={styles.questionItem}>
              <label
                onClick={() => onAnswerClick(option, index)}
                className={`${styles.questionAnswer} 
                ${stateClasses.isAnswered} 
                ${stateClasses.correctAnswer}
                ${stateClasses.selectedByUser}`}
                htmlFor={option}
              >
                <span className={styles.answerOption}>
                  {isAnswered ? (
                    <>
                      {option}
                      <img
                        src={
                          isCorrectAnswer ? iconCorrectAnswer : iconIncorrectAnswer
                        }
                        alt={isCorrectAnswer ? answers.correct : answers.incorrect}
                        className={styles.answerIcon}
                      />
                    </>
                  ) : (
                    option
                  )}
                </span>
              </label>
              <input className="visually-hidden" type="radio" id={option} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuestionList;
