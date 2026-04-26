import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../../contexts/day6/TodoApp6Context'

const TodoList6 = () => {
    const {todoFilter, todoList, checkBoxHandler, editHandler, removeHandler} = useContext(TodoContext)
  return (
    <div className="border rounded p-3 bg-light w-100">
        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mb-3 gap-2">
            <span className="fw-semibold">Showing {todoFilter.length} todo{todoFilter.length === 1 ? '' : 's'}</span>
            <span className="badge bg-secondary">Total {todoList.length}</span>
        </div>
        <ul className="list-group w-100">
            {todoFilter.length > 0 ? (
                todoFilter.map(todo => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center gap-3 flex-nowrap">
                        <div className="form-check d-flex align-items-center gap-2 flex-grow-1 min-w-0">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                checked={todo.isCompleted}
                                onChange={() => checkBoxHandler(todo.id)}
                                id={`todo-${todo.id}`}
                            />
                            <label
                                className={`form-check-label text-truncate ${todo.isCompleted ? 'text-decoration-line-through text-muted' : ''}`}
                                htmlFor={`todo-${todo.id}`}
                                title={todo.title}
                            >
                                {todo.title}
                            </label>
                        </div>
                        <div className="d-flex gap-2">
                            <button type="button" className="btn btn-outline-secondary btn-sm" onClick={() => editHandler(todo)}>
                                Edit
                            </button>
                            <button type="button" className="btn btn-outline-danger btn-sm" onClick={() => removeHandler(todo.id)}>
                                Remove
                            </button>
                        </div>
                    </li>
                ))
            ) : (
                <li className="list-group-item text-center text-muted">No todos found.</li>
            )}
        </ul>
    </div>
  )
}

export default TodoList6
