import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext();
const UserProvider = ({children}) => {
    const [user,setuser] = useState({name:'sujan rai'})
    const updateUser = (newUser) =>{
        setuser({name: newUser})
    }
    return <UserContext.Provider value={{user,updateUser}}>
        {children}

    </UserContext.Provider>

}

export {UserContext,UserProvider}