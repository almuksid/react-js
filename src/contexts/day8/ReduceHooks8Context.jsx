import React from 'react'
import { useReducer } from 'react'

  const ourReducer = (state, action) => {
    // console.log(action, "action")
    // console.log(state, "state")
    // if(action === "Increase_by_1"){
    //   return state + 1
    // }
    // else{
    //   return state
    // }
    switch (action.type) {
      case "increment":
        return state + action.payload
        break;

      case "decrement":
        return state - action.payload
        break;
    
      default:
        return state
        break;
    }

  }

const ReduceHooks8Context = () => {
  return (
    <div>
      
    </div>
  )
}

export default ReduceHooks8Context
