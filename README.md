# Day1. Components, Reusable components, Ui Section, Props, Argument, Parameter, Attribute, Event Handleing, State Managements, sibling
1. React-এ Component হলো UI এর ছোট ছোট অংশ।
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
state lifting mrkanisim
- Components has 2 lears
1. Presentation Lear
2. Data/ Logic0 Lear
i) Props (Another components will pass me the data as arguments)
ii) State (Dynamic Data -> Changable Data -> User Integrations)

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