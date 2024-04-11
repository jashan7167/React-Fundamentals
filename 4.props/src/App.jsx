import Students from "./Students.jsx";

function App() {
  return (
    <>
      <Students name="Spongebob" age={30} isStudent={true} />
      <Students name="Sandy" age={32} isStudent={false} />
      <Students name="Patrick" age={40} isStudent={false} />
      <Students />
    </>
  );
}

export default App;
