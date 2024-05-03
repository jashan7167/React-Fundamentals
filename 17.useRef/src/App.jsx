import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyComponent from './MyComponent'
import { useEffect } from 'react'
// useState() = rerenders the component when the state value changes

//useRef() = "use Reference" Does not cause re-renders when its value changes.
// when you want a "component" to remember some information
// but you dont want that information to trigger new renders

// use Cases
// 1. Accessing/Interacting with Dom elements
// 2. Handling Focus,Animations and Transitions
// 3. Managing Timers and Intervals



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <MyComponent></MyComponent>
    </>
  )
}

export default App
