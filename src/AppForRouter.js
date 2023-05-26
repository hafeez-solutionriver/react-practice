
import Home from "./Home";
import About from "./About";
import { Routes,Route } from "react-router-dom";
function AppForRouter() {
  
 
  
  return (
    <div >
        {/* Step:2 
        Create a Routes tag and wrap Route  */}
    <Routes>

        {/* Step:3 
        Create as many as possible Routes
        1st perimeter => path
        2nd permeter => element */}
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
       
        
    </Routes>

    </div>
  );
}

export default AppForRouter;
