import React,{useContext} from 'react'
import { UserContext } from './ComponentA'

function ComponentD() {
  const value = useContext(UserContext)
  return (
    <div className='box'>ComponentD
    <h2>{`Bye ${value}`}</h2></div>
  )
}

export default ComponentD