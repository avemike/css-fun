import React from 'react';
import {
  Link
} from "react-router-dom";

export const Home = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/Glitch_effect">Glitch art</Link>
        </li>
      </ul>
    </nav>
  )
}