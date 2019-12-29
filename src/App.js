import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import GlitchView  from './views/glitch'
import { Home } from './views/home/Home'

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" children={<Home />} />
        <Route path="/Glitch_effect" children={<GlitchView />} />
      </Switch>
    </Router>
  )
}