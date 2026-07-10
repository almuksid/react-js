import React, { useEffect, useState } from 'react'

const Test = () => {

    const [apiData, setApiData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const api = "https://pokeapi.co/api/v2/pokemon/bulbasaur"
    const fetchApi = async() => {
        try {
            const restore = await fetch(api)
            const data = await restore.json()
            setApiData(data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setError(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchApi()
    }, [])

    if(loading) 
        return (
            <h2>Loading...</h2>
        )

    if(error) 
        return(
            <h2>Something wants wrong: {error.message}</h2>
        )

  return (
    <div>
    
      <h3>{apiData.name}</h3>
      <p>Weight: {apiData.weight}</p>
        <p>Height: {apiData.height}</p>
    </div>
  )
}

export default Test
