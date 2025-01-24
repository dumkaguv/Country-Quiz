import styles from "./QuestionList.module.scss";
import useQuestions from "@/hooks/useQuestions";
import getQuestions from "@/api/getQuestions";


function QuestionCard() {
  const { questions, processedData } = useQuestions(getQuestions)

  console.log("processedData", processedData)

  return (
    <div className={styles.root}>
      <div className={styles.questionTitle}>Which country does this flag belong to?</div>
      <ul className={styles.questionList}>
        <li className={styles.questionItem}>
          <label className={styles.questionAnswer} htmlFor="Sweden">
            <span>Sweden</span>
          </label>
          <input className="visually-hidden" type="radio" id="Sweden" />
        </li>
        <li className={styles.questionItem}>
          <label className={styles.questionAnswer} htmlFor="Sweden">
            <span>Sweden</span>
          </label>
          <input className="visually-hidden" type="radio" id="Sweden" />
        </li>
      </ul>
    </div>
  );
}

export default QuestionCard;
