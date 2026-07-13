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

