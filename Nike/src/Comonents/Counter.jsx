import React, { useReducer, useState } from 'react'
import { counterReducer, initialState } from './counterReducer'


const Counter = () => {
    const [state,dispatch] = useReducer(counterReducer,initialState)
    const [inputvalue,setinput] = useState(0);
    const handleincrement = () => dispatch({type: "increment"})
    const handledecrement = () => dispatch({type: "decrement"})
    const handleincrementByAmount = () =>{
        dispatch({type: 'incrementByAmount', payload: +inputvalue})
        setinput(0);
    }
    const handledecrementByAmount = () =>{
        dispatch({type: 'decrementByAmount', payload: +inputvalue})
        setinput(0);
    }
    
  return (
    <div>
        <h2> counter: {state.count}</h2>
        <button onClick={handleincrement}>Increment</button>
        <button onClick={handledecrement}>Decrement</button>
    
        <div>
            <input type="number" value={inputvalue} onChange={e=>setinput(e.target.value)}  />
            <button onClick={handleincrementByAmount}>Add</button>
            <button onClick={handledecrementByAmount}>Sub</button>
        </div>
        
    </div>
  )
}

export default Counter