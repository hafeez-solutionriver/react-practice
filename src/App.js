

import Home from "./Home";
import Navbar from "./Navbar";
import TicTacToe from "./TicTacToe";
import Calculator from "./Calculator";

import {Routes,Route} from "react-router-dom"



function App() {
  

  
  return (
    <div >
      
      <Navbar/>
      <Routes>

      <Route path="/"element={<Home/>} />
      <Route path="tictactoe"element={<TicTacToe/>} />
      <Route path="calculator"element={<Calculator/>} />

      </Routes>
     


    </div>
  );
}

export default App;
