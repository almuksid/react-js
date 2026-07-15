import {UserProvider} from '../../../hooks/day10/useApi/Use'
import HomeUse from './HomeUse'

const UseMain = () => {
  return (
    <div style={{textAlign: 'center', paddingTop: '20px'}}>
      <h2>Use Api in react</h2>
      <UserProvider>
        <HomeUse/>
      </UserProvider>
    </div>
  )
}

export default UseMain
