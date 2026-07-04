import React, { useEffect, useState } from 'react'

const FetchApi = () => {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setApiData(data)})
            .catch((error) => console.log(error))
    }, [])

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>Fetch Api</h2>
            {apiData.map((data) => {
                return <div key={data.id}>
                <span>{data.title}</span><br /><br />
            </div>
            })}
        </div>
    )
}

export default FetchApi
