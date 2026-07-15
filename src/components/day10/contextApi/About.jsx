import React from 'react'
import { customBioHook } from '../../../hooks/day10/Index'
const About = () => {
    const {name, age} = customBioHook()
  return (
    <div>
        <h2>About Us</h2>
        <p>Hi I'm {name} and {age} ages </p>
      
    </div>
  )
}

export default About
