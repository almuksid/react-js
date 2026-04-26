import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../../contexts/day6/TodoApp6Context'

const TodoForm6 = () => {
    const {submitHandler, todoTitle, setTodoTitle, editMode} = useContext(TodoContext)
  return (
    <form onSubmit={submitHandler} className="d-flex gap-2">
        <input
            type="text"
            className="form-control flex-grow-1"
            placeholder="Enter todo title"
            value={todoTitle}
            onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit" className="btn btn-outline-primary">
            {editMode ? "Update Todo" : "Create Todo"}
        </button>
    </form>
  )
}

export default TodoForm6
