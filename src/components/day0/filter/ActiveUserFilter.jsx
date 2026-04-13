import React from 'react'

const ActiveUserFilter = () => {
  const users = ([
    {id:1, name: "Al Muksid", isActive: true},
    {id:2, name: "Urme", isActive: false},
    {id:3, name: "Rafi", isActive: true},
  ])
  return (
    <div>
      <h2>1. Active User Filter </h2>
    <ul>
      {users
        .filter(user => user.isActive === true)
        .map((user) => <li key={user.id}>
          <input type="checkbox" checked={user.isActive} />
          <span>{user.name}</span>
        </li>)
      }
    </ul>
    </div>
  )
}

export default ActiveUserFilter
