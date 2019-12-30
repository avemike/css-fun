import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import GlitchView  from './views/glitch'
import Home  from './views/home'
import { Navbar } from './components/navbar/Navbar'
import './App.scss'

export const App = () => {
  return (
    <Router>
    <div className="container">
      <Navbar />
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/Glitch_effect" children={<GlitchView />} />
      </Switch>
    </div>
    </Router>
  )
}