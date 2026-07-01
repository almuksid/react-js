import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Biodata from './components/day1/Biodata'
import Counter from './components/day2/Counter'
import TodoApp from './components/day3/TodoApp'
import FilterMap from './components/day0/FilterMap'
import NewTodoList from './components/day4/NewTodoList'
// import Todo from './components/day5/Todo'
import MyTodoApp from './components/day5/MyTodoApp'
import TodoApp6 from './components/day6/TodoApp6'
import TodoProvider from './contexts/day6/TodoApp6Context'
import ReducerHooks from './components/day7/ReducerHooks'
import ReduceHooks8 from './components/day8/ReduceHooks8'
import TodoApp3 from './components/day3/TodoApp'
import NewTodoList4 from './components/day4/NewTodoList4'
import ReactTest from './components/day8/ReactTest'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container-fluid p-0 min-vh-100 bg-light">
        {/* <TodoApp/> */}
        {/* <NewTodoList/> */}
        {/* <NewTodoList4/> */}
        {/* <TodoProvider>
          <TodoApp6 /> Day 6
        </TodoProvider> */}
        {/* <ReducerHooks/> */}
        {/* <ReduceHooks8/> */}
        <ReactTest/>
      </div>
    </>
  )
}

export default App
