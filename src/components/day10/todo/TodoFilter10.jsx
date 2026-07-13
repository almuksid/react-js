import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../../../hooks/day10/todo/AppDay10'

const TodoFilter10 = () => {
    const {setFilter} = useContext(TodoContext)

    return (
        <div>
            <button type="submit" onClick={() => setFilter('all')}>All</button>
            <button type="submit" onClick={() => setFilter('active')}>Active</button>
            <button type="submit" onClick={() => setFilter('completed')}>Completed</button>
        </div>
    )
}

export default TodoFilter10
