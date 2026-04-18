import React from 'react'
import { useState } from 'react'
const CategoryFilter = () => {
  const [category, setCategory] = useState("all")
  const products = ([
    {id:1, name:"Mobile", category: "electronics"},
    {id:2, name:"tshirt", category: "fations"},
    {id:3, name:"Laptop", category: "electronics"},
  ])
  const filterProducts = products.filter(p => category === 'all' ? p : p.category === category)
  // const filterProducts =( category === 'all') ? products : products.filter(p => p.category === category)
  return (
    <div>
      <h2>3. Category Filter</h2>
      <button type="submit" onClick={() => setCategory("all")}>All</button>
      <button type="submit" onClick={() => setCategory("electronics")}>Electronics</button>
      <button type="submit" onClick={() => setCategory("fations")}>Fations</button>
      {filterProducts
        // .filter(p => category === 'all' ? products : p.category === category)
        .map(p => <p key={p.id}> {p.name} </p>)
      }
    </div>
  )
}

export default CategoryFilter
