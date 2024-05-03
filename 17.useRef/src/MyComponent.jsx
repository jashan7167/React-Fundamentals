import React, { useState, useEffect, useRef } from "react";

function MyComponent() {
  // let [number,setNumber] = useState(0);

  //what ref does is it will trigger a rerender of a component when its current value changes
  // this is helpful when we dont want to rerender the component everytime
  const inputRef = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  //i want whenever the no changes the component rerenders
  // if you are in strict mode the component renders twice
  function handleClick() {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
    console.log(inputRef.current);
  }
  function handleClick2() {
    inputRef2.current.focus();
    inputRef.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "red";
    inputRef3.current.style.backgroundColor = "";
    console.log(inputRef2.current);
  }
  function handleClick3() {
    inputRef3.current.focus();
    inputRef.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "red";
    console.log(inputRef3.current);
  }

  //whenever the state variable number changes the component gets reredenred which changes the view of the component
  useEffect(() => {
    console.log("Component Rendered");
    console.log(inputRef);
  }, []);

  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick2}>Click me!</button>
      <input type="text" ref={inputRef2} />
      <button onClick={handleClick3}>Click me!</button>
      <input type="text" ref={inputRef3} />
    </div>
  );
}

export default MyComponent;
