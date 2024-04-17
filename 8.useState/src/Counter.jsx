import React,{useState} from 'react'
function Counter()
{ 
  const [count,setCount] = useState(0)

  const increment = () =>
  {
    setCount(count+1);
  }
  const decrement = () =>
  {
    setCount(count-1);
  }
  const reset = () =>
  {
    setCount(0);
  }
  return(
<>
<div className="counter-container">
  <div className="counter">
  <p id="counter">{count}</p>
  </div>
  {/* by adding this div of buttons we merged the button in that div element such that it is considered as one element by the flex box*/}
  <div className='buttons'> 
  <button onClick={increment}>Increment</button>
  <button onClick={decrement}>Decrement</button>
  <button onClick={reset}>Reset</button>
  </div>
</div>
</>
  )
  
}
export default Counter;