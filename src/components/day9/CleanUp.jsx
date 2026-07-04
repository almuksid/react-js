import React from 'react'
import { useState, useEffect } from 'react'
const CleanUp = () => {
    const [count, setCount] = useState(0)


    useEffect(() => {
        console.log(count)
    }, [count])



    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCount(count + 1)
    //     }, 1000);
    //     return () => clearInterval(interval)
    // }, [count])

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(data => data + 1)
        }, 1000);
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <h2>Count : <span>{count}</span> </h2>
            <h2>Subscribe Here</h2>
        </div>
    )
}

export default CleanUp
