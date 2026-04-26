import { createContext, useState } from "react"

export const TodoContext = createContext()

const TodoProvider = ({children}) => {
    const [todoTitle, setTodoTitle] = useState("")
    const [todoList, setTodoList] = useState([
        { id: 1, title: "todo1", isCompleted: true },
        { id: 2, title: "todo2", isCompleted: false },
        { id: 3, title: "todo3", isCompleted: true },
    ])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")

    const [editMode, setEditMode] = useState(false)
    const [editableTodo, setEditableTodo] = useState(null)

    const submitHandler = (event) => {
        event.preventDefault()
        if (!todoTitle.trim()) return
        editMode ? updateTitleHandler() : createTodo()
    }

    const createTodo = () => {
        const newTodo = {
            id: Date.now() + "",
            title: todoTitle,
            isCompleted: false,
        }
        setTodoList([...todoList, newTodo])
        setTodoTitle("")
    }

    const removeHandler = (todoId) => {
        setTodoList(todoList.filter(todo => todo.id !== todoId))
    }

    const checkBoxHandler = (todoId) => {
        setTodoList(
            todoList.map(todo =>
                todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        )
    }

    const todoFilter = todoList
        .filter(todo => {
            if (filter === "all") return true
            if (filter === "active") return !todo.isCompleted
            if (filter === "completed") return todo.isCompleted
            return true
        })
        .filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))

    const editHandler = (todo) => {
        setEditMode(true)
        setEditableTodo(todo)
        setTodoTitle(todo.title)
    }

    const updateTitleHandler = () => {
        setTodoList(
            todoList.map(todo =>
                todo.id === editableTodo.id ? { ...todo, title: todoTitle } : todo
            )
        )
        setEditMode(false)
        setTodoTitle("")
    }
    const contextValue = {
        todoTitle,
        setTodoTitle,
        todoList,
        setTodoList, 
        search,
        setSearch,
        filter,
        setFilter,
        editMode,
        setEditMode, 
        editableTodo,
        setEditableTodo,
        submitHandler,
        createTodo,
        removeHandler,
        checkBoxHandler,
        todoFilter,
        editHandler,
        updateTitleHandler,
    }
  return (
    <TodoContext.Provider value={contextValue}>
        {children}
    </TodoContext.Provider> 
  )
}

export default TodoProvider
