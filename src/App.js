import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home  from './views/home'
import GlitchView  from './views/glitch'
import WaterBall from './views/waterBall';
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
        <Route path="/Water_ball" children={<WaterBall />} />
      </Switch>
    </div>
    </Router>
  )
}