import styles from "./QuestionPagination.module.scss";
import { useQuestionContext } from "@/contexts/QuestionsContext";

function QuestionPagination() {
  const { questions, currentQuestionIndex, setCurrentQuestionIndex } =
    useQuestionContext();

  return (
    <ul className={styles.questionsList}>
      {questions.map((question, index) => (
        <li
          key={index}
          onClick={() => setCurrentQuestionIndex(index)}
          className={`${styles.questionsLabel} ${
            question.isAnswered && styles.answered
          }
          ${currentQuestionIndex === index && styles.current}`}
        >
          {index + 1}
        </li>
      ))}
    </ul>
  );
}

export default QuestionPagination;
