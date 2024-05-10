import React from 'react'
import 'bulma/css/bulma.min.css';
import "./Navbar.css"
export default function Navbar() {
  return (
    <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">  
      <a role="button" class="navbar-burger is-hoverable" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
  
    <div id="navbarBasicExample" class="navbar-menu is-hoverable navbarr" >
    <div class="navbar-start">
      <button className='nav-ele-cont' id="nav-1">
        <a class="navbar-item">
        Features
        </a>
      </button>
      
      <button className='nav-ele-cont' id="nav-2">
      <a class="navbar-item">
        Pricing
      </a>
      </button>
      <button className='nav-ele-cont' id="nav-3">
      <a class="navbar-item">
        Use Cases
      </a>
      </button>
      <button className='nav-ele-cont' id="nav-4">
      <a class="navbar-item">
        Resources
      </a>
      </button>
      <button className='nav-ele-cont' id="nav-5">
      <a class="navbar-item">
        About
      </a>
      </button>
    </div>

  </div>
  </nav>
     
      
  )
}
   {/* <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
       <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu navbarr" >
    <div class="navbar-start">
      <button className='nav-ele-cont' id="nav-1">
        <a class="navbar-item">
        Features
        </a>
      </button>
      
      <button className='nav-ele-cont' id="nav-2">
      <a class="navbar-item">
        Pricing
      </a>
      </button>
      <button className='nav-ele-cont' id="nav-3">
      <a class="navbar-item">
        Use Cases
      </a>
      </button>
      <button className='nav-ele-cont' id="nav-4">
      <a class="navbar-item">
        Resources
      </a>
      </button>
      <button className='nav-ele-cont' id="nav-5">
      <a class="navbar-item">
        About
      </a>
      </button>
    </div>

  </div>
</nav> */}
