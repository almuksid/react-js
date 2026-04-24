import React from 'react'
import { useState } from 'react'

const NewTodoList = () => {
  const [todoTitle, setTodoTitle] = useState("")
  const [todoList, setTodoList] = useState([
    {id:1, title:"todo1", isCompleted:true},
    {id:2, title:"todo2", isCompleted:false},
    {id:3, title:"todo3", isCompleted:true},
  ])

  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  
  const [editMode, setEditMode] = useState(false)
  const [editableTodo, setEditableTodo] = useState(null)

  const submitHandler = (event) => {
    event.preventDefault()
    if (!todoTitle.trim()) return alert("Enter Correct Value")
    editMode === true ? updateTitleHandler() : createTodo()
  }   
  const createTodo = () => {
    const newTodo = ({
      id: Date.now() + "",
      title: todoTitle,
      isCompleted:false
    })
    setTodoList([...todoList, newTodo])
  }
  const removeHandler = (todoId) => {
    const newRemTodo = todoList.filter(todo => todo.id !== todoId)
    setTodoList(newRemTodo)
  }
  
  const checkedHandler = (todoId) => {
    const newTodo = todoList.map(todo => {
      if (todo.id === todoId){
        return {...todo, isCompleted: !todo.isCompleted}
      }
      return {...todo}
    })
    setTodoList(newTodo)
  }
  const editHandler = (todo) => {
		setEditMode(true);
		setEditableTodo(todo);
		setTodoTitle(todo.title);
	};

  const updateTitleHandler = () => {
    const newTodo = todoList.map(todo => {
      if (todo.id === editableTodo.id){
        return {...todo, title: todoTitle}
      }
      return {...todo}
    })
    setTodoList(newTodo)
    setEditMode(false)
    setTodoTitle("")
  }

  const filterHandler = todoList
  .filter(todo => {
    if (filter === "all") return true
    if (filter === "active") return !todo.isCompleted
    if (filter === "completed") return todo.isCompleted
  })
  .filter(todo => todo.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div>
      <div className="mb-4 bgCol p-3">
      <h2 style={{color:'white', textAlign:'center', marginBottom:'30px'}}>My Todo App</h2>
      <button class="btn btn-success filterBtn" type="submit" onClick={() => setFilter("all")}>All</button>
      <button class="btn btn-success filterBtn" type="submit" onClick={() => setFilter("active")}>Active</button>
      <button class="btn btn-success filterBtn" type="submit" onClick={() => setFilter("completed")}>Completed</button><br /><br />
      <form class="input-group mb-3" onSubmit={submitHandler}>
        <input class="form-control" type="text" value={todoTitle} onChange={(event) => setTodoTitle(event.target.value)}/>
        <button style={{float:'right'}} class="btn btn-success"  type="submit">{editMode === true ? "Update Todo" : "Create Todo"}</button>
      </form>
      <form class="input-group mb-3">
        <input class="form-control" type="search" onChange={(e) => setSearch(e.target.value)}/>
        <button style={{float:'right'}} class="btn btn-success"  type="button">Search Todo</button>
      </form>
      <ul class="list-group">
        {filterHandler
          // .filter(todo => todo.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .map(todo => <li class="list-group-item" key={todo.id}>
            <input type="checkbox" checked={todo.isCompleted} onClick={() => checkedHandler(todo.id)} />
            <span> {todo.title} </span>
            <button style={{float:'right'}} class="btn btn-danger"  type="submit" onClick={() => removeHandler(todo.id)}>Remove Todo</button>

            <button style={{float:'right', marginRight:'10px'}} class="btn btn-warning"  type="submit" onClick={() => editHandler(todo)}>Edit</button>
          </li>)
        }
      </ul>

      </div>
    </div>
  )
}

export default NewTodoList
