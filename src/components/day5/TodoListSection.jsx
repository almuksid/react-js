import React, {useState} from 'react'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'

const TodoListSection = (props) => {
  const [filter, setFilter] = useState("all")
 
  const filterHandler = props.todoList
  .filter(todo => {
    if (filter === "all") return true
    if (filter === "active") return !todo.isCompleted
    if (filter === "completed") return todo.isCompleted
  })
  .filter(todo => todo.title.toLocaleLowerCase().includes(props.search.toLocaleLowerCase()))

  // .filter((todo) => todo.title.toLowercase().include(props.search.toLowerCase()))

  return (
    <div>
      <TodoFilter {...props} filter={filter} setFilter={setFilter}  />
      <TodoList {...props} filter={filter} setFilter={setFilter} filterHandler={filterHandler}/>
      
      {/* TodoList, TodoFilter */}
    </div>
  )
}

export default TodoListSection
