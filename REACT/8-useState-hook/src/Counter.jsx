import React, { useState } from "react"

function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }


    return (
        <>
            <div className="counter-container">
                <p className="count-display">{count}</p>
                <div className="btn-container">
                    <button className="counter-btn decrement-btn" onClick={decrement}>Decrement</button>
                    <button className="counter-btn reset-btn" onClick={reset}>Reset</button>
                    <button className="counter-btn increment-btn" onClick={increment}>Increment</button>
                </div>
            </div>
        </>
    )

}

export default Counter