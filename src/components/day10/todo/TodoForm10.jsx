import React, { useContext } from 'react'
import { TodoContext } from '../../../hooks/day10/todo/AppDay10'

const TodoForm10 = () => {
    const { editMode, updateTodo,  todoTitle, setTodoTitle, todoList, setTodoList } = useContext(TodoContext)

    const submitHandler = (event) => {
        event.preventDefault()
        editMode === true ? updateTodo() : createTodo()

    }

    const createTodo = () => {
        const newTodo = {
            id: Date.now() + "",
            title: todoTitle,
            isCompleted: false
        }
        setTodoList([...todoList, newTodo])
    }

    return (
        <div>

            <form action="" onSubmit={submitHandler}>
                <input type="text" name="" id="" value={todoTitle} onChange={(e) => setTodoTitle(e.target.value)} />
                <button type="submit">{editMode ? 'Update Todo' : 'Create Todo'}</button>
            </form>

        </div>
    )
}

export default TodoForm10
