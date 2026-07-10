import React, { useEffect, useState } from 'react'
import PokeApi from './PokeApi'
import LoadingErrorFetchApi from './LoadingErrorFetchApi'
import AsyncAwait from './AsyncAwait'
import Test from './Test'
import ProjectFetchApi from './ProjectFetchApi'

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
            {/* <LoadingErrorFetchApi/> */}
            {/* <AsyncAwait/> */}
            {/* <Test/> */}
            <ProjectFetchApi/>
        </div>
    )
}

export default FetchApi
