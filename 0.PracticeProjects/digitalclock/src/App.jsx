import { useState } from "react";
import "./App.css";
import Digitalclock from "./Digitalclock";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Digitalclock></Digitalclock>
    </>
  );
}

export default App;
