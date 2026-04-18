// import React, { useState } from 'react'
// // import { useState } from 'react'

// const SearchFilter = () => {
//   const [search, setSearch] = useState("")
//   const users = (['Al Muksid', 'Urme', 'Rafi'])
//   return (
//     <div>
//       <h2>2. Search Filter</h2>
//       <input type="search" onChange={(event) => setSearch(event.target.value)}/>
//       {users
//       .filter(user => user.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
//       .map(user => <p key={user}>{user}</p>)
//       }
//     </div>
//   )
// }

// export default SearchFilter
import { useState } from 'react'

const SearchFilter = () => {
  const [search, setSearch] = useState("")
  const users = ([
    {id:1, name:"Mujahid", isActive:true},
    {id:2, name:"Mesion", isActive:false},
    {id:3, name:"Lemon", isActive:true},
  ])
  return (
    <div>
      <h2>2. Search Filter</h2>
      <input type="search" value={users.name} onChange={(e) => setSearch(e.target.value)} />
      <ul>
        {users
          .filter((user) => user.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .map(user => <li key={user.id}>
            <input type="checkbox" checked={user.isActive} />
            <span> {user.name}</span>
          </li>)
        }
      </ul>
    </div>
  )
}

export default SearchFilter
