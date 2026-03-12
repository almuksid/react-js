import React from 'react'

const Biodata = (props) => {
  return (
    <div className="biodata">
        <h2>My Biodata for {props.name}</h2>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Occupation: {props.occupation}</p>
        {props.address && <p>Address : {props.address}</p>}
        <div className="skills">
            <h3>Skills</h3>
            <ul>
                {props.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
        <div className="interest">
            <h3>Interests</h3>
            <ul>
                {props.interests.map((interest) => (
                    <li key={interest}>{interest}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Biodata
