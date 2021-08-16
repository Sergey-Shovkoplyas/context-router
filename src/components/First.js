import React, {useState} from "react";


export default function Counter({initialCount, title}) {
    const [count, setValue] = useState(initialCount);

    return (
        <div>
            <h2>{title}</h2>

            <button onClick={() => setValue(prevCount => prevCount + 1)}>+</button>

            <span>{count}</span>

            <button onClick={() => setValue(prevCount => prevCount - 1)}>-</button>
        </div>
    );
}
