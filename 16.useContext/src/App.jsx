
import { useState,createContext} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ComponentA from './ComponentA'

// useContext() = React hook that allows you to share values between multiple levels of components without passing pros through each level

//Provider Component
// 1. import {createContext} from react
// 2. export cont Mycontext = createContext();
// 3. <MyContext.Provider value = {value}>
// <Child />
// </MyContext.provider

// Consumer Components
// 1. import React,{useContext} from 'react'
// import {MyContext} from './ComponentA'
// 2. const value = useContext(MyContext)


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <ComponentA></ComponentA>
    </>
  )
}

export default App
