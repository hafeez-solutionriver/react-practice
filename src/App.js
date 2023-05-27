

import Home from "./Home";
import Navbar from "./Navbar";
import TicTacToe from "./TicTacToe";
import GeneralCounterForRenderProps from "./GeneralCounterForRenderProps";
import GeneralCounterForHOC from "./GeneralCounterForHOC";

import {Routes,Route} from "react-router-dom"



function App() {
  

  
  return (
    <div >
      
      <Navbar/>
      <Routes>

      <Route path="/"element={<Home/>} />
      <Route path="tictactoe"element={<TicTacToe/>} />
      <Route path="renderprops"element={<GeneralCounterForRenderProps/>} />
      <Route path="counter"element={<GeneralCounterForHOC/>} />
      </Routes>
     


    </div>
  );
}

export default App;
