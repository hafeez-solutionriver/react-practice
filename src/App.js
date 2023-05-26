
import { useState } from "react";
import Navbar from "./Navbar";
import Counter from "./Counter"
import CounterFuncion from "./CounterFunction";
import ProductList from "./ProductList";
import Form from "./Form";
import obj from "./UseEffect"


function App() {
  
  const {Timer} = obj

const [displayName,setDisplayName] = useState("Name:1")

function udpatedDisplayName(val)
{
  setDisplayName(val)
}

  
  return (
    <div >
      <Timer/>
      <Navbar/>
      <Form/>
      <Counter name="dummy">
        <h1>Hello Buddy</h1>
      </Counter>
      <CounterFuncion update={udpatedDisplayName} name={displayName}/>

<ProductList/>


    </div>
  );
}

export default App;
