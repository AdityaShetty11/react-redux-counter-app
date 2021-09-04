import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const Counter =()=>{
const counterValue = useSelector(state=>state.counter);
const dispatch =useDispatch();

const onIncrementHandler =() =>{
    dispatch({type:'increment'});
};

const onDecrementHandler = ()=>{
    dispatch({type:'decrement'});
};

const onAdd10 = () =>{
    dispatch({type:'incerease', value: 10});
};

const resetCounter=()=>{
    dispatch({type:'reset'});
};
    return(
        <>
        <h1>Counter</h1>
        <div>{counterValue}</div>
        <button onClick={onDecrementHandler}>-</button>
        <button onClick={onIncrementHandler}>+</button>
        <button onClick={onAdd10}>Add 10</button> <br/>
        <button onClick={resetCounter}>Reset</button>
        </>
    )
};

export default Counter;