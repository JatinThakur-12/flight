// src/components/Counter.js
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);


    const increase = () => {
        if(count < 9){
            setCount((prevCount) => (prevCount + 1) % 10);
        }
    };
    const decrease = () => {
        if(count>0){
            setCount((prevCount) => (prevCount + 1) % 10);
        }
    }

    return (
        <div className='flex flex-row'>
            <button onClick={increase}>
                -
            </button>
            <div>{count}</div>
            <button onClick={decrease}>
                +
            </button>
        </div>
    );
};

export default Counter;
