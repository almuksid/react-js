import React, { useEffect, useState } from 'react'

const Title = () => {
    const [count, setCount] = useState(0)
    const [title, setTitle] = useState("Al Muksid")

    useEffect(()=> {
        document.title = `C: ${count}T: ${title}`
    }, [count, title])
    
    useEffect(() => {
        console.log(title)
    }, [title])
    
    return (
        <div>
            <h2>Count : <span>{count}</span> </h2>
            <p>Title: {title}</p>
            <input type="text" name="title" id="" value={title} onChange={(e) => setTitle(e.target.value)} /> <br /> <br />

            <button type="submit" onClick={() => setCount(count + 1)}>Increment</button>

        </div>
    )
}

export default Title
