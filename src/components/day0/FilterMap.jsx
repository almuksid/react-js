import React from 'react'
import ActiveUserFilter from './filter/ActiveUserFilter'
import SearchFilter from './filter/SearchFilter'
import CategoryFilter from './filter/CategoryFilter'
import PriceRangeFilter from './filter/PriceRangeFilter'
import MultipleFilters from './filter/MultipleFilters'
import RemoveItem from './filter/RemoveItem'

const FilterMap = () => (
  <div>
    {/* <h2>Welcome</h2> */}
    <ActiveUserFilter />
    <SearchFilter />
    <CategoryFilter />
    <PriceRangeFilter />
    <MultipleFilters />
    <RemoveItem/>
  </div>
)

export default FilterMap
