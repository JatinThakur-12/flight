// src/components/Counter.js
import React, { useState } from 'react';

const Counter = ({val, handleCount}) => {
    const [count, setCount] = useState(val);


    const increase = () => {
        if(count < 9){
            // console.log("clicked")
            setCount((prevCount) => prevCount + 1);
            handleCount(count+1)
        }
    };
    const decrease = () => {
        if(count>0){
            setCount((prevCount) => prevCount - 1);
            handleCount(count-1)
        }
    }

    return (
        <div className='flex flex-row border align-middle justify-between items-stretch p-1 w-28'>
            <button className='border py-1 px-3 bg-red-300' onClick={()=>decrease()}>
                -
            </button>
            <div className='self-center'>{count}</div>
            <button className='border py-1 px-3 bg-green-300' onClick={()=>increase()}>
                +
            </button>
        </div>
    );
};

export default Counter;
