import React, { useState } from 'react'

export default function Navbar(props) {
     
  return (
    <> 
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">LoginSignup</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">About <span className="sr-only">(current)</span></a>
      </li >
      <li className="nav-item active">
      <a className="nav-link" href="/signup">Signup <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item active"> 
        <a className="nav-link" href="/login">Login <span className="sr-only">(current)</span></a>
        </li>
      
    </ul>
  
<div className="custom-control custom-switch">
  <input onChange={props.onChange} type="checkbox" class="custom-control-input" id="customSwitches"/>
  <label class="custom-control-label" htmlFor="customSwitches" style={{color:`${props.mode=='light'?'black':'white'}`}}>Enable {props.mode} mode</label>
</div>
  </div>
</nav>
</>
  )
}
