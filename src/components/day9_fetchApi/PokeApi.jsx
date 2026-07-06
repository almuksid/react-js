import React, { useEffect, useState } from 'react'

const PokeApi = () => {
    const [apiData, setapiData] = useState(null)

    useEffect(() => {
        // fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur")
            .then((res) => res.json())
            .then((data) => setapiData(data))
            .catch((error) => console.log(error));
    }, []);
    console.log(apiData)
if(!apiData) return <div><h2>Loading... </h2></div>
    return (
        <>
            <div>
                <h1>{apiData?.name}</h1>

                <img style={{ width: "150px" }}
                    src={apiData?.sprites?.front_default}
                    alt={apiData?.name}
                />

                <p>Height: {apiData?.height}</p>
                <p>Weight: {apiData?.weight}</p>
                <p>Experience: {apiData?.base_experience}</p>
            </div>
        </>
    )
}


export default PokeApi
