import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoTitle, setTodoTitle] = useState("")
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'todo1', isCompleted: false },
    { id: 2, title: 'todo2', isCompleted: true },
    { id: 3, title: 'todo3', isCompleted: true },
  ])

  const [filter, setFilter] = useState("all")


  const filterHandler = (todo) => {
    if (filter === 'all') return true
    if (filter === 'active') return !todo.isCompleted
    if (filter === 'completed') return todo.isCompleted
  }

  const [search, setSearch] = useState("")

  // const searchHandler = () => todoList.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))

  const [editMode, setEditMode] = useState(false)
  const [editableTodo, setEditableTodo] = useState(null)

  const updateTodo = () => {
    const newTodo = todoList.map((todo) => {
      if (todo.id === editableTodo.id) {
        return {...todo, title: todoTitle}
      }
      return {...todo}
    })
    setTodoList(newTodo)
    setEditMode(false)
    setEditableTodo(null)
  }

  return (
    <TodoContext.Provider value={{updateTodo, editMode, setEditMode, editableTodo, setEditableTodo, search, setSearch, filterHandler, filter, setFilter, todoTitle, setTodoTitle, todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  )
}