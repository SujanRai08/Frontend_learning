import React from 'react'
import UserProfile from './Comonents/UserProfile'
import { UserProvider } from './Comonents/UserContext'
import Upadateuser from './Comonents/Upadateuser'

const App = () => {
  return (
    <div>
      <UserProvider>
      <UserProfile/>
      <Upadateuser/>

      </UserProvider>
     
    </div>
  )
}

export default App