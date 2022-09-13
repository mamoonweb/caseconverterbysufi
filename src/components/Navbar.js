import React from 'react'
import PropTypes from 'prop-types'
import { Outlet, Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <a className="navbar-brand" href="/">{props.title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span> 
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home  <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="./about">{props.about}</Link>
      </li>
      
      <li className="nav-item">
        <Link className="nav-link" to="/">Contact</Link>
      </li>
    </ul>
    <div id='checking' className={`custom-control custom-switch text-${props.mode==='dark'?'light':'dark'}`}>
      <input type="checkbox" checked={props.mode==='dark'} className="custom-control-input" onClick={props.toggleMode} id="customSwitches"/>
      <label className="custom-control-label" htmlFor="customSwitches">Enable {props.mode==='dark'?'light':'dark'} Mode</label>
    </div>

  </div>
</nav>
  <Outlet/>
    
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}          