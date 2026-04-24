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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="day">
      {/* <Biodata name='Al Muksid' age={25} occupation='Software Engineer' address='Magura' skills={['JavaScript', 'React', 'Node.js']} interests={['Coding', 'Reading', 'Traveling']} />
      <Biodata name='Mesion Sheikh' age={23} occupation='Software Engineer' skills={['JavaScript', 'React', 'Node.js']} interests={['Coding', 'Reading', 'Traveling']} /> */}
      {/* <Counter/> */}
      {/* <TodoApp/> */}
      {/* <FilterMap/> */}
      {/* <NewTodoList/> */}
      <MyTodoApp/>
    </div>
    </>
  )
}

export default App
