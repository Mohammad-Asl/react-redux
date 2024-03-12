import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { increment , decrement , reset } from '../redux/counter/counterActions';

const CounterContainer = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
  return (
    <div>
        <h3>Counter</h3>
        <h3>{counter}</h3>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default CounterContainer