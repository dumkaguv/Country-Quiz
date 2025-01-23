import styles from "./QuizHeader.module.scss"
import iconTrophy from "@/assets/icons/trophy.png";

function QuizHeader() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Country Quiz</h1>
      <div className={styles.currentPoints}>
        <img
          className={styles.currentPointsIcon}
          src={iconTrophy}
          width={32}
          height={32}
        />
        <span className={styles.currentPointsValue}>0/10 Points</span>
      </div>
    </div>
  );
}

export default QuizHeader;
