import React from 'react'
import { useState } from 'react'
const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increaseHandler = (value) => {
        setCounter(counter+value)
    }
    const decreaseHandler = (value) => {
        setCounter(counter - value)
    }
  return (
    <div>
        <h2>The value of counter is {counter}</h2>
        <button onClick={() => {increaseHandler(1)}}>Increase By 1</button> 
        <button onClick={() => {increaseHandler(5)}}>Increase By 5</button>
        <button onClick={() => {decreaseHandler(1)}}>Decrease By 1</button>
        <button onClick={() => {decreaseHandler(5)}}>Decrease By 5</button>

    </div>
  )
}

export default Counter
