import Counter from "./Counter"
import CounterFuncion from "./CounterFunction";
import ProductList from "./ProductList";
import Form from "./Form";
import obj from "./UseEffect"
import { useState } from "react";
export default function Home(){
    const {Timer} = obj

    const [displayName,setDisplayName] = useState("Name:1")
    
    function udpatedDisplayName(val)
    {
      setDisplayName(val)
    }
    
    return(

        <>
        <Timer/>
        <Form/>
        <Counter name="dummy">
          <h1>Hello Buddy</h1>
        </Counter>
        <CounterFuncion update={udpatedDisplayName} name={displayName}/>
  
  <ProductList/>

  </>
    )
}