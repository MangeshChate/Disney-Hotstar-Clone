import React from 'react'

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark ">
    <div class="container-fluid d-flex align-items-center">
  
      <div className="span navbar-toggler-icon me-4 ms-3"></div>
      <a class="navbar-brand d-flex align-items-center" href="#">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Disney%2B_logo.svg/1041px-Disney%2B_logo.svg.png" alt="" width="90"/>
        <span className='mt-2'> hotstar</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item fw-bold">
            <a class="nav-link active" aria-current="page" href="#">TV</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="#">Modvies</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sports</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Disney+</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Kids</a>
          </li>
        </ul>
        <span class="navbar-text">
          <div className="form">
          <div className="row d-flex " >
            <input type="text" className='col p-1  bg-dark  text-light opacity-25   border-end-0 align-items-center' id="search" placeholder='Search' />
            <div className="col bg-dark opacity-25 justify-content-end d-flex" style={{borderBottom:"2px solid grey"}} >

            <span class=" material-symbols-outlined ">search</span>
            </div>
            <button className="col btn btn-primary fw-bold ms-4 me-4 opacity-75 rounded-1" style={{height:"35px"}}>SUBSCRIBE</button>
            <div className="col d-flex align-items-center "><a href="/" className="nav-link opacity-75 ">LOGIN</a></div>
          </div>
            
          </div>
        </span>
      </div>
    </div>
  </nav>
  )
}
