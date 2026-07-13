import React, { useContext } from 'react'
import { TodoContext } from '../../../hooks/day10/todo/AppDay10'

const TodoSearch10 = () => {
  const {setSearch} = useContext(TodoContext)
  
  return (
    <div>
      <input type="search" onChange={(e) => setSearch(e.target.value)} />
      <button type="submit">Search</button>
    </div>
  )
}

export default TodoSearch10
