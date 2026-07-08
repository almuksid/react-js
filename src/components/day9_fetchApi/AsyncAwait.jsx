import React, { useEffect, useState } from 'react'

const AsyncAwait = () => {

    const [apiData, setApiData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    const api = ("https://pokeapi.co/api/v2/pokemon/bulbasaur")
    const fetchApi = async () => {
        try {
            const res = await fetch(api)
            const data = await res.json()
            setApiData(data)
            setLoading(false)
        } catch (err) {
            console.log(err);
            setError(err);
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchApi()
    }, [])


    if (loading)
        return (
            <h2>Loading...</h2>
        )
    if (error)
        return (
            <h3>Something Wants Wrong: {error.message}</h3>
        )
    return (
        <div>
            <h3>{apiData?.name}</h3>
            <p>Weight: {apiData?.height}</p>
            <p>Height: {apiData?.weight}</p>
        </div>
    )
}


export default AsyncAwait
