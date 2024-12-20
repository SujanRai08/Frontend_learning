import React from 'react'

const Greeting = (props) => {
    return props.timeOfDay === "morning" ? (<h1>Hi good morning</h1>) : (<h1>hi good evening</h1>)

}

export default Greeting