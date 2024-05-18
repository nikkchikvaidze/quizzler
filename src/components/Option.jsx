import { useQuestion } from '../context/QuestionProvider';

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
    3: "D"
  }
  return (
    <div className="w-[90%] flex flex-col justify-center items-center">
      <div className='flex flex-col gap-3'>
        {question.options.map((option, index) => (
          <div
            key={option}
            className={`bg-white rounded-md shadow-md w-[35rem] p-5 cursor-pointer ${hasAnswered ? (index === question.correctOption ? 'bg-[#2CBF8B]' : 'bg-[#FE909D]') : ''}`}
            onClick={() => dispatch({ type: 'answer', payload: index })}
          >
            <div className='flex'>
              <div className='mr-6 bg-[#FFECDB] text-[#FF475D] rounded-full w-8 h-8 flex justify-center items-center text-xl'>
              <p >{labels[index]}</p>
              </div>
              <p className='text-xl'>{option}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex-progress mt">

        {isLastQuestion ? (
          <button
            disabled={!hasAnswered}
            onClick={() => dispatch({ type: 'finish' })}
            className={`btn-next ${hasAnswered && 'btn-next-click'}`}
          >
            Finish
          </button>
        ) : (
          <button
            disabled={!hasAnswered}
            onClick={() => dispatch({ type: 'next' })}
            className={`bg-[#FFB0BA] text-[#FF475D] py-2 px-6 mt-3 rounded text-xl cursor-pointer ${hasAnswered && 'btn-next-click'}`}
          >
            Next
          </button>
        )}
      </div>
      <div className="t-left progress">
        Points: {points}/{totalPoints}
      </div>
    </div>
  );
}

export default Option;
