import React, { useEffect, useRef, useState } from 'react'

const UserRef = () => {
    // const element = useRef(null);
    // const focusElement = () =>{
    //     element.current.focus();
    //     element.current.value = 'sujan';
    // }

    const [count, setCount] = useState(0);
    const intervalRef = useRef(null);
    useEffect(()=>{

        intervalRef.current = setInterval(()=>{
            setCount(prevCount => prevCount +1 )

        },1000)
        return () =>{
            clearInterval(intervalRef.current);
        }
    },[])

  return (
    // <div>
    //     <input type="text" ref={element} />
    //     <button onClick={focusElement}>Focus</button>
    // </div>
    <>
    <h1>Timer: {count}second</h1>
    <button onClick={()=> clearInterval(intervalRef.current)}>stop button</button>
    </>
  )
}

export default UserRef