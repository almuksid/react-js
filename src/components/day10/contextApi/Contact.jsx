import React from 'react'
import { customBioHook } from '../../../hooks/day10/Index'

const Contact = () => {
  const  {name, age}  = customBioHook()
  return (
    <div>

        <h2>Contact Us</h2>
        <p>Hello, {name}. I am {age} years old</p>
      
    </div>
  )
}

export default Contact
