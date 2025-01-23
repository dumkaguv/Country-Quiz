import React from "react";

import styles from "./Quiz.module.scss";
import QuizHeader from "./QuizHeader";
import QuizBody from "./QuizBody"

function Quiz() {
  return (
    <div className="container">
      <div className={styles.root}>
        <QuizHeader />
        <QuizBody />
        <div className={styles.questions}></div>
      </div>
    </div>
  );
}

export default Quiz;
