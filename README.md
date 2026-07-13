# Day1. Components, Reusable components, Ui Section, Props, Argument, Parameter, Attribute, Event Handleing, State Managements, sibling
1. React-এ Component হলো UI এর ছোট ছোট অংশ।
```jsx
- Component Example
const newTodo = () => {

}
```
2. UI মানে User Interface। একটা ওয়েবসাইটে অনেক Section থাকে। Hero section, Product section, Contact section, Footer section, React এ প্রতিটা section আলাদা component করা হয়।
3. Props মানে data পাঠানো parent component থেকে child component এ।
4. React-এ attribute হলো JSX-এর মধ্যে props পাঠানোর মাধ্যম। HTML-এর মতো দেখায়, কিন্তু সত্যি বলতে এগুলো props নামের object তৈরির উপাদান।
5. Attribute হচ্ছে HTML এর property। src, alt এইগুলো attribute
6. Parameter হলো সেই ভেরিয়েবল, যেটা function-এ argument ধরার জন্য ব্যবহৃত হয়। অর্থাৎ parameter হচ্ছে function definition এর অংশ।
7. Parameter মানে function এর ভেতরে data নেওয়ার variable. function add(a,b){} a, b এগুলো parameter
8. Argument মানে হচ্ছে — যখন তুমি কোনো function কল করো, তখন ব্র্যাকেট () এর ভিতরে যা পাঠাও, সেটা argument।
9. Sibling কী? Sibling মানে হলো একই parent এর child element গুলো। অর্থাৎ, যদি দুইটা element এর parent একই হয়, তাহলে তারা sibling।
10. State -> Changable Data -> React-এ State মানে এমন data যেটা change হতে পারে এবং UI update করে। ex: const [count, setCount] = useState(0);
- count → current value
- setCount → change করার function
-  যখন state change হবে → component আবার render হবে
<button onClick={() => setCount(count + 1)}>Increase</button>

11. Event Listener =>  Event Listener মানে user কিছু করলে (click, input, submit) → function run হবে
React-এ: <button onClick={handleClick}>Click</button>
👉 এখানে onClick = event listener
```jsx
<button onClick={handleClick}>
  Click Me
</button>
```
👉 এখানে:
- onClick = Event Listener
- click = Event
- handleClick = Callback function

12. Elements / Event Listener / Callback (React Example)
- Full React Example
```jsx
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");

  // 👉 Callback Function
  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = () => {
    alert("Button Clicked!");
  };

  return (
    <div>
      {/* 👉 Element */}
      <input 
        type="text" 
        placeholder="Type something"
        
        {/* 👉 Event Listener */}
        onChange={handleChange}
      />

      {/* 👉 Element */}
      <button 
        
        {/* 👉 Event Listener */}
        onClick={handleClick}
      >
        Click Me
      </button>

      <h2>{text}</h2>
    </div>
  );
}

export default App;
```
- A. ✅ Elements (UI)

- JSX/HTML tag
```jsx
<input />
<button></button>
<h2></h2>
```
- B. ✅ Event Listener

-  Event ধরার জন্য attribute
```jsx
onChange={handleChange}
onClick={handleClick}
```jsx
- C. ✅ Callback Function

- Event ঘটলে run হয়
```jsx
const handleChange = (e) => {
  setText(e.target.value);
};

const handleClick = () => {
  alert("Button Clicked!");
};
```

13. Mutative/ NotMutative 
- Mutative = original data change করে
- Non-Mutative = নতুন data create করে (React-এ এটা use করতে হয়)

❌ Mutative (Wrong in React)
```js
let arr = [1,2,3];
arr.push(4);  // direct change
```
✅ Non-Mutative (Correct)
```js
let arr = [1,2,3];
let newArr = [...arr, 4];
``` 
React state update করার সময় always non-mutative use করতে হবে



14. Derived State এমন একটি মান যা অন্য কোনো state বা props থেকে হিসাব করে বের করা হয়, আলাদা করে state হিসেবে রাখা হয় না।
15. Call Back Function 
16. Reverse Engineering Code vanga vanga lekha
17. State Lifting Mekanism -> 1 way dataflow
state lifting mrkanisim
- Components has 2 lears
1. Presentation Lear
2. Data/ Logic0 Lear
i) Props (Another components will pass me the data as arguments)
ii) State (Dynamic Data -> Changable Data -> User Integrations)

18. Convention
19. 




- React শেখার সঠিক order:

1️⃣ JavaScript ES6
2️⃣ Component
3️⃣ JSX
4️⃣ Props
5️⃣ Event Handling
6️⃣ State (useState)
7️⃣ List Rendering
8️⃣ Form Handling
9️⃣ API Call (Axios)
🔟 Routing

## 01. Make a biodata project
- Create a reusable components/function. and call his parameters name (props)
- Optional rendering 
```jsx        
{props.address && <p>Address : {props.address}</p>}
```
'argument' gula ka 'attribute' ear moto kora pas korce

---

# Day2. State, State Machanizm Rendering Rerendering, Callback Function, Turnary operators
## 01. Handler function
- Increase Handler, Decrease Handler
## 02. You can give 2 things as arguments.
- Direct Value
- Expration -> that convart a value

## 03. Create a project increase & decrease handler

---

# Day3. Create a project use state -> Inmemory cut
- State -
🔥 Complete JavaScript Loop List
Basic: 
for, while, do while

Object / Iterable:
for...of, for...in

Array Iteration: 
- forEach(), map(), filter(), reduce(), some(), every(), find(), 

- String method  *include()* সরাসরি বুলিয়ান রিটার্ন করে


<!-- Todo Apps.jsx -->
```rafc

import React from 'react'
import { useState } from 'react'
const TodoApp = () => {
  const [todoTitle, setTodoTitle] = useState("")
  const [todoList, setTodoList] = useState([
    {id:1, title:"todo1", isCompleted:true},
    {id:2, title:"todo2", isCompleted:false},
  ])
  const submitHandler = (event) => {
    event.preventDefault()
    if (!todoTitle.trim()) return alert(`Submit Valid Text`)
    const newTodo = {
      id : Date.now() + "",
      title: todoTitle,
      isCompleted:false 
    }
    setTodoList([...todoList, newTodo])
  } 

  const removeHandler = (todoId) => {
    const removeTodo = todoList.filter(todo => todo.id !== todoId)
    setTodoList(removeTodo)
  }

  const checkedHandler = (todoId) => {
    const newTodo = todoList.map(todo => {
      if (todo.id === todoId){
        return ({...todo, isCompleted: !todo.isCompleted})
      }
      return {...todo}
    })
    setTodoList(newTodo)
  }
  return (
    <div>
      <h2>Todo App</h2>

      <form action="" onSubmit={submitHandler}>
        <input type="text" value={todoTitle} onChange={event => setTodoTitle(event.target.value)} />
        <button type="submit">Create Todo</button>
      </form>

      <ul>
        {todoList.map(todo => <li key={todo.id}>
          <input type="checkbox"  checked={todo.isCompleted} onChange={ () => checkedHandler(todo.id)}/>
          <span>{todo.title}</span>
          <button type="submit" onClick={() => removeHandler(todo.id)}>Remove Todo</button>
        </li>)}
      </ul>
    </div>
  )
}

export default TodoApp

```

---

# Day4.  Search Filter
```jsximport React from 'react'
import { useState } from 'react'

const NewTodoList = () => {
  const [editMode, setEditMode] = useState(false)
  const [editableTodo, setEditableTodo] = useState(null)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  const [todoTitle, setTodoTitle] = useState("")
  const [todoList, setTodoList] = useState([
    {id:1, title:"todo1", isCompleted:true},
    {id:2, title:"todo2", isCompleted:false},
    {id:3, title:"todo3", isCompleted:true},
  ])

  const submitHandler = (event) => {
    event.preventDefault()
    if (!todoTitle.trim()) return alert("Enter Correct Value")
    editMode === true ? updateTitleHandler() : createTodo()
  }   
  const createTodo = () => {
    const newTodo = ({
      id: Date.now() + "",
      title: todoTitle,
      isCompleted:false
    })
    setTodoList([...todoList, newTodo])
  }
  const removeHandler = (todoId) => {
    const newRemTodo = todoList.filter(todo => todo.id !== todoId)
    setTodoList(newRemTodo)
  }
  
  const checkedHandler = (todoId) => {
    const newTodo = todoList.map(todo => {
      if (todo.id === todoId){
        return {...todo, isCompleted: !todo.isCompleted}
      }
      return {...todo}
    })
    setTodoList(newTodo)
  }
  const editHandler = (todo) => {
		setEditMode(true);
		setEditableTodo(todo);
		setTodoTitle(todo.title);
	};

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

  const filterHandler = todoList
  .filter(todo => {
    if (filter === "all") return true
    if (filter === "active") return !todo.isCompleted
    if (filter === "completed") return todo.isCompleted
  })
  .filter(todo => todo.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

  return (
    <div>
      <div className="mb-4 bgCol p-3">
      <h2 style={{color:'white', textAlign:'center', marginBottom:'30px'}}>My Todo App</h2>
      <button class="btn btn-success filterBtn" type="submit" onClick={() => setFilter("all")}>All</button>
      <button class="btn btn-success filterBtn" type="submit" onClick={() => setFilter("active")}>Active</button>
      <button class="btn btn-success filterBtn" type="submit" onClick={() => setFilter("completed")}>Completed</button><br /><br />
      <form class="input-group mb-3" onSubmit={submitHandler}>
        <input class="form-control" type="text" value={todoTitle} onChange={(event) => setTodoTitle(event.target.value)}/>
        <button style={{float:'right'}} class="btn btn-success"  type="submit">{editMode === true ? "Update Todo" : "Create Todo"}</button>
      </form>
      <form class="input-group mb-3">
        <input class="form-control" type="search" onChange={(e) => setSearch(e.target.value)}/>
        <button style={{float:'right'}} class="btn btn-success"  type={search}>Search Todo</button>
      </form>
      <ul class="list-group">
        {filterHandler
          // .filter(todo => todo.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .map(todo => <li class="list-group-item" key={todo.id}>
            <input type="checkbox" checked={todo.isCompleted} onClick={() => checkedHandler(todo.id)} />
            <span> {todo.title} </span>
            <button style={{float:'right'}} class="btn btn-danger"  type="submit" onClick={() => removeHandler(todo.id)}>Remove Todo</button>

            <button style={{float:'right', marginRight:'10px'}} class="btn btn-warning"  type="submit" onClick={() => editHandler(todo)}>Edit</button>
          </li>)
        }
      </ul>

      </div>
    </div>
  )
}

export default NewTodoList


```

---

# Day5 State Lifting & Props Drilling (One way data flow)
## 1. MyTodoApp.jsx
```jsx
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
```
## 02 TodoForm.jsx
```jsx
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
```
## 03. TodoListSection.jsx
```jsx
import React, {useState} from 'react'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'

const TodoListSection = (props) => {
  const [filter, setFilter] = useState("all")
 
  const filterHandler = props.todoList
  .filter(todo => {
    if (filter === "all") return true
    if (filter === "active") return !todo.isCompleted
    if (filter === "completed") return todo.isCompleted
  })
  .filter(todo => todo.title.toLocaleLowerCase().includes(props.search.toLocaleLowerCase()))

  // .filter((todo) => todo.title.toLowercase().include(props.search.toLowerCase()))

  return (
    <div>
      <TodoFilter {...props} filter={filter} setFilter={setFilter}  />
      <TodoList {...props} filter={filter} setFilter={setFilter} filterHandler={filterHandler}/>
      
      {/* TodoList, TodoFilter */}
    </div>
  )
}

export default TodoListSection
```

## 04. TodoFilter.jsx
```jsx
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
```

## 5. TodoList.jsx
```jsx
import React from 'react'

const TodoList = (props) => {
  
  const editHandler = (todo) => {
		props.setEditMode(true);
		props.setEditableTodo(todo);
		props.setTodoTitle(todo.title);
	};

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

```

---

# Day6. Todo Context API Implementation
## 1. Contexts/day6/TodoApp6Context.jsx 
```jsx
import { createContext, useState } from "react"

export const TodoContext = createContext()

const TodoProvider = ({children}) => {
    const [todoTitle, setTodoTitle] = useState("")
    const [todoList, setTodoList] = useState([
        { id: 1, title: "todo1", isCompleted: true },
        { id: 2, title: "todo2", isCompleted: false },
        { id: 3, title: "todo3", isCompleted: true },
    ])
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")

    const [editMode, setEditMode] = useState(false)
    const [editableTodo, setEditableTodo] = useState(null)

    const submitHandler = (event) => {
        event.preventDefault()
        if (!todoTitle.trim()) return
        editMode ? updateTitleHandler() : createTodo()
    }

    const createTodo = () => {
        const newTodo = {
            id: Date.now() + "",
            title: todoTitle,
            isCompleted: false,
        }
        setTodoList([...todoList, newTodo])
        setTodoTitle("")
    }

    const removeHandler = (todoId) => {
        setTodoList(todoList.filter(todo => todo.id !== todoId))
    }

    const checkBoxHandler = (todoId) => {
        setTodoList(
            todoList.map(todo =>
                todo.id === todoId ? { ...todo, isCompleted: !todo.isCompleted } : todo
            )
        )
    }

    const todoFilter = todoList
        .filter(todo => {
            if (filter === "all") return true
            if (filter === "active") return !todo.isCompleted
            if (filter === "completed") return todo.isCompleted
            return true
        })
        .filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))

    const editHandler = (todo) => {
        setEditMode(true)
        setEditableTodo(todo)
        setTodoTitle(todo.title)
    }

    const updateTitleHandler = () => {
        setTodoList(
            todoList.map(todo =>
                todo.id === editableTodo.id ? { ...todo, title: todoTitle } : todo
            )
        )
        setEditMode(false)
        setTodoTitle("")
    }
    const contextValue = {
        todoTitle,
        setTodoTitle,
        todoList,
        setTodoList, 
        search,
        setSearch,
        filter,
        setFilter,
        editMode,
        setEditMode, 
        editableTodo,
        setEditableTodo,
        submitHandler,
        createTodo,
        removeHandler,
        checkBoxHandler,
        todoFilter,
        editHandler,
        updateTitleHandler,
    }
  return (
    <TodoContext.Provider value={contextValue}>
        {children}
    </TodoContext.Provider> 
  )
}

export default TodoProvider

```
## 2.TodoApp6.jsx 
```jsx
import React from 'react'
import TodoForm6 from './TodoForm6'
import TodoListSection6 from './TodoListSection6'

import { useContext } from 'react'
import { TodoContext } from '../../contexts/day6/TodoApp6Context'

const TodoApp6 = () => {

    const {todoTitle, setTodoTitle, todoList, setTodoList,  search, setSearch, filter, setFilter, editMode, setEditMode, editableTodo, setEditableTodo,} = useContext(TodoContext)

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-8 col-lg-7 mx-auto px-1">
                <div className="card shadow-sm border-0">
                    <div className="card-header bg-primary text-white text-center">
                        <h2 className="card-title mb-0">Todo App Day 6</h2>
                    </div>
                    <div className="card-body d-flex flex-column align-items-center gap-3">
                        <TodoForm6/>
                        <TodoListSection6/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoApp6

```
## 3. TodoFilter6.jsx
```jsx
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

```
## 4. TodoForm6.jsx
```jsx
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

```
## 5. TodoList6.jsx
```jsx
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

```
## 6. TodoListSection6.jsx
```jsx
import React from 'react'
import TodoList6 from './TodoList6'
import TodoFilter6 from './TodoFilter6'

const TodoListSection6 = (props) => {
  return (
    <div className="d-flex flex-column gap-3 w-100 align-items-center">
      <TodoFilter6 {...props} />
      <TodoList6 {...props} />
    </div>
  )
}

export default TodoListSection6

```
---

# Day7. Reduce Method Javascripts & ReactJsx

## 1. Javascripts reduce() method
```jsx

- Sum of Array (Without Initial Value)
const nmbr = [1, 2, 3, 4]
const addition =  nmbr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});
console.log("1st");
console.log(addition);

- Find Maximum Number (Largest Value)
const num = [7, 8, 9]
const result = num.reduce((accumulator, currentvalue) => {
    return accumulator > currentvalue ? accumulator :currentvalue
}, 0)
console.log("2nd")
console.log(result)

- Count Frequency (How many times each value appears)
const arr = ["a", "b", "c", "b", "a", "a"]
const result1 = arr.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1
    return accumulator
}, {})
console.log("3rd")
console.log(result1)


- Flatten Array (Nested array → Single array)
const arr3 = [[1, 2], [3, 4], [5]]
const result3 = arr3.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue)
}, [])
console.log("4th")
console.log(result3)

- Group By Property (Group users by age)
const users = ([
    {name: "a", age: 20},
    {name: "b", age: 25},
    {name: "c", age: 20},
])

const grouped = users.reduce((accumulator, user) => {
    const key = user.age
    if(!accumulator[key]){
        accumulator[key] = []
    }
    accumulator[key].push(user)
    return accumulator
}, {})
console.log("5th")
console.log(grouped)

```

## 2. React Reduce() Method
```jsx
import React from 'react'
import { useReducer } from 'react'
import Reducers from './Reducers'
// useReducer ekti function 
// ourReducer -> reducer can be decleared by outsite of components
const ourReducer = (state, action) => {
 
    // if (action === "increase_counter") {
    //   return state + 1
    // }
    // else if (action === "decrease_counter"){
    //   return state - 1
    // }

    switch (action.type) {
      case "increase_counter":
        return state + action.payload
        break;
        
      case "decrease_counter":
        return state - action.payload
        break

      case "multiply_counter":
        return state * action.payload
        break

      case "divitioin_counter":
        return state / action.payload
        break

      default:
        break;
    }
}

const ReducerHooks = () => {
    const [counter, dispatch] = useReducer(ourReducer, 10)
  return (
    <div>
        <h2>The value of the counter is {counter}</h2>
        <button onClick={() => dispatch({type: "increase_counter", payload: 1})}>Increase By 1</button>
        <button onClick={() => dispatch({type: "increase_counter", payload: 5})}>Increase By 5</button>
        <button onClick={() => dispatch({type: "decrease_counter", payload: 1})}>Decrease By 1</button>
        <button onClick={() => dispatch({type: "multiply_counter", payload: 5})}>Multiply by 5</button>
        <button onClick={() => dispatch({type: "divitioin_counter", payload: 7})}>Devide by 7</button>


      {/* <Reducers/> */}
    </div>
  )
}

export default ReducerHooks

```
---

# Day8. 

১. useReducer হলো React-এর একটা hook, যা state management-এর জন্য ব্যবহার হয়।
২. reducer function (যেমন ourReducer) state আর action নেয়, আর action অনুযায়ী state আপডেট করে।
৩. useReducer(ourReducer, 10)-এ, প্রথম argument হলো তোমার reducer function, আর দ্বিতীয় argument হলো initial state, এখানে ১০।
৪. useReducer তোমাকে দুটি জিনিস দেয়: state (অর্থাৎ counter) এবং dispatch function, যেটা তুমি action পাঠাতে ব্যবহার করো।

৫. Action (যেমন "Increase_by_1") dispatch করলে, তোমার reducer function সেই action অনুযায়ী state পরিবর্তন করে, আর component তা রি-রেন্ডার হয়।

# 001. Adding Local Storage in React
```jsx

import { useState } from 'react'
import Form from './Form'
import ListDisplay from './ListDisplay'
import ResetList from './ResetList'
// const todoKey = "todoListDisplay"

const Todo = () => {

    const [todoTitle, setTodoTitle] = useState("")
    const [todoList, setTodoList] = useState(() => {
        const data = localStorage.getItem("todos");

        if (!data) {
            return [];
        }

        return JSON.parse(data);
    });

    localStorage.setItem("todos", JSON.stringify(todoList))

    return (
        <div className="max-w-md mx-auto mt-10">

            <Form todoTitle={todoTitle} setTodoTitle={setTodoTitle} todoList={todoList} setTodoList={setTodoList} />

            <ListDisplay todoList={todoList} setTodoList={setTodoList} />

            <ResetList setTodoList={setTodoList} />

        </div>
    )
}

export default Todo

```
---

# Day 9 useEffect Hooks and its use case
- Syntax
```jsx
import { useEffect } from "react";

useEffect(() => {
    // Code runs here
}, [dependencies]);
```
## 01. set real time using useEffect
```jsx
import React from 'react'
import { useState, useEffect } from 'react'

const UseEffect = () => {
    const [dateTime, setDateTime] = useState(0)
    useEffect(() => {
        setInterval(() => {
            const updatedDate = new Date()
            setDateTime(updatedDate.toLocaleTimeString())
        }, 1000)

    }, [])
    return (
        <div style={{ textAlign: 'center' }}>
            <h2>useEffect</h2>
            <p>{dateTime}</p>
        </div>
    )
}

export default UseEffect

```
Another Method
```jsx
    useEffect(() => {
        const updateTime = () => {
            setDateTime(new Date().toLocaleTimeString());
        };

        updateTime(); // প্রথমবার সঙ্গে সঙ্গে Time দেখাবে

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

```
## 02. Set Count value inside title using useEffect
```jsx
import React, { useEffect, useState } from 'react'

const Title = () => {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState("Al Muksid")
    useEffect(()=> {
        document.title = `C: ${count}T: ${title}`
    }, [count, title])
    useEffect(() => {
        console.log(title)
    }, [title])
    return (
        <div>
            <h2>Count : <span>{count}</span> </h2>
            <p>Title: {title}</p>
            <input type="text" name="title" id="" value={title} onChange={(e) => setTitle(e.target.value)} /> <br /> <br />

            <button type="submit" onClick={() => setCount(count + 1)}>Increment</button>

        </div>
    )
}
export default Title
```

## 03. useEffect cleanUp(setInterval(), clearInterval()) function in react.js
```
import React from 'react'
import { useState, useEffect } from 'react'
const CleanUp = () => {
    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log(count)
    }, [count])

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(data => data + 1)
        }, 1000);
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h2>Count : <span>{count}</span> </h2>
            <h2>Subscribe Here</h2>
        </div>
    )
}

export default CleanUp
```
Another Method
```jsx
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1)
    }, 1000);
    return () => clearInterval(interval)
  }, [count])
```

# Day 9.1 Fetch API with Project - FetchApi, useEffect, Async & Await, Try & Catch with useState, loading, error, search filter etc.
```jsx
import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setApiData(data)})
            .catch((error) => console.log(error))
    }, [])

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Fetch Api</h2>
            {apiData.map((data) => {
                return <div key={data.id}>
                <span>{data.title}</span><br /><br />
            </div>
            })}
        </div>
    )
}

export default FetchApi
```
## 1. Implement API fetching with useEffect and useState
```jsx

import React, { useEffect, useState } from 'react'

const PokeApi = () => {
    const [apiData, setapiData] = useState(null)

    useEffect(() => {
        // fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
            .then((res) => res.json())
            .then((data) => setapiData(data))
            .catch((error) => console.log(error));
    }, []);
    console.log(apiData)
if(!apiData) return <div><h2>Loading... </h2></div>
    return (
        <>
            <div>
                <h1>{apiData?.name}</h1>

                <img style={{ width: "150px" }}
                    src={apiData?.sprites?.front_default}
                    alt={apiData?.name}
                />

                <p>Height: {apiData?.height}</p>
                <p>Weight: {apiData?.weight}</p>
                <p>Experience: {apiData?.base_experience}</p>
            </div>
        </>
    )
}


export default PokeApi

```

## 2. Loading & Error handling for FetchApi

```jsx
import React, { useEffect, useState } from 'react'

const LoadingErrorFetchApi = () => {
    const [apiData, setApiData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
            .then(restore => restore.json())
            .then((data) => {
                setApiData(data)
                setLoading(false)
            })
            
            .catch(err => {
                console.log(err);
                setError(err);
                setLoading(false);
            })
    }, [])


    if (loading)
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )

    if (error)
        return (
            <div>
                <h2>We ar not finding Data:
                    <span>{error.message}</span>
                </h2>
            </div>
        )

    return (
        <div>
            <h2> Fetch Api Loading & Error in React </h2><hr />
            <h2>{apiData.name}</h2>
            <img style={{ width: "150px" }}
                src={apiData?.sprites?.front_default}
                alt={apiData?.name}
            />
            <p> Height: {apiData.height}</p>
            <p> Width: {apiData.weight}</p>
            <p> Exprations: {apiData.base_experience}</p>
        </div>
    )
}


export default LoadingErrorFetchApi

```

## 3. Async Await with Try Catch in react FetchApi 
```jsx
import React, { useEffect, useState } from 'react'

const AsyncAwait = () => {

    const [apiData, setApiData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const api = ("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    const fetchApi = async () => {
        try {
            const res = await fetch(api)
            const data = await res.json()
            setApiData(data)
            setLoading(false)
        } catch (err) {
            console.log(err);
            setError(err);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])


    if (loading)
        return (
            <h2>Loading...</h2>
        )
    if (error)
        return (
            <h3>Something Wants Wrong: {error.message}</h3>
        )
    return (
        <div>
            <h3>{apiData?.name}</h3>
            <p>Weight: {apiData?.height}</p>
            <p>Height: {apiData?.weight}</p>
        </div>
    )
}


export default AsyncAwait
```
## 4. Create React app using Fetch Api, useEffect, Async, Await, Try, Catch, Loading Error

- Project-Api-Pokemon

---

# Day 10 Context Api Basic Example & Project 1. Todo App for contextApi

- Wearhouse/ CreateContext
- Index.jsx
```jsx
import { createContext } from "react";

// Step1
export const BioContext = createContext();

// step2
export const BioProvider = ({children}) => {

    const name = "Al Muksid"

    return <BioContext.Provider value={name} >
        {children}
    </BioContext.Provider>
}
```

- App.jsx
```jsx
import { BioProvider } from './hooks/day10/Index'


<BioProvider>
  <ContextApi />
</BioProvider>
```

home.jsx
```jsx
import React, { useContext } from 'react'
import Contact from './Contact'
import { BioContext } from '../../../hooks/day10/Index'


const Home = () => {
    const name = useContext(BioContext)
  return (
    <div>
      Hello Context Api. This is {name}
      <Contact/>
    </div>
  )
}

export default Home

```
Contact.jsx
```jsx
import React from 'react'

const Contact = () => {
  return (
    <div>
        <h2>Contact Us</h2>
      
    </div>
  )
}

export default Contact

```
---
## 1. Todo App for contextApi
- hooks/day10/todo/AppDay10
```jsx
import { createContext, useState } from "react";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [todoTitle, setTodoTitle] = useState("")
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'todo1', isCompleted: false },
    { id: 2, title: 'todo2', isCompleted: true },
    { id: 3, title: 'todo3', isCompleted: true },
  ])

  const [filter, setFilter] = useState("all")

  const filterHandler = (todo) => {
    if (filter === 'all') return true
    if (filter === 'active') return !todo.isCompleted
    if (filter === 'completed') return todo.isCompleted
  }

  const [search, setSearch] = useState("")

  // const searchHandler = () => todoList.filter((todo) => todo.title.toLowerCase().includes(search.toLowerCase()))

  const [editMode, setEditMode] = useState(false)
  const [editableTodo, setEditableTodo] = useState(null)

  const updateTodo = () => {
    const newTodo = todoList.map((todo) => {
      if (todo.id === editableTodo.id) {
        return {...todo, title: todoTitle}
      }
      return {...todo}
    })
    setTodoList(newTodo)
    setEditMode(false)
    setEditableTodo(null)
  }

  return (
    <TodoContext.Provider value={{updateTodo, editMode, setEditMode, editableTodo, setEditableTodo, search, setSearch, filterHandler, filter, setFilter, todoTitle, setTodoTitle, todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  )
}
```
- day10/todo/
- TodoApp10.jsx
```jsx
import React from 'react'
import { TodoProvider } from '../../../hooks/day10/todo/AppDay10'
import TodoListSection10 from './TodoListSection10'
import TodoForm10 from './TodoForm10'
import TodoSearch10 from './TodoSearch10'
const TodoApp10 = () => {
  // console.log(TodoProvider);
  return (
    <div style={{textAlign:'center'}}>
      <TodoProvider>
        <h2>Todo App</h2>
        <TodoForm10/>
        <TodoSearch10/>
        <TodoListSection10/>
      </TodoProvider>
    </div>
  )
}

export default TodoApp10
```
- TodoForm10.jsx
```jsx
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
```
- TodoListSection.jsx
```jsx
import React from 'react'
import TodoList10 from './TodoList10'
import TodoFilter10 from './TodoFilter10'

const TodoListSection10 = () => {
    return (
        <div>
            <TodoFilter10 />
            <TodoList10 />
        </div>
    )
}

export default TodoListSection10
```
- TodoFilter10.jsx
```jsx
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
```

- TodoList10.jsx
```jsx
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

```