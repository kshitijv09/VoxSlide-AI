import React from 'react'
import 'bulma/css/bulma.min.css';
import "./Navbar.css"
export default function Navbar() {
  return (
    
      <nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
   {/*  <a class="navbar-item" href="https://bulma.io">
      <svg width="640" height="160" viewBox="0 0 640 160" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 110L10 40L50 0L100 50L70 80L110 120L50 160L0 110Z" fill="#C142D6"/>
      </svg>

    </a> */}

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
</nav>
  )
}
  
