import { React, useReducer } from 'react'

const UseReducer = () => {

    const initialStates = {
        count: 0,
        inc: 2,
        dec: 2
    }

    function reducer(state, action) {
        console.log(state, action)
        // if (action.type === 'INCREMENT') {
        //     return state + 1
        // }
        // if (action.type === 'DECREMENT') {
        //     return state - 1
        // }
        // if (action.type === 'RESET') {
        //     return 0
        // }
        switch (action.type) {
            case "INCREMENT":
                return { ...state, count: state.count + 1};
        
            case "DECREMENT":
                return {...state ,count: state.count - 1};

            case "RESET":
                return {...state, count: 0};
            default:
                state;
        }
    }

    // const reducer = (state, action) => {
    //     console.log(state, action)
    //     if (action.type === 'INCREMENT') {
    //         return state + 1
    //     }
    //     if( action.type === 'DECREMENT') {
    //         return state -1
    //     }
    // }

    const [state, dispatch] = useReducer(reducer, initialStates);
    console.log(state)

    return (
        <div style={{ textAlign: 'center', paddingTop: '20px' }}>
            <h2>Use Reducer Hook</h2>
            <h3>Count: {state.count}</h3>
            <button type="submit" onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
            <button type="submit" onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
            <button type="submit" onClick={() => dispatch({ type: 'RESET' })}>Reset</button>

        </div>
    )
}

export default UseReducer
