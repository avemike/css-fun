import React from 'react'
import {
  NavLink
} from "react-router-dom"
import './navbar.scss'

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact>Home</NavLink>
        </li>
        <li>
          <NavLink to="/Glitch_effect">Glitch Effect</NavLink>
        </li>
        <li>
          <NavLink to="/Water_ball">Water Ball Animation</NavLink>
        </li>
        <li>
          <NavLink to="/Dice">Dice</NavLink>
        </li>
        <li>
          <NavLink to="/Landscape">Landscape</NavLink>
        </li>
      </ul>
    </nav>
  )
}