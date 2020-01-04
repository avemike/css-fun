import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home  from './views/home'
import GlitchView  from './views/glitch'
import WaterBall from './views/waterBall';
import Dice from './views/dice';
import { Navbar } from './components/navbar/Navbar'
import './App.scss'

export const App = () => {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Switch>
          <Route exact path="/"> 
            <Home />
          </Route>
          <Route path="/Glitch_effect">
            <GlitchView />
          </Route>
          <Route path="/Water_ball" >
            <WaterBall />
          </Route>
          <Route path="/Dice" >
            <Dice />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}