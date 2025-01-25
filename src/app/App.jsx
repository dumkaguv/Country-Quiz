import Quiz from "../components/Quiz";
import QuestionsProvider from "@/contexts/QuestionsContext";

function App() {
  return (
    <QuestionsProvider>
      <Quiz />
    </QuestionsProvider>
  );
}

export default App;
