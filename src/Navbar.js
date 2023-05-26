import React from 'react'

export default class Navbar extends React.Component{

   render(){
    return (

        <nav className="navbar  navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid bg-secondary">
    <a className="navbar-brand" href="#">
      Hafeez Work
    </a>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Counter
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Calculator
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#">
            Tic Tac Toe
          </a>
        </li>
        
        
      </ul>
   
    </div>
  </div>
</nav>

    );
   }

    
}

