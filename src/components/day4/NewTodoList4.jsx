import React, { useState } from 'react'

const NewTodoList4 = () => {
    const [todoTitle, setTodoTitle] = useState("")
    const [todoList, setTodoList] = useState([
        {id:1, title: 'todo1', isCompleted: true},
        {id:2, title: 'todo2', isCompleted: false},
        {id:3, title: 'todo3', isCompleted: true}
    ])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState('all')
    const [edit, setEdit] = useState("")

    const editHandler = (todo) => {

    }
    const submitHandler = ((event) => {
        event.preventDefault()
        if (todoTitle.trim() === "") return alert("Enter currect Item")
        let newTodo = {
            id: Date.now() + 1,
            title: todoTitle,
            isCompleted: false
        }
        setTodoList([...todoList, newTodo])
        setTodoTitle('')
    })
    const removeHandler = (todoId) => {
        const newTodo = todoList.filter(todo => todo.id !== todoId)
        setTodoList(newTodo)
    }

    const checkHandler = (todoId) => {
        const newTodo = todoList.map(todo => {
            if (todo.id === todoId) {
                return {...todo, isCompleted: !todo.isCompleted}
            }
            return {...todo}
        })
        setTodoList(newTodo)
    }
    const filterHandler = todoList
        .filter(todo => {
            if(filter === "all") return true
            if(filter === "active") return !todo.isCompleted
            if(filter === "completed") return todo.isCompleted
    })

  return (
    <div>
      <h2>Todo App</h2>
      <button type="submit" onClick={() => setFilter("all")}>All</button>
      <button type="submit" onClick={() => setFilter("active")}>Active</button>
      <button type="submit" onClick={() => setFilter("completed")}>Completed</button>

      <form action="" onSubmit={submitHandler}>
        <input type="text" value={todoTitle} onChange={(event) => setTodoTitle(event.target.value)}/>
        <button>Create Todo</button>
      </form>
      
      <form action="">
        <input type="search" onChange={(e) => setSearch(e.target.value)}/>
      </form>
      
      <ul>
        {filterHandler
            .filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))
            .map((todo) => <li key={todo.id}>
                <input onClick={() => checkHandler(todo.id)} type="checkbox" checked={todo.isCompleted}/>
                <span>{todo.title}</span>
                <button onClick={() => removeHandler(todo.id)} type="button" >Remove Todo</button>
                <button onClick={() => editHandler(todo)} type="button" >Edit Todo</button>
            </li>)
        }
      </ul>
    </div>
  )
}

export default NewTodoList4
