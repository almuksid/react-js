import React from 'react'
import { useState } from 'react'
const TodoApp = () => {
  const [todoTitle, setTodoTitle] = useState("")
  const [todoList, setTodoList] = useState([
    {id:1, title:"todo1", isCompleted:true},
    {id:2, title:"todo2", isCompleted:false},
  ])
  const submitHandler = (event) => {
    event.preventDefault()
    if (!todoTitle.trim()) return alert(`Submit Valid Text`)
    const newTodo = {
      id : Date.now() + "",
      title: todoTitle,
      isCompleted:false 
    }
    setTodoList([...todoList, newTodo])
  } 

  const removeHandler = (todoId) => {
    const removeTodo = todoList.filter(todo => todo.id !== todoId)
    setTodoList(removeTodo)
  }

  const checkedHandler = (todoId) => {
    const newTodo = todoList.map(todo => {
      if (todo.id === todoId){
        return ({...todo, isCompleted: !todo.isCompleted})
      }
      return {...todo}
    })
    setTodoList(newTodo)
  }
  return (
    <div>
      <h2>Todo App</h2>

      <form action="" onSubmit={submitHandler}>
        <input type="text" value={todoTitle} onChange={event => setTodoTitle(event.target.value)} />
        <button type="submit">Create Todo</button>
      </form>

      <ul>
        {todoList.map(todo => <li key={todo.id}>
          <input type="checkbox"  checked={todo.isCompleted} onChange={ () => checkedHandler(todo.id)}/>
          <span>{todo.title}</span>
          <button type="submit" onClick={() => removeHandler(todo.id)}>Remove Todo</button>
        </li>)}
      </ul>
    </div>
  )
}

export default TodoApp
