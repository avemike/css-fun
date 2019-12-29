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
          <Link to="/Glitch_effect">Glitch art</Link>
        </li>
      </ul>
    </nav>
  )
}