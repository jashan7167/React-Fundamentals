import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button' 
import Profilepicture from './Profilepicture';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Button></Button>
    <br />
    <Profilepicture></Profilepicture>
    </>
  )
}

export default App
