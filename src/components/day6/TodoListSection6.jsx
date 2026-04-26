import React from 'react'
import TodoList6 from './TodoList6'
import TodoFilter6 from './TodoFilter6'

const TodoListSection6 = (props) => {
  return (
    <div className="d-flex flex-column gap-3 w-100 align-items-center">
      <TodoFilter6 {...props} />
      <TodoList6 {...props} />
    </div>
  )
}

export default TodoListSection6
