import React, { useState } from 'react'
// import { useState } from 'react'

const SearchFilter = () => {
  const [search, setSearch] = useState("")
  const users = (['Al Muksid', 'Urme', 'Rafi'])
  return (
    <div>
      <h2>2. Search Filter</h2>
      <input type="search" onChange={(event) => setSearch(event.target.value)}/>
      {users
      .filter(user => user.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      .map(user => <p key={user}>{user}</p>)
      }
    </div>
  )
}

export default SearchFilter
