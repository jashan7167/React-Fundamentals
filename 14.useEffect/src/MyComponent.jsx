//useEffect() = React Hook that tells react do some code when(pick one):
// this component re-renders
// this component mounts
// the state of a value

//use Effect (function , [dependencies])

//1. useEffect(()=>{}) runs after every re-render
//2. useEffect(()=> {},[]) //runs only on mount
//2. useEffect(()=> {},[value]) runs on mount + when value changes

//Uses
// # Event listeners
// #2 Dom manipulation
// #3 Subscriptions(real time update)
// #4 Fetching fata from an API
// #5 Clean up when a component unmounts

import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("green");
  //every time the p element re-render we will change the title adding the empty array to the depenedencies we will only execute it only once only when it mounts
  //adding a variable to the dependencies says if our count variable updates perform our side code
  //having no dependencies will execute the code for any reason the component rerenders
  useEffect(() => {
    if (count > 10) {
      document.title = `STOP INCREMENTING`;
    } else {
      document.title = `Count : ${count} ${color}`;
    }
    return () =>
    {
      //some cleanup code
    }
  }, [color, count]);

  function addCount() {
    setCount((c) => c + 1);
  }
  function subtractCount() {
    setCount((c) => c - 1);
  }
  function changeColor() {
    setColor((c) => (c === "green" ? "red" : "green"));
  }

  return (
    <>
      <p style={{ color: color }}>Count:{count}</p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default MyComponent;
