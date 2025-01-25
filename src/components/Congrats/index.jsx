import styles from "./Congrats.module.scss";
import imageCongrats from "@/assets/icons/congrats.png";
import { useQuestionContext } from "@/contexts/QuestionsContext";

function Congrats() {
  const { correctAnswers, QUESTION_COUNT } = useQuestionContext();

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <img src={imageCongrats} alt="" width={500} height={150} />
        <div className={styles.info}>
          <p className={styles.title}>Congrats! You completed the quiz.</p>
          <p className={styles.answers}>
            You answer {correctAnswers}/{QUESTION_COUNT} correctly
          </p>
        </div>
        <a href="./" className={styles.again}>Play Again</a>
      </div>
    </div>
  );
}

export default Congrats;
