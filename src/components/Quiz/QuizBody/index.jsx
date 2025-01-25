import styles from "./QuizBody.module.scss";
import Question from "../../Question";
import Skeleton from "../../Question/QuestionList/Skeleton";
import { useQuestionContext } from "@/contexts/QuestionsContext";

function QuizBody() {
  const { isLoading } = useQuestionContext();

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {isLoading ? <Skeleton /> : <Question />}
      </div>
    </div>
  );
}

export default QuizBody;
