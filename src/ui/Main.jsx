import Countdown from "../components/Countdown";


function Main({ children }) {
  return (
    <div  className="quiz-image flex justify-center items-center flex-col">
      {children}
      <Countdown />
    </div>
  );
}

export default Main;
