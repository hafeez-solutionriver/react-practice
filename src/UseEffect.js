import { useState,useEffect } from "react";

 function Timer(){

    const [time,setTime] = useState(new Date())

    function tick()
    {
        setTime(new Date())
    }

    // when component mount
    useEffect(()=>{

setInterval(() => {
    tick()
}, 1000);

    },[])

// when component udpate
    useEffect(()=>{

  
            },[time])
    return <>
    
    <h1>asd{time.toLocaleTimeString()}asd</h1>
    </>
}


export default {Timer}