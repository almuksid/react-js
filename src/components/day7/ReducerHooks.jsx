import React from 'react'
import { useReducer } from 'react'
import Reducers from './Reducers'
// useReducer ekti function 
// ourReducer -> reducer can be decleared by outsite of components
const ourReducer = (state, action) => {
 
    // if (action === "increase_counter") {
    //   return state + 1
    // }
    // else if (action === "decrease_counter"){
    //   return state - 1
    // }

    switch (action.type) {
      case "increase_counter":
        return state + action.payload
        break;
        
      case "decrease_counter":
        return state - action.payload
        break

      case "multiply_counter":
        return state * action.payload
        break

      case "divitioin_counter":
        return state / action.payload
        break

      default:
        break;
    }
}

const ReducerHooks = () => {
    const [counter, dispatch] = useReducer(ourReducer, 10)
  return (
    <div>
        <h2>The value of the counter is {counter}</h2>
        <button onClick={() => dispatch({type: "increase_counter", payload: 1})}>Increase By 1</button>
        <button onClick={() => dispatch({type: "increase_counter", payload: 5})}>Increase By 5</button>
        <button onClick={() => dispatch({type: "decrease_counter", payload: 1})}>Decrease By 1</button>
        <button onClick={() => dispatch({type: "multiply_counter", payload: 5})}>Multiply by 5</button>
        <button onClick={() => dispatch({type: "divitioin_counter", payload: 7})}>Devide by 7</button>


      {/* <Reducers/> */}
    </div>
  )
}

export default ReducerHooks
