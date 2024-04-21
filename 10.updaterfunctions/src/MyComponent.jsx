import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age,setAge] = useState(21);
  const [isEmployed,setisEmployed] = useState(false)
  // const updateName = () =>
  // {
  //   name ="Spongeboo";
  //   console.log(name);
  // } id we do like this on the console it will update but on the virtual dom its still the same
  const updateName = () =>
  {
    
    setName("Jashanjot")
  } 
  const incrementAge = () =>
  {
    
    setAge(age+1);
  } 
  const toggleEmployed = () =>
  {
    
    setisEmployed(!isEmployed); 
  } 
  //whenever a stateful variable is updated it wil trigger a rerender of the virtual dom
  
  return (
    <>
      <div>
        <p>Name:{name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age:{age}</p>
        <button onClick={incrementAge}>Increment age</button>
        <p>isEmployed:{isEmployed?"Yes":"No"}</p>
        <button onClick={toggleEmployed}>toggle status</button>
      </div>
      
    </>
  );
}
export default MyComponent;
