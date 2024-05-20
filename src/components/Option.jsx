import { useQuestion } from "../context/QuestionProvider";
import Countdown from "./Countdown";

function Option() {
  const {
    state: { questions, answer, index, points },
    dispatch,
  } = useQuestion();
  const totalPoints = questions.reduce((acc, cur) => acc + cur.points, 0);
  const hasAnswered = answer !== null;
  const isLastQuestion = index === questions.length - 1;
  const question = questions[index];
  const labels = {
    0: "A",
    1: "B",
    2: "C",
    3: "D",
  };
  return (
    <div className="w-[90%] flex flex-col justify-center items-center">
      <div className="flex flex-col md:items-center gap-3 w-[98%]">
        {question.options.map((option, index) => (
          <div
            key={option}
            className={`${
              answer ?? "bg-white"
            } rounded-md shadow-md md:w-[35rem] p-5 cursor-pointer ${
              hasAnswered
                ? index === question.correctOption
                  ? "bg-[#2CBF8B]"
                  : "bg-[#FE909D]"
                : ""
            } transition hover:scale-110`}
            onClick={() => dispatch({ type: "answer", payload: index })}
          >
            <div className="flex">
              <div className="mr-6 bg-[#FFECDB] text-[#FF475D] rounded-full w-8 h-8 flex justify-center items-center text-xl">
                {labels[index]}
              </div>
              <p className="md:text-xl">{option}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-[98%] md:w-[35rem] flex justify-between items-center">
        <div className="md:text-xl">
          Points: {points}/{totalPoints}
        </div>
        {isLastQuestion ? (
          <button
            disabled={!hasAnswered}
            onClick={() => dispatch({ type: "finish" })}
            className="bg-[#FFB0BA] text-[#FF475D] py-2 px-6 mt-3 rounded text-xl cursor-pointer hover:text-[#FFB0BA] hover:bg-[#FF475D] transition"
          >
            Finish
          </button>
        ) : (
          <button
            disabled={!hasAnswered}
            onClick={() => dispatch({ type: "next" })}
            className="bg-[#FFB0BA] text-[#FF475D] py-2 px-6 mt-3 rounded text-xl cursor-pointer hover:text-[#FFB0BA] hover:bg-[#FF475D] transition"
          >
            Next
          </button>
        )}

        <Countdown />
      </div>
    </div>
  );
}

export default Option;
