import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home  from './views/home'
import GlitchView  from './views/glitch'
import Waterball from './views/waterball';
import Dice from './views/dice';
import Landscape from './views/landscape';
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
            <Waterball />
          </Route>
          <Route path="/Dice" >
            <Dice />
          </Route>
          <Route path="/Landscape" >
            <Landscape />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}