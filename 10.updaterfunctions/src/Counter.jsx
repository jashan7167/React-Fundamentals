// updater functions = A function passed as an argument to setState(arrow function)
// allow for safe updates based on the previous state
// used with multiple state updates and asynchronous functions
// good practice to use updater functions

import React, { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    //use the current state tp calculate the next state
    //set functions do not trigger an update
    // React batches together updates for performance reasons
    // next state becomes the current state after an update
    //its like setting 1 three seperate times
    // setCount(count+1);
    // setCount(count+1);
    // setCount(count+1);
    //Update

    //Takes the pending state to calculate the next state.
    // React puts your updater function in a queue (waiting in line)
    // During the next render ,react will call them in the same order
    // the paramter will take the previous state and perform an operation on it
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    //these all updates are the pending updates and are placed in the queue

    //it is a good practice to use the updater functions
  };
  const decrement = () => {
    setCount((c) => c - 1);
    setCount((c) => c - 1);
    setCount((c) => c - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
      <div className="counter-container">
        <div className="counter">
          <p id="counter">{count}</p>
        </div>
        {/* by adding this div of buttons we merged the button in that div element such that it is considered as one element by the flex box*/}
        <div className="buttons">
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </>
  );
}
export default Counter;
