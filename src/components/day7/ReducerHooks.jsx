import React from 'react'
import { useReducer } from 'react'
import Reducers from './Reducers'
// useReducer ekti function 
// ourReducer -> reducer can be decleared by outsite of components
const ourReducer = (state, action) => {

}

const ReducerHooks = () => {
    const [counter, dispatch] = useReducer(ourReducer, 10)
  return (
    <div>
      <Reducers/>
    </div>
  )
}

export default ReducerHooks
