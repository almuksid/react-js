import React from 'react'
import { useState, useEffect } from 'react'
import Title from './Title';
import CleanUp from './CleanUp';

const UseEffect = () => {
    const [dateTime, setDateTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            setDateTime(new Date().toLocaleTimeString());
        };

        updateTime(); // প্রথমবার সঙ্গে সঙ্গে Time দেখাবে

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    //     const [dateTime, setDateTime] = useState("");
    //     useEffect(() => {
    //         const interval = setInterval(() => {
    //             const updatedDate = new Date();
    //             setDateTime(updatedDate.toLocaleTimeString());
    //         }, 1000);
    //         return () => {
    //             clearInterval(interval);
    //         }

    //     }, [])
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h2>useEffect</h2>
                <p>{dateTime}</p>

                {/* <Title /> */}
                <CleanUp />
            </div>
        </>
    )
}

export default UseEffect
