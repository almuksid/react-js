import React, {useState} from 'react'

const ReactTest = () => {
    const [todoTitle, setTodoTitle] = useState("")
    const [todoList, setTodoList] = useState([
        {id: 1, title: "todo1", isCompleted: true},
        {id: 2, title: "todo2", isCompleted: false},
        {id: 3, title: "todo3", isCompleted: true}, 
    ])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")

    const [editMode, setEditMode] = useState(false)
    const [editableTodo, setEditableTodo] = useState(null)


    const submitHandler = (e) => {
        e.preventDefault()
        if(!todoTitle.trim()) return alert("Please enter a valid todo title")
        editMode === true? updateTitleHandler() : titleHandler()
    }
    const titleHandler = () => {
        const newTodo = {
            id: Date.now(),
            title: todoTitle,
            isCompleted: false
        }
        setTodoList([...todoList, newTodo])
        setTodoTitle("")
    }
    const removeHandler = (todoId) => {
        const newTodo = todoList.filter(todo => todo.id !== todoId)
        setTodoList(newTodo)
    }
    const editHandler = (todo) => {
        setEditMode(true)
        setEditableTodo(todo)
        setTodoTitle(todo.title)

    }
    const updateTitleHandler = () => {
        const newTodo = todoList.map(todo => {
            if(todo.id === editableTodo.id){
                return {...todo, title: todoTitle}
            }
            return{...todo}
        })
        setTodoList(newTodo)
        setEditMode(false)
        setEditableTodo(null)
        setTodoTitle("")
    }
    const checkHandler = (todoId) => {
        const newTodo = todoList.map(todo => {
            if(todo.id === todoId){
                return {...todo, isCompleted: !todo.isCompleted}
            }
            return {...todo}
        })
        setTodoList(newTodo)
    }
    const todoFilter = todoList
        .filter(todo => {
            if(filter === "all") return true
            if(filter === "active") return todo.isCompleted
            if(filter === "completed") return !todo.isCompleted
        })
        .filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
        <h2>Todo App</h2>
        <button type="submit" onClick={() => setFilter("all")}>All</button>
        <button type="submit" onClick={() => setFilter("active")}>Active</button>
        <button type="submit" onClick={() => setFilter("completed")}>Completed</button>

        <form action="" onChange={(event) => setSearch(event.target.value)}>
            <input type="search" />
            <button type="submit">Search</button>
        </form>
        <form action="" onSubmit={submitHandler}>
            <input type="text" value={todoTitle} onChange={e => setTodoTitle(e.target.value)} />
            <button type="submit">{editMode === true? "Update Todo" : "Create "}</button>
        </form>
        <ul>
            {todoFilter
                .map((todo) => <li key={todo.id}>
                    <input type="checkbox" onClick={() => checkHandler(todo.id)} checked={todo.isCompleted}/>
                    <span>{todo.title}</span>
                    <button type='submit' onClick={() => removeHandler(todo.id)}>Rem Todo</button>
                    <button type='submit' onClick={() => editHandler(todo)}>Edit Todo</button>
                    
                </li>)
            }
        </ul>
    </div>
  )
}

export default ReactTest
