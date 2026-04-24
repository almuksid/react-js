import {useState} from 'react'
import TodoForm from './TodoForm'
import TodoListSection from './TodoListSection'

const MyTodoApp = () => {
  const [todoTitle, setTodoTitle] = useState("")
  const [todoList, setTodoList] = useState([
      {id:1, title:"todo1", isCompleted:true},
      {id:2, title:"todo2", isCompleted:false},
      {id:3, title:"todo3", isCompleted:true}
  ])

    const [search, setSearch] = useState("")

    const [editMode, setEditMode] = useState(false)
    const [editableTodo, setEditableTodo] = useState(null)
    
    const updateTitleHandler = () => {
      const newTodo = todoList.map(todo => {
        if (todo.id === editableTodo.id){
          return {...todo, title: todoTitle}
        }
        return {...todo}
      })
      setTodoList(newTodo)
      setEditMode(false)
      setTodoTitle("")
    }

  return (
    <div> 
      <div className="mb-4 bgCol ">
        <h2 style={{color:'white', textAlign:'center', marginBottom:'30px'}}>My Todo App</h2>
        <TodoForm updateTitleHandler={updateTitleHandler} editableTodo={editableTodo} setEditableTodo={setEditableTodo} editMode={editMode} setEditMode={setEditMode} search={search} setSearch={setSearch} todoTitle={todoTitle} setTodoTitle={setTodoTitle} todoList={todoList} setTodoList={setTodoList} />
        <TodoListSection  editableTodo={editableTodo} setEditableTodo={setEditableTodo} editMode={editMode} setEditMode={setEditMode} todoList={todoList} setTodoList={setTodoList} search={search} setSearch={setSearch} setTodoTitle={setTodoTitle}/>
      </div>
    </div>
  )
}

export default MyTodoApp
