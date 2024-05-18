import { useQuestion } from "../context/QuestionProvider";

function Welcome() {
  const { dispatch } = useQuestion();
  return (
    <>
      <div className="welcome-image flex justify-center items-center flex-col">
        <h1 className="text-7xl">Quizzler</h1>
        <p className="text-xl cursor-pointer md:ml-[21rem] mt-4 animate-bounce" onClick={() => dispatch({ type: 'start' })}>Let's start the quiz &rarr;</p>
      </div>
    </>
  )
}

export default Welcome