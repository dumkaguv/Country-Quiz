import { useState, useEffect } from "react";
import getShuffledArray from "@/utils/shuffle";

function useQuestions(fetchQuestions, questionCount = 10, answersPerQuestion = 4) {
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);

        const data = await fetchQuestions();
        const processedData = getProcessedData(getShuffledArray(data));
        const combinedData = getQuestionsWithAnswers(processedData, data);

        setQuestions(combinedData);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  function getQuestionsWithAnswers(processedData, initialData) {
    const shuffledData = getShuffledArray(initialData);
    const n = shuffledData.length;

    return processedData.map((item) => {
      const options = [item.name];
      let i = 0;

      while (i < answersPerQuestion - 1) {
        const randomIndex = Math.floor(Math.random() * n);
        const randomAnswer = shuffledData[randomIndex]?.name?.common;

        if (randomAnswer && !options.includes(randomAnswer)) {
          options.push(randomAnswer);
          ++i;
        }
      }

      return {
        ...item,
        options: getShuffledArray(options),
        correctAnswer: item.name,
      };
    });
  }

  function getProcessedData(initialData) {
    return initialData.slice(0, questionCount).map((item) => ({
      name: item.name.common,
      flagImage: item.flags.svg,
      flagAlt: item.flags.alt ?? item.name.common,
    }));
  }

  return {
    questions,
    setQuestions,
    isLoading,
    currentQuestionIndex,
    setCurrentQuestionIndex,
    correctAnswers,
    setCorrectAnswers,
  };
}

export default useQuestions;
