import React, { useId } from 'react'

const Unique = () => {
    const id = useId();
  return (
    <div>
      
        <h1>Unique ID</h1>
        <label htmlFor={`${id}-email`}>Email</label>
        <input type="Email" id={`${id}-email`} placeholder='email@gmail.com' />

        <br />
        <label htmlFor={`${id}-password`}>Password</label>
        <input type="password" id={`${id}-password`} placeholder='password' />

    </div>
  )
}

export default Unique