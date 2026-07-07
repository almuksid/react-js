import React, { useEffect, useState } from 'react'
import PokeApi from './PokeApi'
import LoadingErrorFetchApi from './LoadingErrorFetchApi'

const FetchApi = () => {
    // const [apiData, setApiData] = useState([])
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/posts")
    //         .then((res) => res.json())
    //         .then((data) => { setApiData(data)})
    //         .catch((error) => console.log(error))
    // }, [])

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Fetch Api</h2>
            {/* {apiData.map((data) => {
                return <div key={data.id}>
                <span>{data.title}</span>
            </div>
            })} */}
            {/* <PokeApi/> */}
            <LoadingErrorFetchApi/>
        </div>
    )
}

export default FetchApi
