import styles from "./QuizBody.module.scss";
import Question from "../../Question";

function QuizBody() {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <Question />
      </div>
    </div>
  );
}

export default QuizBody;
