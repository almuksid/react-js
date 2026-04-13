import React from 'react'
import { useState } from 'react'

const MultipleFilters = () => {
    const [search, setSearch] = useState("")
    const [categorya, setCategorya] = useState("all")
    const products = [
        { id: 1, name: "Phone", category: "electronics", price: 500 },
        { id: 2, name: "Laptop", category: "electronics", price: 1500 },
        { id: 3, name: "Shirt", category: "fashions", price: 50 }
    ]
    return (
    <div>
      <h2>5. Multiple Filters</h2>
      {/* search + category + price all in one */}
      <input type="search" onChange={(e) => setSearch(e.target.value)}/><br/><br/>
      <button type="submit" onClick={() => setCategorya("all")}>all</button>
      <button type="submit" onClick={() => setCategorya("electronics")}>Electronics</button>
      <button type="submit" onClick={() => setCategorya("fashions")}>Fashions</button>

      {products
      .filter(p => p.price > 10 && p.price < 2000)
      .filter(p => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      .filter(p => categorya == "all" ? true : p.category === categorya)
      .map(p => <p key={p.id}>{p.id}. {p.name} {p.price}</p>)
      }

    </div>
  )
}

export default MultipleFilters
