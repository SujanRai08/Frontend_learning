import React from 'react'

const Weather = () => {
  let temp = 26;
  if(temp<13){
    return <h1>its cold outside</h1>
  }else if(temp>= 13 && temp<=25 ){
    return <h1>is hot outside</h1>
  }else if(temp>25){
    return <h1>its super hot</h1>
  }
  return (
    <div>
      <Weather/>
    </div>
  )
}

export default Weather