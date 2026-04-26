import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../../contexts/day6/TodoApp6Context'

const TodoFilter6 = () => {
    const {filter, setFilter, search, setSearch} = useContext(TodoContext)
  return (
    <div className="d-flex flex-column align-items-center gap-3 w-100 mb-3">
        <div className="d-flex justify-content-center flex-wrap gap-2 w-100">
            <button type="button" className={`btn btn-outline-primary ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter("all")}>All</button>
            <button type="button" className={`btn btn-outline-primary ${filter === 'active' ? 'active' : ''}`} onClick={() => setFilter("active")}>Active</button>
            <button type="button" className={`btn btn-outline-primary ${filter === 'completed' ? 'active' : ''}`} onClick={() => setFilter("completed")}>Completed</button>
        </div>
        <div className="input-group w-100" style={{ maxWidth: '500px' }}>
            <span className="input-group-text">Search</span>
            <input
                type="search"
                className="form-control"
                placeholder="Search todos"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    </div>
  )
}

export default TodoFilter6
