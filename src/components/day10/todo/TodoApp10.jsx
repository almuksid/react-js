import React from 'react'
import { TodoProvider } from '../../../hooks/day10/todo/AppDay10'
import TodoListSection10 from './TodoListSection10'
import TodoForm10 from './TodoForm10'
import TodoSearch10 from './TodoSearch10'
const TodoApp10 = () => {
  // console.log(TodoProvider);
  
  return (
    <div style={{textAlign:'center'}}>
      <TodoProvider>
        <h2>Todo App</h2>
        <TodoForm10/>
        <TodoSearch10/>
        <TodoListSection10/>
      </TodoProvider>
    </div>
  )
}

export default TodoApp10
