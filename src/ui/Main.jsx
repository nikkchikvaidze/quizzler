function Main({ children }) {
  return (
    <div className="bg-[url('assets/Quiz.jpg')] bg-center bg-no-repeat bg-cover overflow-hidden h-screen flex justify-center items-center flex-col">
      {children}
    </div>
  );
}

export default Main;
