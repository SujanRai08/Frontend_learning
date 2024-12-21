import React, { useContext, useState } from 'react'
import { UserContext } from './UserContext'

const Upadateuser = () => {
    const {updateUser} = useContext(UserContext)
    const [newName,setName] = useState('');
    const handleSubmit = e =>{
        e.preventDefault()
        if(newName.trim()){
            updateUser(newName);
            setName('');
        }
    }
  return (
    <div>
        <h2>Updated name</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={newName} onChange={e=> setName(e.target.value)} placeholder='enter new name'/>
            <button type='submit'>Update</button>

        </form>
    </div>
  )
}
export default Upadateuser