import React from 'react'
import { Link } from 'react-router-dom'
import logo from './logo.png'
import profile from './profilepic.jpg'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow">
  <div className="container">
    <img src={logo} alt="logo" width="70" height="70"/>
      <ul className="nav justify-content-center">
        <li><Link className="nav-link active" aria-current="page" to="/" style={{color:'#D22B2B'}}><h5>Home</h5></Link></li>
        <li><Link className="nav-link active" to="/search" style={{color:'#00CED1'}}><h5>Search</h5></Link></li>
        <li><Link className="nav-link active" to="/playlist" style={{color:'#D22B2B'}}><h5>Playlist</h5></Link></li>
        </ul>
        <Link className="nav-link active" to="/profile">
        <img src={profile} alt="logo" width="70" height="70" style={{borderRadius:50,borderStyle:'solid',borderColor:'#00CED1'}}/>
        </Link>
      </div>
</nav>
  )
}
