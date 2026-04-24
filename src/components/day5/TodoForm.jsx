import React from 'react'
import TodoList from './TodoList'

const TodoForm = (props) => {
  const submitHandler = (event) => {
    event.preventDefault()
    if (props.todoTitle.trim() === "") return alert("Enter Correct Value")
    props.editMode === true ? props.updateTitleHandler() : createTodo()
  }   
  const createTodo = () => {
    const newTodo = ({
      id: Date.now() + "",
      title: props.todoTitle,
      isCompleted:false
    })
    props.setTodoList([...props.todoList, newTodo])
  }
  // const submitHandler = (event) => {
  //   event.preventDefault()
  //   if (props.todoTitle.trim() === "") return alert("Enter Correct Value")
    // const newTodo = {
    //   id: Date.now() + "",
    //   title: props.todoTitle,
    //   isCompleted: false
    // }
    // props.setTodoList([...props.todoList, newTodo])
  // }
   
  // const createTodo = () => {
  //   const newTodo = ({
  //     id: Date.now() + "",
  //     title: todoTitle,
  //     isCompleted:false
  //   })
  //   props.setTodoList([...props.todoList, newTodo])
  // }
  return (
    <div>
      <form  onSubmit={submitHandler} action="" className="input-group mb-3">
        <input className="form-control " type="text" value={props.todoTitle} onChange={event => props.setTodoTitle(event.target.value)}/>
        <button type="submit" className="btn btn-success">{props.editMode? "update Todo": "Create Todo"}</button>
      </form> 
      <form className="input-group mb-3">
        <input className="form-control" type="search" value={props.search} onChange={(e) => props.setSearch(e.target.value)}/>
        <button style={{float:'right'}} className="btn btn-success"  type='button'>Search Todo</button>
      </form>
    </div>
  )
}

export default TodoForm
