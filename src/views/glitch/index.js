import React from 'react'
import {
  Link
} from "react-router-dom"

import { GlitchBox } from './components/GlitchBox'

const GlitchView = () => {
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Go back</Link>
          </li>
        </ul>
      </nav>
      <GlitchBox />
    </div>
  )
}
export default GlitchView