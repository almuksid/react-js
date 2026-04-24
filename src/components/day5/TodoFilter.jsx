import React from 'react'

const TodoFilter = (props) => {
  
  return (
    <div>
      <button class="btn btn-success filterBtn" type="submit" onClick={() => props.setFilter("all")}>All</button>
      <button class="btn btn-success filterBtn" type="submit" onClick={() => props.setFilter("active")}>Active</button>
      <button class="btn btn-success filterBtn" type="submit" onClick={() => props.setFilter("completed")}>Completed</button><br /><br />

    </div>
  )
}

export default TodoFilter
