import React from 'react'
import { useState } from 'react'

import './Todo.css'
const TodoApp = () => {
  const [filter, setFilter] = useState("all")
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
      <div className="mb-4 bgCol p-3">
        <h2 style={{color:'white', textAlign:'center', marginBottom:'30px'}}>Todo App</h2>

        <button class="btn btn-success filterBtn" type="submit" onClick={() => setFilter("all")}>All</button>
        <button class="btn btn-secondary filterBtn" type="submit" onClick={() => setFilter("active")}>Active</button>
        <button class="btn btn-secondary filterBtn" type="submit" onClick={() => setFilter("completed")}>Completed</button><br /><br />


        <form class="input-group mb-3" action="" onSubmit={submitHandler}>
          <input class="form-control" type="text" value={todoTitle} onChange={event => setTodoTitle(event.target.value)} />
          <button style={{float:'right'}} class="btn btn-success" type="submit">Create Todo</button>
        </form><br />

        <ul class="list-group">
          {todoList
          .filter(todo => {
            if (filter === "all") return true
            if (filter === "active") return !todo.isCompleted
            if (filter === "completed") return todo.isCompleted
          })
          .map(todo => <li class="list-group-item" key={todo.id}>
            <input type="checkbox"  checked={todo.isCompleted} onChange={ () => checkedHandler(todo.id)}/>
            <span>{todo.title}</span>
            <button style={{float:'right'}} class="btn btn-danger" type="submit" onClick={() => removeHandler(todo.id)}>Remove Todo</button>
          </li>)}
        </ul>
      </div>
    </div>
  )
}

export default TodoApp
