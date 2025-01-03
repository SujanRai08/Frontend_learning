import React, { useEffect, useState } from 'react'


const useFetch = (url) => {
    const [data,setdata] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=> setdata(data))
    })

  return [data]
}

export default useFetch