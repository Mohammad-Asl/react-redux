import React from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { increament, decreament, reset } from './counterSlice'

const Counter = () => {
const count = useSelector((state) => state.counter.count)
const dispatch = useDispatch()
  return (
    <div>
        <h3>Count - {count}</h3>
        <button onClick={() => dispatch(increament())}>+</button>
        <button onClick={() => dispatch(reset())}>reset</button>
        <button onClick={() => dispatch(decreament())}>-</button>
    </div>
  )
}

export default Counter