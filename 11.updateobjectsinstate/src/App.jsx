//React hook = Special Function that allows functional components to use React features without writing class components (React v16.8)
// (useState, useEffect , useContext , useReducer , useCallback and more..)

//useState() = A react hook that allows the creation of a stateful variable and a setter function to update its value in the Virtual Dom

import "./App.css";
import "./Counter.css";
import MyComponent from './MyComponent'
import Counter from "./Counter";
function App() {
  return (
    <>
      <MyComponent></MyComponent>
    </>
  );
}

export default App;
