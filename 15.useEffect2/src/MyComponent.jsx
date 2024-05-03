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
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  //problem with this is that every time the component rerenders we need to add one event listener but this adds one everytime it rerenders
  // window.addEventListener("resize",handleResize)

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listener added");

    return ()=> {
      //some cleanup code when the component unmounts
      window.removeEventListener("resize",handleResize);
      console.log("event listener removed")
    }
  }, []);

  useEffect(()=>{
    document.title = `Size = ${width} x ${height}`;
  },[width,height])

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }
  return (
    <>
      <p>Window Width:{width}px</p>
      <p>Window Height:{height}px</p>
    </>
  );
}

export default MyComponent;
