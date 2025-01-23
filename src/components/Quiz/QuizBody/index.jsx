import styles from "./QuizBody.module.scss";

function QuizBody() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <ul className={styles.questionsList}>
          <li className={`${styles.questionsLabel} ${styles.answered}`}>1</li>
          <li className={styles.questionsLabel}>1</li>
        </ul>
        <div className={styles.questionTitle}>Which country?</div>

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
    </div>
  );
}

export default QuizBody;
