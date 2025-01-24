import styles from "./QuestionPagination.module.scss";

function QuestionPagination() {
  return (
    <>
      <ul className={styles.questionsList}>
        <li className={`${styles.questionsLabel} ${styles.answered}`}>1</li>
        <li className={styles.questionsLabel}>1</li>
      </ul>
      <div className={styles.questionTitle}>Which country?</div>
    </>
  );
}

export default QuestionPagination;
