import React, { useEffect, useState } from 'react'

const ProjectFetchApi = () => {
    const [apiData, setApiData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [search, setSearch] = useState("")

    const api = "https://pokeapi.co/api/v2/pokemon?limit=30"

    const fetchApi = async () => {
        try {
            const restore = await fetch(api)
            const data = await restore.json()
            // setApiData(data.results)
            const detailsData = await data.results
            // console.log(detailsData)

            const detailsApiData = data.results.map(async (pData) => {
                const res = await fetch(pData.url)
                const data = await res.json()
                return data
            })
            console.log(detailsApiData)

            const detailsResponse = await Promise.all(detailsApiData)
            console.log(detailsResponse)
            setApiData(detailsResponse)

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

    if (loading)
        return (
            <>
                <h2 className="text-center pt-[50px] text-2xl font-bold">Loading...</h2>
                <img src="/loading.gif" alt="loading..." />
            </>
        )
    if (error)
        return (
            <h2>Something Wants Wrong: {error.message}</h2>
        )
    const submitHandler = (e) => {
        e.preventDefault();
    }
    // apiData.name.toLowerCase().includes(search.toLowerCase())
    // apiData.filter((data) => data.name.toLowerCase().includes(search.toLowerCase()))

    const filterPokemon = apiData.filter(data => data.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <>
            <div className="min-h-screen bg-gray-100 p-8">
                <h1 className="text-4xl font-bold text-center mb-10">
                    Pokémon List
                </h1>
                <form onSubmit={submitHandler} className="max-w-lg mx-auto my-8 flex items-center gap-3">
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        placeholder="Search Pokémon..."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition"
                    />

                    <button
                        type="submit"
                        className="bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 active:scale-95 transition"
                    >
                        Search
                    </button>
                </form>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filterPokemon.map((data) => (
                        <li
                            key={data.id}
                            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl hover:-translate-y-1 transition duration-300"
                        >

                            <img
                                src={data.sprites.front_default}
                                alt={data.name}
                                className="w-24 h-24 mx-auto"
                            />

                            <h2 className="text-2xl font-bold text-center capitalize mt-3">
                                {data.name}
                            </h2>
                            <h2 style={{ width: "70%", background: "green", padding: "2", margin: "0 auto", color: 'white' }} className="text-2xl font-bold text-center capitalize mt-3">
                                {/* method - 1 */}
                                {/* {data.types[0].type.name} {data.types[1]?.type.name} */}
                                {/* method - 2 */}
                                {data.types.map((currentType) => currentType.type.name).join(", ")}

                            </h2>

                            <div className="mt-4 flex justify-between items-center text-gray-700 text-sm">
                                <p>
                                    <span className="font-semibold">Height:</span> {data.height}
                                </p>

                                <p>
                                    <span className="font-semibold">Weight:</span> {data.weight}
                                </p>

                                <p>
                                    <span className="font-semibold">Speed:</span> {data.stats[5].base_stat}
                                </p>
                            </div>
                            <div className="mt-4 flex justify-between items-center text-gray-700 text-sm">
                                <p>
                                    <span className="font-semibold">Exprience:</span> {data.base_experience}
                                </p>

                                <p>
                                    <span className="font-semibold">Attack:</span>
                                    {/* {data.stats.find((stat) => stat.stat.name === "attack")?.base_stat} */}
                                    {data.stats[1].base_stat}
                                </p>

                                <p>
                                    <span className="font-semibold">Abilities:</span>
                                    {/* {data.abilities[0].ability.name} */}
                                    {data.abilities.map(abData => abData.ability.name).slice(0, 1).join(", ")}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ProjectFetchApi
