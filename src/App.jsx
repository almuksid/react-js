import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Biodata from './components/day1/Biodata'
import Counter from './components/day2/Counter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Biodata name='Al Muksid' age={25} occupation='Software Engineer' address='Magura' skills={['JavaScript', 'React', 'Node.js']} interests={['Coding', 'Reading', 'Traveling']} />
      <Biodata name='Mesion Sheikh' age={23} occupation='Software Engineer' skills={['JavaScript', 'React', 'Node.js']} interests={['Coding', 'Reading', 'Traveling']} /> */}
      <Counter/>
    </>
  )
}

export default App
