import { useQuestion } from "../context/QuestionProvider";

function Question() {
  const {state: {questions, index}} = useQuestion();
  const {question} = questions[index];
  const totalQuestions = questions.length

  return (
    <div className="flex flex-col justify-center items-center gap-3 md:gap-6">
      <p className="text-3xl">
          Question {index + 1}/{totalQuestions}
        </p>
      <h3 className="text-3xl max-w-[60%] text-center">{question}</h3>
      <div className="border-b-2 border-solid border-black w-[20%] mb-6"></div>
    </div>
  );
}

export default Question;
