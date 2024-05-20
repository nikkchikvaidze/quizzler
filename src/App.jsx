import { useQuestion } from "./context/QuestionProvider";
import Welcome from "./ui/Welcome";
import Main from "./ui/Main";
import Question from "./components/Question";
import Option from "./components/Option";
import Finish from "./ui/Finish";

function App() {
  const {
    state: { status },
  } = useQuestion();

  return (
    <div>
      {status === "init" && <Welcome />}
      {status === "active" && (
        <Main>
          <Question />
          <Option />
        </Main>
      )}
      {(status === "finish" || status === "timeout") && <Finish />}
    </div>
  );
}

export default App;
