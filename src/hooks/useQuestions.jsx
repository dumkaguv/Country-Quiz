import { useState, useEffect } from "react";
import getShuffledArray from "@/utils/shuffle";

function useQuestions(fetchQuestions, questionCount = 10, answersPerQuestion = 4) {
  const [questions, setQuestions] = useState([]);
  const [processedData, setProcessedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchQuestions();
        console.log("data", data);
        const processed = getProcessedData(data);
        const answers = getAnswersForQuestion(data, processedData);
        console.log("answers", answers);
        setProcessedData(processed);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  function getAnswersForQuestion(initialData, processedData) {
    const shuffledData = getShuffledArray(initialData);
    const n = Object.keys(shuffledData).length;
    console.log(
      "result",
      processedData.map((item) => helper(item))
    );

    return processedData.map((item) => helper(item));

    function helper(item) {
      const answers = { correctAnswer: item.capital };
      let i = 0;

      while (i < answersPerQuestion - 1) {
        const randomIndex = Math.floor(Math.random() * (n + 1));
        const randomAnswer = initialData[randomIndex].capital?.[0];

        if (randomAnswer) {
          answers[`answer${i + 1}`] = randomAnswer;
          ++i;
        }
      }

      return answers;
    }
  }

  function getProcessedData(initialData) {
    const processedData = [];

    for (let i = 0; i < questionCount; ++i) {
      const obj = {
        capital: initialData[i].capital[0],
        flagImage: initialData[i].flags.svg,
        flagAlt: initialData[i].flags.alt || initialData[i].capital[0],
      };
      processedData.push(obj);
    }

    return processedData;
  }

  return { questions, processedData };
}

export default useQuestions;
