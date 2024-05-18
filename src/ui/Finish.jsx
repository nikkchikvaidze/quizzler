import { useQuestion } from '../context/QuestionProvider';

function Finish() {
  const {
    state: { timeout, correctAnswers, questions },
    dispatch,
  } = useQuestion();
  const totalQuestions = questions.length;

  return (
    <div className="results-image flex flex-col justify-center items-center">
      <p className='text-4xl pb-12 text-center'>{timeout ? "Time's out!" : 'Bravo!'} You have scored</p>
      <h1 className='text-9xl pb-10 text-white'>{correctAnswers}/{totalQuestions}</h1>
      <p className='text-4xl text-center cursor-pointer' onClick={() => dispatch({ type: 'restart' })}>Wanna Play Again?</p>
    </div>
  );
}

export default Finish;
