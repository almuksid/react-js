import Contact from './Contact'
import { customBioHook } from '../../../hooks/day10/Index'

const Home = () => {
    const {name, age} = customBioHook()
  return (
    <div>
      Hello Context Api. This is {name} I am {age} years old
      <Contact/>
    </div>
  )
}

export default Home

