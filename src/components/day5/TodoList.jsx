import React from 'react'

const TodoList = (props) => {
  
  const editHandler = (todo) => {
		props.setEditMode(true);
		props.setEditableTodo(todo);
		props.setTodoTitle(todo.title);
	};

  const updateTitleHandler = () => {
    const newTodo = props.todoList.map(todo => {
      if (todo.id === props.editableTodo.id){
        return {...todo, title: props.todoTitle}
      }
      return {...todo}
    })
    props.setTodoList(newTodo)
    props.setEditMode(false)
    props.setTodoTitle("")
  }

  const removeHandler = (todoId) => {
    const newRemTodo = props.todoList.filter(todo => todo.id !== todoId)
    props.setTodoList(newRemTodo)
  }
  
  const checkedHandler = (todoId) => {
    const newTodo = props.todoList.map(todo => {
      if (todo.id === todoId){
        return {...todo, isCompleted: !todo.isCompleted}
      }
      return {...todo}
    })
    props.setTodoList(newTodo)
  }
  // const removeHandler = (todoId) => {
  //   const newRemTodo = props.todoList.filter(todo => todo.id !== todoId)
  //   props.setTodoList(newRemTodo)
  // }
  return (
    <div>
      <ul class="list-group">
         
          
        {props.filterHandler
          .map(todo => <li class="list-group-item" key={todo.id} >
            <input type="checkbox" checked={todo.isCompleted} onClick={() => checkedHandler(todo.id)}/>
            <span>{todo.title}</span>
            {/* <button type="button" onClick={() => removeHandler(todo.id)}>Remove Todo</button> */}
            <button type="button"  onClick={() => removeHandler(todo.id)} style={{float:'right', marginRight:'10px'}}   class="btn btn-danger" > Remove </button>
            <button style={{float:'right', marginRight:'10px'}} class="btn btn-warning"  type="submit" onClick={() => editHandler(todo)}>Edit</button>

          </li>)
        }
      </ul>
    </div>
  )
}

export default TodoList
