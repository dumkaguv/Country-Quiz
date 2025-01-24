import styles from "./QuestionList.module.scss";
import getQuestions from "@/api/getQuestions";

function QuestionCard() {
  const data = getQuestions()

  return (
    <div className={styles.root}>
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
