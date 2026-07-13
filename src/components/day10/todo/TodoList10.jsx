import React, { useContext } from 'react'
import { TodoContext } from '../../../hooks/day10/todo/AppDay10'

const TodoList10 = () => {
    const {setTodoTitle, setEditableTodo, setEditMode,  search, filterHandler, todoList, setTodoList } = useContext(TodoContext)

    const removeHandler = (todoId) => {
        const newtodo = todoList.filter((todo) => todo.id !== todoId)
        setTodoList(newtodo)
    }

    const checkBoxHandler = (todoId) => {
        const newTodo = todoList.map((todo) => {
            if (todo.id === todoId) {
                return { ...todo, isCompleted: !todo.isCompleted }
            }
            return{...todo}
        })
        setTodoList(newTodo)
    }

    const editHandler = (todo) => {
        setEditMode(true)
        setEditableTodo(todo)
        setTodoTitle(todo.title)

    }




    return (
        <div>
            <ul>
                {todoList
                    .filter(filterHandler)
                    .filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))
                    .map((todo) => <li key={todo.id}>
                        <input type="checkbox" onChange={() => checkBoxHandler(todo.id)} checked={todo.isCompleted} />
                        {todo.title}
                        <button type="submit" onClick={() => removeHandler(todo.id)}>Remove Todo</button>
                        <button type="submit" onClick={() => editHandler(todo)}>EditTodo</button>
                    </li>)
                }
            </ul>
        </div>
    )
}

export default TodoList10
