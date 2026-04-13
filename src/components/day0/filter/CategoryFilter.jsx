import React from 'react'
import { useState } from 'react'

const CategoryFilter = () => {
  const [category, setCategory] = useState("all")
  const products = ([
    {id:1, name:"tshirt", category:"clothings"},
    {id:2, name:"Mobile", category:"electronics"},
    {id:3, name:"Laptop", category:"electronics"},
  ])
  const categoryFilter = category === "all" ? products : products.filter(p => p.category === category)
  return (
    <div>
      <h2>3. Category Filter</h2>
      <button type="submit" onClick={() => setCategory("all")}>All</button>
      <button type="submit" onClick={() => setCategory("clothings")}>Clothings</button>
      <button type="submit" onClick={() => setCategory("electronics")}>Electronics</button>
      <ul>
        {categoryFilter.map(p => <li key={p.id}> {p.name} </li>)}
      </ul>
    </div>
  )
}

export default CategoryFilter
