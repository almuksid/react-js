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
10. State -> Changable Data
11. Event Listener 
12. Mutative/ NotMutative
13. Elements 

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
