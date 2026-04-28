import React from 'react'

const Reducers = () => {

// Sum of Array (Without Initial Value)
const nmbr = [1, 2, 3, 4]
const addition =  nmbr.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});
console.log("1st");
console.log(addition);

// Find Maximum Number (Largest Value)
const num = [7, 8, 9]
const result = num.reduce((accumulator, currentvalue) => {
    return accumulator > currentvalue ? accumulator :currentvalue
}, 0)
console.log("2nd")
console.log(result)

// Count Frequency (How many times each value appears)
const arr = ["a", "b", "c", "b", "a", "a"]
const result1 = arr.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = (accumulator[currentValue] || 0) + 1
    return accumulator
}, {})
console.log("3rd")
console.log(result1)


// Flatten Array (Nested array → Single array)
const arr3 = [[1, 2], [3, 4], [5]]
const result3 = arr3.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue)
}, [])
console.log("4th")
console.log(result3)

// Group By Property (Group users by age)
const users = ([
    {name: "a", age: 20},
    {name: "b", age: 25},
    {name: "c", age: 20},
])

const grouped = users.reduce((accumulator, user) => {
    const key = user.age
    if(!accumulator[key]){
        accumulator[key] = []
    }
    accumulator[key].push(user)
    return accumulator
}, {})
console.log("5th")
console.log(grouped)



  return (
    <div>
      <h2>JS Code</h2>
    </div>
  )
}

export default Reducers
