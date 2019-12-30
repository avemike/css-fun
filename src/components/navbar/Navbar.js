import React from 'react'
import {
  Link
} from "react-router-dom"
import './navbar.scss'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Glitch_effect">Glitch Effect</Link>
        </li>
        <li>
          <Link to="/Water_ball">Water Ball Animation</Link>
        </li>
      </ul>
    </nav>
  )
}