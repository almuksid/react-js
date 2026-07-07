import React, { useEffect, useState } from 'react'

const LoadingErrorFetchApi = () => {
    const [apiData, setApiData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()

    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
            .then(restore => restore.json())
            .then((data) => {
                setApiData(data)
                setLoading(false)
            })
            
            .catch(err => {
                console.log(err);
                setError(err);
                setLoading(false);
            })
    }, [])


    if (loading)
        return (
            <div>
                <h2>Loading...</h2>
            </div>
        )

    if (error)
        return (
            <div>
                <h2>We ar not finding Data:
                    <span>{error.message}</span>
                </h2>
            </div>
        )

    return (
        <div>
            <h2> Fetch Api Loading & Error in React </h2><hr />
            <h2>{apiData.name}</h2>
            <img style={{ width: "150px" }}
                src={apiData?.sprites?.front_default}
                alt={apiData?.name}
            />
            <p> Height: {apiData.height}</p>
            <p> Width: {apiData.weight}</p>
            <p> Exprations: {apiData.base_experience}</p>
        </div>
    )
}


export default LoadingErrorFetchApi
