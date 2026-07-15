import { useContext, use } from 'react'
import { UserContext } from '../../../hooks/day10/useApi/Use'
import { customUseHooks } from '../../../hooks/day10/useApi/Use'

const HomeUse = () => {
  // const {name, age, department} = useContext(UserContext)
  const {name, age, department} = customUseHooks()
  return (
    <div>
        <p>Hi this is {name} {age} years old & {department}</p>
    </div>
  )
}

export default HomeUse
