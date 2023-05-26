import {useState, useEffect} from 'react'



export default function CounterFuncion(props){


    const [count,setCount] = useState(0)

    const [person,setPerson] = useState({name:"Hafeez",age:30})


    const increment = ()=>{
        setCount(prev=> prev+1)
        
    }

    useEffect(() => {
      console.log(count);
    }, [count])

    // const ammarFucntion = () =>{

    //   increment()
    //   increment()
    //   increment()
    //   increment()
    //   increment()
    // }
    
    const decrement = ()=>{
        setCount(count-1)
    }


    return (
    
        <div className="btn-group d-flex  " role="group" aria-label="Basic example">
         
          <button type="button" className="btn btn-secondary" onClick={decrement}>
            -
          </button>
          <button type="button" className="btn btn-secondary">
           {count}
          </button>
          <button type="button" className="btn btn-secondary" onClick={increment}>
            +
          </button>

        <h1>Props value is:{props.name}</h1>
        <button onClick={()=>{props.update("Dhano")}}>Click me to change value of parent props</button>
        
        <label onClick={()=>{setPerson({...person,age:40})}}>

        {JSON.stringify(person)}
        </label>

        </div>
        

        
                )
    

}