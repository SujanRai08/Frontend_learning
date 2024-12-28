import React, { useReducer } from 'react'

const initialState = {count: 0}
    const reducer = (state,action) =>{
        switch(action.type){
            case 'increment':
                return {...state,count: state.count+1};
            case 'decrement':
                return {...state,count: state.count-1};
            case 'reset':
                return{ ...state,count: 0}

            default:
                break;
        }

    }
const UseReducer = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
    // initial state = initial value
    // reducer = function conditional function takes state and action
  return (
    <div>
        <button onClick={() => dispatch({type: 'increment'})}>+</button>
        <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        <button onClick={() => dispatch({type: 'reset'})}>reset</button>
        <h1>Count: {state.count}</h1>



    </div>
  )
}

export default UseReducer