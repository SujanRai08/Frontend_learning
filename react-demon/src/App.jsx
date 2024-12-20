import React from 'react'
import Carted from './components/Carted'
import Weather from './components/Weather'
import UserState from './components/UserState'
import Greeting from './components/Greeting'
// const ValidPass =() => <h1>Valid Password</h1>
// const InValidPass =() => <h1>InValid Password</h1>
// const Password = ({isvalid}) => {
//   if(isvalid){
//     return <ValidPass/>
//   }else{
//     return<InValidPass/>
//   }d

// }
const App = () => {
  return (
    <div>
      {/* <Weather/> */}
      {/* <Carted/>
      <Password isvalid={false}/> */}
      {/* <UserState loggedIn = {true} isAdmin={false}/> */}
      <Greeting timeOfDay = "morning"/>
    </div>
  )
}

export default App