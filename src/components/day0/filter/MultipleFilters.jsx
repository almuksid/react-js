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
  // const priceFilter = products.filter(p => p.price > 100 && p.price < 1000)
  // const categoryFilter = products.filter(p => categorya === 'all' ? products : p.category === categorya)

  return (
    <div>
      <h2>5. Multiple Filters</h2>
      
      <button type="submit" onClick={() => setCategorya('all')}>All</button>
      <button type="submit" onClick={() => setCategorya('electronics')}>Electronics</button>
      <button type="submit" onClick={() => setCategorya('fashions')}>Fashions</button><br /><br />

      <input type="search" value={products.name} onChange={(e) => setSearch(e.target.value)}/>
      
      {products
        .filter(p => p.price >50 && p.price < 2000)
        .filter(p => categorya === 'all' ? true : p.category === categorya)
        .filter(p => p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
        .map(p => <p key={p.id}> {p.name} </p>)
      }
    </div>
  )
}

export default MultipleFilters
