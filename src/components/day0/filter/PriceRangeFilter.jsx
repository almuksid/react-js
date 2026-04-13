import React from 'react'

const PriceRangeFilter = () => {
    const products = [
        {id: 1, name : "Phone", price: 150000}, 
        {id: 2, name : "Laptop", price: 450000}, 
        {id: 3, name : "Tablet", price: 250000}, 
        {id: 4, name : "Motorcycle", price: 750000}, 
    ]
    const filters = products.filter(p => p.price >= 50000 && p.price <= 600000)

  return (
    <div>
      <h2>4. Price Range Filter</h2>
      {/* method 1 */}
      {/* {products
      .filter(p => p.price >= 200000 && p.price <= 500000)
      .map(p => <p key={p.id}>{p.name} {p.price}</p>)
      } */}
      {/* method 2 */}
        {filters.map(p => <p key={p.id}>{p.name}</p>)}
    </div>
  )
}

export default PriceRangeFilter
