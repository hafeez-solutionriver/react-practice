import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Navbar(){


  const navigation = useNavigate()
  
    return (

        <nav className="navbar  navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid bg-secondary">
    <a className="navbar-brand" href="#" onClick={()=>navigation('/')}>
      Hafeez Work
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={()=>navigation('counter')}>
            Counter
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>navigation('renderprops')}>
            Render Props
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#" onClick={()=>navigation('tictactoe')}>
            Tic Tac Toe
          </a>
        </li>
        
        
      </ul>
   
    </div>
  </div>
</nav>

    );
   }

    


