import React, { act } from 'react'

const ReduceHooks8 = () => {
  const [counter, despatch] = useReducer(ourReducer, 10)
  return (
    <div>
      <h2>Our current value is {counter}</h2>
      <button onClick={() => despatch({type: "increment", payload: 1})}>Increase By 1</button>
      <button onClick={() => despatch({type: "increment", payload: 5})}>Increase By 5</button>
      <button onClick={() => despatch({type: "decrement", payload: 5})}>Decrease By 5</button>
    </div>
  )
}

export default ReduceHooks8
